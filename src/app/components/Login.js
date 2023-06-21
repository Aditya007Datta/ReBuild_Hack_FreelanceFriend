"use client"
import { useState } from "react";
import Web3 from "web3";
import Link from 'next/link';

const Login = () => {
    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [showMetaMaskButton, setShowMetaMaskButton] = useState(true);

    const connectToMetaMask = async () => {
        try {
            // Check if MetaMask is installed
            if (window.ethereum) {
                // Request access to the user's accounts
                await window.ethereum.request({ method: "eth_requestAccounts" });

                // Create a new Web3 instance using the provider
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);

                // Get the list of connected accounts
                const accounts = await web3Instance.eth.getAccounts();
                setAccounts(accounts);

                // Hide the MetaMask button after successful connection
                setShowMetaMaskButton(false);
            } else {
                console.error("MetaMask is not installed.");
                alert("MetaMask is not installed.")
            }
        } catch (error) {
            console.error("Error connecting to MetaMask:", error);
            alert("Error connecting to MetaMask:", error)
        }
    };

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>

                <form className="mx-auto max-w-lg rounded-lg border">
                    <div className="flex flex-col gap-4 p-4 md:p-8">
                        <div>
                            <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                            <input name="email" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
                            <input name="password" type="password" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>

                        {showMetaMaskButton && (
                            <button onClick={connectToMetaMask} className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"> Connect with MetaMask</button>
                        )}

                        {web3 && (
                            <p>
                                Connected Account: {accounts.length > 0 ? accounts[0] : "Not connected"}
                            </p>
                        )}

                        <div className="flex items-center justify-center bg-gray-100 p-4">
                            <p className="text-center text-sm text-gray-500">Already have an account? <Link href="/login" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Login</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;