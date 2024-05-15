// Ensure Web3 is injected (e.g., by MetaMask)
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    window.web3 = new Web3(window.ethereum);

    // Request account access if needed
    window.ethereum.request({ method: 'eth_requestAccounts' });
} else {
    console.log('MetaMask is not installed. Please install MetaMask to use this feature.');
}

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskName = document.getElementById('taskName').value.trim();
    const taskDescription = document.getElementById('taskDescription').value.trim();
    const taskAssignee = document.getElementById('taskAssignee').value.trim();
    const taskStatus = document.getElementById('taskStatus').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    // Check if any field is empty
    if (taskName === "" || taskDescription === "" || taskAssignee === "" || taskDeadline === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Check if task with same name already exists
    if (isTaskNameDuplicate(taskName)) {
        alert("A task with the same name already exists!");
        return;
    }

    // Check if deadline is in the past
    const deadlineDate = new Date(taskDeadline);
    if (deadlineDate < new Date()) {
        alert("Deadline must be a future date!");
        return;
    }

    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <h3>${taskName}</h3>
        <p><strong>Description:</strong> ${taskDescription}</p>
        <p><strong>Assignee:</strong> ${taskAssignee}</p>
        <p><strong>Status:</strong> <select class="status-select">
            <option value="Incomplete"${taskStatus === 'Incomplete' ? ' selected' : ''}>Incomplete</option>
            <option value="Complete"${taskStatus === 'Complete' ? ' selected' : ''}>Complete</option>
        </select></p>
        <p><strong>Deadline:</strong> ${taskDeadline}</p>
    `;

    const statusSelect = taskItem.querySelector('.status-select');
    statusSelect.addEventListener('change', updateTaskStatus);

    if (taskStatus === 'Complete') {
        statusSelect.disabled = true;
        document.getElementById('completedTasks').appendChild(taskItem);
    } else {
        document.getElementById('createdTasks').appendChild(taskItem);
    }

    // Store task data on the blockchain
    storeTaskOnBlockchain(taskName, taskDescription, taskAssignee, taskStatus, taskDeadline);

    document.getElementById('taskForm').reset();
});

function updateTaskStatus(event) {
    const taskItem = event.target.closest('.task-item');
    const selectedStatus = event.target.value;

    if (selectedStatus === 'Complete') {
        event.target.disabled = true;
        document.getElementById('completedTasks').appendChild(taskItem);
    } else {
        document.getElementById('createdTasks').appendChild(taskItem);
    }
}

function isTaskNameDuplicate(name) {
    const taskNames = document.querySelectorAll('.task-item h3');
    for (let i = 0; i < taskNames.length; i++) {
        if (taskNames[i].textContent === name) {
            return true;
        }
    }
    return false;
}

async function storeTaskOnBlockchain(name, description, assignee, status, deadline) {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    const contractABI = [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "tasks",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "assignee",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "status",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "deadline",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_assignee",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_status",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_deadline",
            "type": "string"
          }
        ],
        "name": "createTask",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getTasks",
        "outputs": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "assignee",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "status",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "deadline",
                "type": "string"
              }
            ],
            "internalType": "struct TaskManager.Task[]",
            "name": "",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
    ];
    const contractAddress = '0x9F059fabf6843EDaD8d427270161B4CcdE82a341'; // Replace with your deployed contract address

    const contract = new web3.eth.Contract(contractABI, contractAddress);
    await contract.methods.createTask(name, description, assignee, status, deadline).send({ from: account });

    console.log('Task stored on blockchain by account:', account);
}
