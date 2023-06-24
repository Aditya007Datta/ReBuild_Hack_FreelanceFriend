import { ParticleNetwork } from '@particle-network/auth';


export const particle = new ParticleNetwork({
    // Particle Network configuration
    projectId: "5e076585-5a25-43ef-b615-1f71cefa9486",
    clientKey: "csMCGPnCYWnE96oj8LgIhc7XIGmIFXu3ecVBies9",
    appId: "d8f8e461-42ae-4601-a3a5-550a4002c2bf",
    chainName: "Ethereum", //optional: current chain name, default Ethereum.
    chainId: 11155111,
});

