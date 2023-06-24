"use client"
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import Hulk from "public/hulk.png"
import Mickey from "public/mickey.png"
import Naruto from "public/naruto.png"
import Superman from "public/superman.png"
import { loginInfo } from "../wallet/page";
import Image from "next/image";

const Forms = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState(""); // State to store the selected avatar image
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const Account = loginInfo.accounts;
    const Name =
        loginInfo.email ||
        loginInfo.phone ||
        loginInfo.google_email ||
        loginInfo.facebook_email ||
        loginInfo.twitter_email ||
        loginInfo.apple_email ||
        loginInfo.linkedin_email ||
        loginInfo.discord_email ||
        loginInfo.twitch_email;

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Get the form data
        const projectUrl = event.target.elements["project-url"].value;

        // Create the form data object
        const formData = {
            Name,
            Account,
            projectUrl,
        };

        try {
            // Make a POST request to the backend endpoint
            alert("Submitted1");
            await axios.post("http://localhost:3001/submitForm", formData);
            console.log("Submitted2");
            // Set the form submission state to true
            setIsSubmitted(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            // Handle the error or show an error message to the user
            if (error.response) {
                console.log("Error response:", error.response);
                console.log("Status code:", error.response.status);
                console.log("Response data:", error.response.data);
            }
        }
    };

    const handleAvatarChange = (event) => {
        setSelectedAvatar(event.target.value);
    };

    if (isSubmitted) {
        // Render the thank you page
        return (
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                        Thank You!
                    </h2>
                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                        Thank you for submitting the form. We appreciate your response.
                    </p>
                    <Link
                        href="/"
                        className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600 block text-center mt-4"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[url('https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                {/* text - start */}
                <div className="mb-10 md:mb-16">
                    <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                        Hello! {loginInfo.accounts}
                    </h1>
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                        Get in touch
                    </h2>
                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                        This is a section of some simple filler text, also known as
                        placeholder text. It shares some characteristics of a real written
                        text but is random or otherwise generated.
                    </p>
                </div>
                {/* text - end */}
                {/* form - start */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-4 rounded-lg mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
                >
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="project-url"
                            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                        >
                            Project URL / IPFS Links*
                        </label>
                        <input
                            name="project-url"
                            className="w-full rounded-md border-y-2 border-x-2 border-black text-gray-900"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="avatar"
                            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                        >
                            Select an Avatar:
                        </label>
                        <div className="flex items-center space-x-2">
                            <label className="inline-flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="avatar"
                                    value="avatar1.jpg"
                                    checked={selectedAvatar === "avatar1.jpg"}
                                    onChange={handleAvatarChange}
                                    className="form-radio"
                                />
                                <Image
                                    src={Superman}
                                    alt="Avatar 1"
                                    className="w-40 h-40 rounded-lg"
                                    width={1500}
                                    height={1500}
                                />
                            </label>
                            <label className="inline-flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="avatar"
                                    value="avatar2.jpg"
                                    checked={selectedAvatar === "avatar2.jpg"}
                                    onChange={handleAvatarChange}
                                    className="form-radio"
                                />
                                <Image
                                    src={Naruto}
                                    alt="Avatar 1"
                                    className="w-40 h-40 rounded-lg"
                                    width={1500}
                                    height={1500}
                                />
                            </label>
                            <label className="inline-flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="avatar"
                                    value="avatar3.jpg"
                                    checked={selectedAvatar === "avatar3.jpg"}
                                    onChange={handleAvatarChange}
                                    className="form-radio"
                                />
                                <Image
                                    src={Hulk}
                                    alt="Avatar 1"
                                    className="w-40 h-40 rounded-lg"
                                    width={1500}
                                    height={1500}
                                />
                            </label>
                            <label className="inline-flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="avatar"
                                    value="avatar4.jpg"
                                    checked={selectedAvatar === "avatar4.jpg"}
                                    onChange={handleAvatarChange}
                                    className="form-radio"
                                />
                                <Image
                                    src={Mickey}
                                    alt="Avatar 1"
                                    className="w-40 h-40 rounded-lg"
                                    width={1500}
                                    height={1500}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="file-upload"
                            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                        >
                            Upload a File:
                        </label>
                        <div className="flex items-center">
                            <input
                                type="file"
                                id="file-upload"
                                className="hidden"
                                accept=".jpg,.jpeg,.png,.webp,.pdf,.mp4,.mp3,.mpeg"
                                onChange={handleFileChange}
                            />
                            <label
                                htmlFor="file-upload"
                                className="bg-indigo-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-indigo-600 transition duration-200"
                            >
                                Choose File
                            </label>
                            {selectedFile && (
                                <span className="ml-4 text-gray-800">{selectedFile.name}</span>
                            )}
                        </div>
                        <p className="text-red-500 text-sm">
                            Allowed formats: JPG, JPEG, PNG, WEBP, PDF, MP4, MP3, MPEG
                        </p>
                    </div>

                    <div className="sm:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-200"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                {/* form - end */}
            </div>
        </div>
    );
};

export default Forms;
