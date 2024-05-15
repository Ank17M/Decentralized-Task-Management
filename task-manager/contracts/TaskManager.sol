// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TaskManager {
    struct Task {
        string name;
        string description;
        string assignee;
        string status;
        string deadline;
    }

    Task[] public tasks;

    function createTask(string memory _name, string memory _description, string memory _assignee, string memory _status, string memory _deadline) public {
        tasks.push(Task(_name, _description, _assignee, _status, _deadline));
    }

    function getTasks() public view returns (Task[] memory) {
        return tasks;
    }
}
