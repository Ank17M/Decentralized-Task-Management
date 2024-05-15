# Decentralized-Task-Management
Overview
This project is a decentralized task management system built on blockchain technology. 

It includes two main components:
-Task Manager Folder: Contains the smart contract for managing tasks on the blockchain.
-Page Folder: Contains the front-end web application for interacting with the task manager smart contract.


Getting Started
-Node.js and npm: Ensure you have Node.js and npm installed. You can download and install them from Node.js official website.
-Truffle: Install Truffle globally using npm:
  npm install -g truffle
-MetaMask: A browser extension for interacting with the Ethereum blockchain. You can install it from MetaMask website.

Setting Up the Smart Contract
1. Navigate to the task-manager folder:
  cd decentralized-task-management/task-manager
2. Install dependencies:
  npm install
3. Compile the smart contracts:
  truffle compile
4. Deploy the smart contracts:
├── Ensure you have a local blockchain running (e.g., using Ganache), 
└── then deploy the contracts:
    truffle migrate

Running the Web Application
1. Navigate to the page folder:
  cd decentralized-task-management/page
2. Open the index page


Project Structure Details
-Task Manager Folder
contracts/: Contains the Solidity smart contracts.
TaskManager.sol: The main smart contract for managing tasks.
migrations/: Contains migration scripts for deploying smart contracts.
test/: Contains test scripts for the smart contracts.
truffle-config.js: Truffle configuration file.

-Page Folder
src/: Contains the source code for HTML page, CSS and JavaScript.
components/: Contains HTML PAGE components.
index.html: Main Web-application component.
script.js: Script to handle the page events.

Usage
-Adding a Task
Open the web application in your browser.
Connect your MetaMask wallet.
Use the provided form to add a new task.
-Viewing Tasks
Tasks added via the web application are stored on the blockchain.
The task list can be viewed and managed through the web application interface.
-Completing a Task
Use the web application to mark tasks as completed.
The status update is recorded on the blockchain.
