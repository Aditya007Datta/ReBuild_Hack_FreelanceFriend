import { ethers } from 'ethers';
import contractABI from '../../../contract-data.json';
const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/c154d17303a34a50bed55dfbb4bdeaff');
const contractAddress = '0x5AACF918FE591f6C05C65e15642156CF16201778';

const contract = new ethers.Contract(contractAddress, contractABI, provider);
// Define a helper function to retrieve the account address
async function getAccountAddress() {
    const accounts = await provider.listAccounts();
    return accounts[0];
}

export { contract, getAccountAddress };