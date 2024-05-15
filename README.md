# Decentralized-Task-Management
**Overview**<br />
This project is a decentralized task management system built on blockchain technology. <br />

**It includes two main components:**<br />
**-Task Manager Folder:** Contains the smart contract for managing tasks on the blockchain.<br />
**-Page Folder:** Contains the front-end web application for interacting with the task manager smart contract.<br />


**Getting Started**
-Node.js and npm: Ensure you have Node.js and npm installed. You can download and install them from Node.js official website.<br />
-Truffle: Install Truffle globally using npm:<br />
 └── ``` npm install -g truffle ```<br />
-MetaMask: A browser extension for interacting with the Ethereum blockchain. You can install it from MetaMask website.<br />

**Setting Up the Smart Contract**<br />
1. Navigate to the task-manager folder:<br />
   └── ``` cd decentralized-task-management/task-manager ```<br />
2. Install dependencies:<br />
   └── ``` npm install ```<br />
3. Compile the smart contracts:<br />
   └── ``` truffle compile ```<br />
4. Deploy the smart contracts:<br />
   ├── Ensure you have a local blockchain running (e.g., using Ganache),<br />
   ├── then deploy the contracts:<br />
   └── ``` truffle migrate ```<br />

**Running the Web Application**<br />
1. Navigate to the page folder:<br />
   └── ``` cd decentralized-task-management/page ```<br />
2. Open the index page<br />


**Project Structure Details**<br />
**-Task Manager Folder**<br />
├── contracts/: Contains the Solidity smart contracts.<br />
├── TaskManager.sol: The main smart contract for managing tasks.<br />
├── migrations/: Contains migration scripts for deploying smart contracts.<br />
├── test/: Contains test scripts for the smart contracts.<br />
└── truffle-config.js: Truffle configuration file.<br />

**-Page Folde**r<br />
├── src/: Contains the source code for HTML page, CSS and JavaScript.<br />
├── components/: Contains HTML PAGE components.<br />
├── index.html: Main Web-application component.<br />
└── script.js: Script to handle the page events.<br />

**Usage**<br />
**-Adding a Task**<br />
├── Open the web application in your browser.<br />
├── Connect your MetaMask wallet.<br />
└── Use the provided form to add a new task.<br />

**-Viewing Tasks**<br />
├── Tasks added via the web application are stored on the blockchain.<br />
└── The task list can be viewed and managed through the web application interface.<br />

**-Completing a Task**<br />
├── Use the web application to mark tasks as completed.<br />
└── The status update is recorded on the blockchain.<br />
