"use client"
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { ParticleNetwork } from '@particle-network/auth';
import contractABI from '../../../contract-data.json';
import { FreelanceContractAddress } from '../../../contractAddress';
import { ParticleProvider } from "@particle-network/provider";
// Initialize ParticleNetwork instance with your configuration
const particle = new ParticleNetwork({
    // Particle Network configuration
    projectId: "5e076585-5a25-43ef-b615-1f71cefa9486",
    clientKey: "csMCGPnCYWnE96oj8LgIhc7XIGmIFXu3ecVBies9",
    appId: "d8f8e461-42ae-4601-a3a5-550a4002c2bf",
    chainName: "Ethereum", //optional: current chain name, default Ethereum.
    chainId: 1,

});


const contractAddress = FreelanceContractAddress
// Create ParticleProvider using Particle Network auth
const particleProvider = new ParticleProvider(particle.auth);

// Create Ethers provider using ParticleProvider
const ethersProvider = new ethers.providers.Web3Provider(particleProvider, 'any');

// Instantiate the contract using the ABI and provider
const contract = new ethers.Contract(contractAddress, contractABI, ethersProvider);

// Helper function to retrieve the account address
async function getAccountAddress() {
    const accounts = await ethersProvider.listAccounts();
    return accounts[0];
}

export default function MyComponent() {
    const [accountAddress, setAccountAddress] = useState('');

    useEffect(() => {
        // Retrieve the account address and update the state
        getAccountAddress().then((address) => {
            setAccountAddress(address);
        });
    }, []);

    // Example function to interact with the contract
    async function registerAsFreelancer() {
        const signer = ethersProvider.getSigner();
        const contractWithSigner = contract.connect(signer);

        // Call the contract function
        await contractWithSigner.registerAsFreelancer('John Doe', 'Web Development', 50);

        // Add your desired logic after interacting with the contract
    }

    return (
        <div className='bg-white'>
            <p className='text-black'>Account Address: {accountAddress}</p>
            <button className='text-black ' onClick={registerAsFreelancer}>Register as Freelancer</button>
            {/* Add your other UI elements and contract interactions */}
        </div>
    );
}