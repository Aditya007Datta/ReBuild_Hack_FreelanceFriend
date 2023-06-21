"use client"
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { sendWalletAddress } from "../wallet/page";
const Forms = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const walAddress = sendWalletAddress()

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Get the form data

        const projectUrl = event.target.elements["project-url"].value;

        alert(projectUrl)

        // Create the form data object
        const formData = {
            walAddress,
            projectUrl,

        };
        alert("it is   " + formData.projectUrl)
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
                    <Link href="/" className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600 block text-center mt-4">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                {/* <!-- text - start --> */}
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                        Get in touch
                    </h2>
                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                        This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
                    </p>
                </div>
                {/* <!-- text - end -->

        <!-- form - start --> */}
                <form onSubmit={handleSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2" >

                    <div className="sm:col-span-2">
                        <label htmlFor="project-url" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                            Project URL / IPFS Links*
                        </label>
                        <input name="project-url" className="w-full rounded-lg border-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-gray-900" required />
                    </div>

                    <div className="sm:col-span-2">
                        <button type="submit" className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-200">
                            Submit
                        </button>
                    </div>
                </form>
                {/* <!-- form - end --> */}
            </div>
        </div>
    );
};




export default Forms