// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FreelanceMarketplace {
    struct Freelancer {
        address payable account;
        string name;
        string skills;
        uint256 hourlyRate;
        uint256 balance;
    }

    struct Client {
        address payable account;
        string name;
        uint256 balance;
    }

    mapping(address => Freelancer) public freelancers;
    mapping(address => Client) public clients;

    event FreelancerRegistered(address freelancer);
    event ClientRegistered(address client);
    event ProjectCreated(
        address indexed client,
        address indexed freelancer,
        string projectName,
        uint256 amount
    );
    event ProjectCompleted(
        address indexed freelancer,
        address indexed client,
        string projectName,
        uint256 amount
    );
    event PaymentReleased(
        address indexed freelancer,
        address indexed client,
        string projectName,
        uint256 amount
    );

    modifier onlyFreelancer() {
        require(
            freelancers[msg.sender].account == msg.sender,
            "Only freelancers can call this function."
        );
        _;
    }

    modifier onlyClient() {
        require(
            clients[msg.sender].account == msg.sender,
            "Only clients can call this function."
        );
        _;
    }

    function registerAsFreelancer(
        string memory _name,
        string memory _skills,
        uint256 _hourlyRate
    ) external {
        require(
            freelancers[msg.sender].account != msg.sender,
            "You are already registered as a freelancer."
        );

        Freelancer storage freelancer = freelancers[msg.sender];
        freelancer.account = payable(msg.sender);
        freelancer.name = _name;
        freelancer.skills = _skills;
        freelancer.hourlyRate = _hourlyRate;

        emit FreelancerRegistered(msg.sender);
    }

    function registerAsClient(string memory _name) external {
        require(
            clients[msg.sender].account != msg.sender,
            "You are already registered as a client."
        );

        Client storage client = clients[msg.sender];
        client.account = payable(msg.sender);
        client.name = _name;

        emit ClientRegistered(msg.sender);
    }

    function createProject(
        address _freelancer,
        string memory _projectName,
        uint256 _amount
    ) external onlyClient {
        Freelancer storage freelancer = freelancers[_freelancer];
        require(
            freelancer.account == _freelancer,
            "Freelancer does not exist."
        );
        require(_amount > 0, "Amount must be greater than zero.");
        require(
            clients[msg.sender].balance >= _amount,
            "Insufficient balance."
        );

        clients[msg.sender].balance -= _amount;

        emit ProjectCreated(msg.sender, _freelancer, _projectName, _amount);
    }

    function completeProject(
        address _client,
        string memory _projectName,
        uint256 _amount
    ) external onlyFreelancer {
        require(clients[_client].account == _client, "Client does not exist.");
        require(_amount > 0, "Amount must be greater than zero.");
        require(
            freelancers[msg.sender].balance >= _amount,
            "Insufficient balance."
        );

        freelancers[msg.sender].balance += _amount;
        clients[_client].balance += _amount;

        emit ProjectCompleted(msg.sender, _client, _projectName, _amount);
    }

    function releasePayment(
        address _freelancer,
        string memory _projectName,
        uint256 _amount
    ) external onlyClient {
        require(
            freelancers[_freelancer].account == _freelancer,
            "Freelancer does not exist."
        );
        require(_amount > 0, "Amount must be greater than zero.");
        require(
            clients[msg.sender].balance >= _amount,
            "Insufficient balance."
        );

        freelancers[_freelancer].balance += _amount;
        clients[msg.sender].balance -= _amount;

        emit PaymentReleased(_freelancer, msg.sender, _projectName, _amount);
    }
}
