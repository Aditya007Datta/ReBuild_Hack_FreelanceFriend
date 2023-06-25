"use client";
import Link from "next/link";
import { use, useState } from "react";
import axios from "axios";
import Hulk from "public/hulk.png";
import Mickey from "public/mickey.png";
import Naruto from "public/naruto.png";
import Superman from "public/superman.png";
import { loginInfo } from "../wallet/page";
import Image from "next/image";


const Forms = () => {
    const [ipfsLink, setIpfsLink] = useState("");
    const [imageLink, setImageLink] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState(""); // State to store the selected avatar image
    const [selectedFile, setSelectedFile] = useState(null);
    // const [nam, setNam] = useState("")
    // const [surnam, setsurNam] = useState("")
    // const [description, setDescription] = useState("")

    // const handleNamChange = (event) => {
    //     setNam(event.target.value)
    // };
    // const handleSurNamChange = (event) => {
    //     setsurNam(event.target.value)
    // };
    // const handleDescChange = (event) => {
    //     setDescription(event.target.value)
    // };
    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!selectedFile) {
            alert("Please select a file.");
            return;
        }
        alert("Uploading plz wait ! :)")
        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await axios.post(
                "https://rpc.particle.network/ipfs/upload",
                formData,
                {
                    auth: {
                        username: "5e076585-5a25-43ef-b615-1f71cefa9486",
                        password: "sm38fVUNBeFWgPKLtiOwKRcGkJtJJXBTECoPROvh",
                    },
                }
            );

            const cid = response.data.cid;
            const link = `https://ipfs.particle.network/${cid}`;
            setIpfsLink(link)
            alert(`Successfully uploaded to IPFS. Link: ${link}`);
        } catch (error) {
            alert("Upload failed.");
            console.error(error);
        }
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
        const projectUrl = ipfsLink || event.target.elements["project-url"].value; // Use the IPFS link if available
        const imageUrl = imageLink
        const name_of_client = event.target.elements["firstName"].value
        const surname = event.target.elements["lastName"].value
        const desc = event.target.elements["description"].value
        const role = event.target.elements["role"].value
        const formData = {
            Name,
            Account,
            projectUrl,
            imageUrl,
            name_of_client,
            surname,
            desc,
            role

        };

        try {

            await axios.post("http://localhost:3001/submitForm", formData);
            console.log("Submitted2");

            setIsSubmitted(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            if (error.response) {
                console.log("Error response:", error.response);
                console.log("Status code:", error.response.status);
                console.log("Response data:", error.response.data);
            }
        }

    };


    const handleAvatarChange = (event) => {
        setSelectedAvatar(event.target.value);

        setImageLink(event.target.value)
    };

    if (isSubmitted) {
        // Render the thank you page
        return (
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                        Thank You!Gracias!Dhanyawad!
                    </h2>

                    <div className="flex p-3 justify-center items-center h-screen">
                        <img src="https://images.pexels.com/photos/6287933/pexels-photo-6287933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="thank-you" /></div>
                    <div>
                        <Link
                            href="/"
                            className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600 block text-center mt-4"
                        >
                            Back to Home
                        </Link></div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[url('https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                {/* text - start */}
                <div className="mb-10 md:mb-16">
                    <h1 className="mb-4 text-center text-2xl font-bold text-slate-100 md:mb-6 lg:text-3xl">
                        H-E-L-L-O ! H-O-L-A ! N-A-M-A-S-T-E !
                    </h1>
                    <h2 className="mb-4 text-center text-2xl font-bold text-slate-200 md:mb-6 lg:text-3xl">
                        Share Us Your Work
                    </h2>
                    <p className="mx-auto max-w-screen-md text-center text-slate md:text-lg">
                        Upload your files to IPFS in 1 click and let the world witness your talent!
                    </p>
                </div>
                {/* text - end */}
                {/* form - start */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-4 rounded-lg mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
                >
                    <div className="sm:col-span-2">  <div className="sm:col-span-2">
                        <label htmlFor="first-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                            First Name:
                        </label>
                        <input
                            type="text"
                            id="first-name"
                            name="firstName"
                            className="w-full rounded-md border-y-2 border-x-2 border-black text-gray-900"

                            required
                        />
                    </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="last-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                                Last Name:
                            </label>
                            <input
                                type="text"
                                id="last-name"
                                name="lastName"
                                className="w-full rounded-md border-y-2 border-x-2 border-black text-gray-900"

                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="last-name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                                Role:
                            </label>
                            <input
                                type="text"
                                id="last-name"
                                name="role"
                                className="w-full rounded-md border-y-2 border-x-2 border-black text-gray-900"

                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                                Description:
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows="4"
                                className="w-full rounded-md border-y-2 border-x-2 border-black text-gray-900"

                                required
                            />
                        </div>
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

                                    value="https://ipfs.particle.network/bafybeigh2etn5r5u5bzvpolb6cd7fz7swvv7ga33wvtzqc5u23hflyb7w4"
                                    checked={selectedAvatar === "https://ipfs.particle.network/bafybeigh2etn5r5u5bzvpolb6cd7fz7swvv7ga33wvtzqc5u23hflyb7w4"}
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

                                    value="https://ipfs.particle.network/bafybeidij4mqbh7hqcyr6k75pz3d5kqpqz7bgt5vaov6lkdsqbrbhpfydq"

                                    checked={selectedAvatar === "https://ipfs.particle.network/bafybeidij4mqbh7hqcyr6k75pz3d5kqpqz7bgt5vaov6lkdsqbrbhpfydq"}
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

                                    value="https://ipfs.particle.network/bafybeicler3t2fouuaqczpjrv26dqwvhopvew63g5ttky5k7aolsdqcice"
                                    checked={selectedAvatar === "https://ipfs.particle.network/bafybeicler3t2fouuaqczpjrv26dqwvhopvew63g5ttky5k7aolsdqcice"}

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

                                    value="https://ipfs.particle.network/bafybeicewdct7x5fxs3xovpoisltoi6yv5hzlpgczi7hnau4l3ddmgnl3e"
                                    checked={selectedAvatar === "https://ipfs.particle.network/bafybeicewdct7x5fxs3xovpoisltoi6yv5hzlpgczi7hnau4l3ddmgnl3e"}
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
                        <div className="flex">
                            <div>
                                <input type="file" onChange={handleFileInputChange} className="hidden " id="file-upload" accept=".jpg,.jpeg,.png,.webp,.pdf,.mp4,.mp3,.mpeg" />
                                <label htmlFor="file-upload" className="bg-indigo-500 ml-10 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-indigo-600 transition duration-200">
                                    Select a File
                                </label>


                                <button className="bg-indigo-500 ml-96 items-end text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-indigo-600 transition duration-200" onClick={handleFileUpload}>
                                    Upload to IPFS
                                </button>
                                {selectedFile && (
                                    <span className="grid-flow-row ml-10 text-gray-800">{selectedFile.name}</span>
                                )}
                            </div>
                        </div>

                        <p className="text-red-500 text-sm ml-10">
                            Allowed formats: JPG, JPEG, PNG, WEBP, PDF, MP4, MP3, MPEG
                        </p>
                    </div>


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
                            value={ipfsLink} // Use the IPFS link as the value
                            required
                        />

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
