"use client"
import { ParticleNetwork } from "@particle-network/auth";
import { useState } from "react";
import { ParticleProvider } from "@particle-network/provider";
let isLoggedIn = false; // Declare the initial value of isLoggedIn outside the component
export const loginInfo = {};
const LoginComp = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = async () => {
        try {
            if (loggedIn) {
                alert("You are already logged in.");
            } else {
                const particle = new ParticleNetwork({
                    // Particle Network configuration
                    projectId: "5e076585-5a25-43ef-b615-1f71cefa9486",
                    clientKey: "csMCGPnCYWnE96oj8LgIhc7XIGmIFXu3ecVBies9",
                    appId: "d8f8e461-42ae-4601-a3a5-550a4002c2bf",
                    chainName: "Ethereum", //optional: current chain name, default Ethereum.
                    chainId: 1,
                    wallet: {   //optional: by default, the wallet entry is displayed in the bottom right corner of the webpage.
                        displayWalletEntry: true,  //show wallet entry when connect particle.
                        // defaultWalletEntryPosition: WalletEntryPosition.BR, //wallet entry position
                        uiMode: "light",  //optional: light or dark, if not set, the default is the same as web auth.
                        supportChains: [{ id: 1, name: "Ethereum" }, { id: 5, name: "Ethereum" }], // optional: web wallet support chains.
                        //optional: custom wallet style
                    },

                });

                const userInfo = await particle.auth.login({
                    preferredAuthType: 'phone',
                });

                if (userInfo.email) {
                    loginInfo.email = userInfo.email;

                } else if (userInfo.phone) {
                    loginInfo.phone = userInfo.phone

                } else if (userInfo.google_email) {
                    loginInfo.google_email = userInfo.google_email

                } else if (userInfo.apple_email) {
                    loginInfo.apple_email = userInfo.apple_email

                } else if (userInfo.discord_email) {
                    loginInfo.discord_email = userInfo.discord_email

                } else if (userInfo.twitch_email) {
                    loginInfo.twitch_email = userInfo.twitch_email

                } else if (userInfo.linkedin_email) {
                    loginInfo.linkedin_email = userInfo.linkedin_email

                } else if (userInfo.facebook_email) {
                    loginInfo.facebook_email = userInfo.facebook_email

                } else if (userInfo.twitter_email) {
                    loginInfo.twitter_email = userInfo.twitter_email

                } else {
                    loginInfo.github_email = userInfo.github_email

                }

                // Handle the user information, including Ethereum wallet addresses
                const particleProvider = new ParticleProvider(particle.auth);
                const accounts = await particleProvider.request({ method: 'eth_accounts' });

                loginInfo.accounts = accounts



                setLoggedIn(true);

                isLoggedIn = true; // Update the value of isLoggedIn

            }
        } catch (error) {
            alert("Error during login:( Try Again", error);
        }
    };

    return (
        <div
            className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
            onClick={handleLogin}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
            </svg>

            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Login
            </span>
        </div>
    );
};

export const sendWalletAddress = (wallet) => wallet
export const getIsLoggedIn = () => isLoggedIn; // Export the getter function
export default LoginComp;
