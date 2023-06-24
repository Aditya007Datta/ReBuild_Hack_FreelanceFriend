import { FreelanceContractAddress } from "../../config";
import FreelanceAbi from '../utils/FreelanceMarketplace.json'
import { ParticleProvider } from "@particle-network/provider";
import {ethers} from "ethers";

export const particle = new ParticleNetwork({
    projectId: "1aafca96-7dfb-4177-b4df-748132dfdd54",
    clientKey: "cNid1ElrRyYLjVBG5eE6jUgrf9ntNeUalGPob1e7",
    appId: "sRFtLgi3Lb9pU5KVngkiqaIWY6BefRxtO3VWIYbe",
    chainName: "Ethereum", //optional: current chain name, default Ethereum.
    chainId: 11155111, //optional: current chain id, default 1.
    wallet: {   //optional: by default, the wallet entry is displayed in the bottom right corner of the webpage.
      displayWalletEntry: true,  //show wallet entry when connect particle.
      defaultWalletEntryPosition: WalletEntryPosition.BR, //wallet entry position
      uiMode: "dark",  //optional: light or dark, if not set, the default is the same as web auth.
      supportChains: [{ id: 1, name: "Ethereum"}, { id: 5, name: "Ethereum"}, { id: 11155111, name: "Ethereum"}], // optional: web wallet support chains.
      customStyle: {}, //optional: custom wallet style
    }
  });

export const getContractInstance = () => {
    const particleProvider = new ParticleProvider(particle.auth);
    if(particleProvider) {
      const provider = new ethers.providers.Web3Provider(providerProvider, "any");
      const signer = provider.getSigner();
      const freelanceMarketplaceContract = new ethers.Contract(FreelanceContractAddress, FreelanceAbi.abi, signer);
      return freelanceMarketplaceContract;
    }
    return null;
  }

  // Register as a freelancer:

  async function registerAsFreelancer(name, skills, hourlyRate) {
    try{
    const contract = getContractInstance();
    if(!contract) {
        console.log("No provider present");
        return;
    }
    // Call the registerAsFreelancer function
    await contract.registerAsFreelancer(name, skills, hourlyRate).then
    (res => {
        console.log(res);
    });
    } catch (err) {
        console.log(err);
    }
  }

  // Register as a client:

  async function registerAsClient(name) {
    try{
    const contract = getContractInstance();
    if(!contract) {
        console.log("No provider present");
        return;
    }
    // Call the registerAsClient function
    await contract.registerAsClient(name).then
    (res => {
        console.log(res);
    });
    } catch (err) {
        console.log(err);
    }
  }

  // Create a gig:

  async function createGig(gigName, imageUrl, gigPrice) {
    try{
    const contract = getContractInstance();
    if(!contract) {
        console.log("No provider present");
        return;
    }
    // Call the createGig function
    await contract.createGig(gigName, imageUrl, gigPrice).then
    (res => {
        console.log(res);
    });
    } catch (err) {
        console.log(err);
    }
  }

  // Get a client's gig count:

  async function getFreelancerGigCount(freelancerAddress) {
    try{
    const contract = getContractInstance();
    if(!contract) {
        console.log("No provider present");
        return;
    }
    // Call the getFreelancerGigCount function
    const count = await contract.getFreelancerGigCount(freelancerAddress).then
    (res => {
        console.log(res);
    });
    
    return count;
    } catch (err) {
        console.log(err);
    }
  }

  // Get a freelancer's gig:
  
  async function getFreelancerGig(freelancerAddress, gigIndex) {
    try{
    const contract = getContractInstance();
    if(!contract) {
        console.log("No provider present");
        return;
    }
    // Call the getFreelancerGig function
    const gig = await contract.getFreelancerGig(freelancerAddress, gigIndex).then
    (res => {
        console.log(res);
    });
  
    return gig;
    } catch (err) {
        console.log(err);
    }
  }

  // Get all gigs of a freelancer:
  
  async function getFreelancerGigs(freelancerAddress) {
    try{
    const contract = getContractInstance();
    if(!contract) {
        console.log("No provider present");
        return;
    }
    // Call the getFreelancerGig function
    const gigCount = await contract.getFreelancerGigCount(freelancerAddress);

    // Create an array to store the gigs
    const gigs = [];

    // Iterate through each gig index and retrieve its details
    for (let i = 0; i < gigCount; i++) {
        const gig = await contract.getFreelancerGig(freelancerAddress, i);
        gigs.push(gig);
    }
  
    return gigs;
    } catch (err) {
        console.log(err);
    }
  }

  // Get all gigs:

  async function getAllGigs() {
    try{
    const contract = getContractInstance();
    if(!contract) {
        console.log("No provider present");
        return;
    }
    // Call the getAllGigs function
    const gigs = await contract.getAllGigs().then(res => {
        console.log(res);
    });
  
    return gigs;
    } catch (err) {
        console.log(err);
    }
}

// Assign a gig to a client:

async function assignGig(freelancerAddress, gigIndex) {
    try{
    const contract = getContractInstance();
    if(!contract) {
        console.log("No provider present");
        return;
    }
    // Call the assignGig function
    await contract.assignGig(freelancerAddress, gigIndex);
    } catch (err) {
        console.log(err);
    }
}

// Complete a gig as a freelancer:

async function completeGig(clientAddress, gigIndex) {
    try{
    const contract = getContractInstance();
    if(!contract) {
        console.log("No provider present");
        return;
    }
  // Call the completeGig function
  await contract.completeGig(clientAddress, gigIndex).then
  (res => {
      console.log(res);
    });
    } catch (err) {
        console.log(err);
    }
}

// Release payment for a completed gig as a client:

async function releasePayment(freelancerAddress, gigIndex) {
    try{
    const contract = getContractInstance();
    if(!contract) {
        console.log("No provider present");
        return;
    }
    // Call the releasePayment function
    await contract.releasePayment(freelancerAddress, gigIndex).then
    (res => {
        console.log(res);
    });
    } catch (err) {
        console.log(err);
    }
}
  



  