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

    struct Gig {
        address freelancer;
        string gigName;
        string imageUrl;
        uint256 gigPrice;
        bool isAssigned;
        bool isCompleted;
    }

    mapping(address => Freelancer) public freelancers;
    mapping(address => Client) public clients;
    mapping(address => Gig[]) public gigs;
    address[] public freelancerAddresses; // Track registered freelancers

    event FreelancerRegistered(address freelancer);
    event ClientRegistered(address client);
    event GigCreated(address freelancer, string gigName, string imageUrl, uint256 gigPrice);
    event GigAssigned(address freelancer, address client, string gigName);
    event GigCompleted(address freelancer, address client, string gigName);
    event PaymentReleased(address freelancer, address client, string gigName, uint256 amount);

    modifier onlyFreelancer() {
        require(freelancers[msg.sender].account == msg.sender, "Only freelancers can call this function.");
        _;
    }

    modifier onlyClient() {
        require(clients[msg.sender].account == msg.sender, "Only clients can call this function.");
        _;
    }

    /**
     * @dev Register as a freelancer.
     * @param _name The name of the freelancer.
     * @param _skills The skills of the freelancer.
     * @param _hourlyRate The hourly rate of the freelancer.
     */
    function registerAsFreelancer(string memory _name, string memory _skills, uint256 _hourlyRate) external {
        require(freelancers[msg.sender].account != msg.sender, "You are already registered as a freelancer.");

        Freelancer storage freelancer = freelancers[msg.sender];
        freelancer.account = payable(msg.sender);
        freelancer.name = _name;
        freelancer.skills = _skills;
        freelancer.hourlyRate = _hourlyRate;

        freelancerAddresses.push(msg.sender); // Add freelancer address to the tracking array

        emit FreelancerRegistered(msg.sender);
    }

    /**
     * @dev Register as a client.
     * @param _name The name of the client.
     */
    function registerAsClient(string memory _name) external {
        require(clients[msg.sender].account != msg.sender, "You are already registered as a client.");

        Client storage client = clients[msg.sender];
        client.account = payable(msg.sender);
        client.name = _name;

        emit ClientRegistered(msg.sender);
    }

    /**
     * @dev Create a gig as a freelancer.
     * @param _gigName The name of the gig.
     * @param _imageUrl The URL of the gig's image.
     * @param _gigPrice The price of the gig.
     */
    function createGig(string memory _gigName, string memory _imageUrl, uint256 _gigPrice) external onlyFreelancer {
        require(bytes(_gigName).length > 0, "Gig name must not be empty.");
        require(bytes(_imageUrl).length > 0, "Image URL must not be empty.");
        require(_gigPrice > 0, "Gig price must be greater than zero.");

        Gig memory gig = Gig({
            freelancer: msg.sender,
            gigName: _gigName,
            imageUrl: _imageUrl,
            gigPrice: _gigPrice,
            isAssigned: false,
            isCompleted: false
        });

        gigs[msg.sender].push(gig); // Add the gig to the freelancer's gig array

        emit GigCreated(msg.sender, _gigName, _imageUrl, _gigPrice);
    }

    /**
     * @dev Get the count of gigs created by a freelancer.
     * @param _freelancer The address of the freelancer.
     * @return The count of gigs.
     */
    function getFreelancerGigCount(address _freelancer) public view returns (uint256) {
        return gigs[_freelancer].length;
    }

    /**
     * @dev Get the details of a gig created by a freelancer.
     * @param _freelancer The address of the freelancer.
     * @param _gigIndex The index of the gig.
     * @return gigName The name of the gig.
     * @return imageUrl The URL of the gig's image.
     * @return gigPrice The price of the gig.
     * @return isAssigned A boolean indicating if the gig is assigned to a client.
     * @return isCompleted A boolean indicating if the gig is completed.
     */
    function getFreelancerGig(address _freelancer, uint256 _gigIndex) public view returns (
        string memory gigName,
        string memory imageUrl,
        uint256 gigPrice,
        bool isAssigned,
        bool isCompleted
    ) {
        require(_freelancer != address(0), "Invalid freelancer address.");
        require(_gigIndex < gigs[_freelancer].length, "Invalid gig index.");

        Gig memory gig = gigs[_freelancer][_gigIndex];
        return (
            gig.gigName,
            gig.imageUrl,
            gig.gigPrice,
            gig.isAssigned,
            gig.isCompleted
        );
    }

    /**
     * @dev Get all the gigs created by all the freelancers.
     * @return An array of all the gigs.
     */
    function getAllGigs() public view returns (Gig[] memory) {
        uint256 totalGigs;
        for (uint256 i = 0; i < freelancerAddresses.length; i++) {
            totalGigs += gigs[freelancerAddresses[i]].length;
        }

        Gig[] memory allGigs = new Gig[](totalGigs);
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < freelancerAddresses.length; i++) {
            address freelancerAddress = freelancerAddresses[i];
            Gig[] storage freelancerGigs = gigs[freelancerAddress];

            for (uint256 j = 0; j < freelancerGigs.length; j++) {
                allGigs[currentIndex] = freelancerGigs[j];
                currentIndex++;
            }
        }

        return allGigs;
    }

    /**
     * @dev Assign a gig to a client.
     * @param _freelancer The address of the freelancer.
     * @param _gigIndex The index of the gig.
     */
    function assignGig(address _freelancer, uint256 _gigIndex) external onlyClient {
        require(_freelancer != address(0), "Invalid freelancer address.");

        Gig[] storage freelancerGigs = gigs[_freelancer];
        require(_gigIndex < freelancerGigs.length, "Invalid gig index.");
        require(!freelancerGigs[_gigIndex].isAssigned, "Gig is already assigned.");

        freelancerGigs[_gigIndex].isAssigned = true;

        emit GigAssigned(_freelancer, msg.sender, freelancerGigs[_gigIndex].gigName);
    }

    /**
     * @dev Complete a gig as a freelancer.
     * @param _client The address of the client.
     * @param _gigIndex The index of the gig.
     */
    function completeGig(address _client, uint256 _gigIndex) external onlyFreelancer {
        require(_client != address(0), "Invalid client address.");

        Gig[] storage freelancerGigs = gigs[msg.sender];
        require(_gigIndex < freelancerGigs.length, "Invalid gig index.");
        require(freelancerGigs[_gigIndex].isAssigned, "Gig is not assigned.");
        require(!freelancerGigs[_gigIndex].isCompleted, "Gig is already completed.");

        freelancerGigs[_gigIndex].isCompleted = true;

        emit GigCompleted(msg.sender, _client, freelancerGigs[_gigIndex].gigName);
    }

    /**
     * @dev Release payment for a completed gig as a client.
     * @param _freelancer The address of the freelancer.
     * @param _gigIndex The index of the gig.
     */
    function releasePayment(address _freelancer, uint256 _gigIndex) external onlyClient {
        require(_freelancer != address(0), "Invalid freelancer address.");

        Gig[] storage freelancerGigs = gigs[_freelancer];
        require(_gigIndex < freelancerGigs.length, "Invalid gig index.");
        require(freelancerGigs[_gigIndex].isAssigned, "Gig is not assigned.");
        require(freelancerGigs[_gigIndex].isCompleted, "Gig is not completed.");

        uint256 gigPrice = freelancerGigs[_gigIndex].gigPrice;

        clients[msg.sender].balance -= gigPrice;
        freelancers[_freelancer].balance += gigPrice;

        emit PaymentReleased(_freelancer, msg.sender, freelancerGigs[_gigIndex].gigName, gigPrice);
    }
}