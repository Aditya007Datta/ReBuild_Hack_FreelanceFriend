import { ethers } from 'ethers';

// Initialize ethers.js provider
const provider = new ethers.providers.JsonRpcProvider('<YOUR_ETHEREUM_NODE_URL>');

// Get the contract ABI and bytecode from contract-data.json
const contractData = require('./contract-data.json');

// Create a new ethers.js contract instance
const contractAddress = '<YOUR_CONTRACT_ADDRESS>';
const contract = new ethers.Contract(contractAddress, contractData.abi, provider);

export default contract;
