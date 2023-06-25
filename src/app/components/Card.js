"use client";
import Link from "next/link";
import React, { useState } from "react";

const Card = (props) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };


    return (
        <div href="{props.projectUrl}" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
            <img
                src={props.imageUrl}
                loading="lazy"
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <button

                onClick={openDialog}

                className="absolute bottom-4 left-4  bg-indigo-500 hover:bg-indigo-700 text-sm text-white py-2 px-4 rounded-xl"
            >
                Know ME!
            </button>

            {isDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-slate-50 py-6 sm:py-6 lg:py-6 ">
                        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={closeDialog}
                                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="grid gap-1 md:grid-cols-2">
                                {/* <!-- images - start --> */}
                                <div className="grid gap-4 lg:grid-cols-3">
                                    <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-2">
                                        <img
                                            src={props.imageUrl}
                                            loading="lazy"
                                            alt="avatar"
                                            className="w-full h-full object-cover object-center"
                                        />

                                        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                                            #WORK
                                        </span>
                                    </div>
                                </div>
                                {/* <!-- images - end -->

                                    <!-- content - start --> */}
                                <div className="md:py-1">
                                    {/* <!-- name - start --> */}
                                    <div className="mb-2 md:mb-3">
                                        <span className="mb-0.5 inline-block text-gray-500">
                                            Meet Our Freelancer
                                        </span>
                                        <h2 className="text-4xl font-bold text-gray-800 lg:text-4xl">
                                            {props.name_of_clients}
                                        </h2>
                                    </div>
                                    {/* <!-- name - end -->

                                        <!-- rating - start --> */}
                                    <div className="mb-6 flex items-center gap-1 md:mb-10">
                                        <div className="flex h-7 items-center gap-1 rounded-full bg-indigo-500 px-2 text-white">
                                            <span className="text-sm">Contact: {props.Name}</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-sm text-black transition duration-100">
                                        {props.description}
                                    </div>

                                    {/* <!-- rating - end -->

                            

                                        <!-- size - start --> */}
                                    <div className="mb-8 md:mb-10">
                                        <span className="mb-3 py-2  inline-block text-sm font-semibold text-gray-500 md:text-base">
                                            Particle Wallet Address: {props.walletAddress}
                                        </span>


                                    </div>

                                    <div className="mb-4">
                                        <div className="flex items-end gap-2">
                                            <span className="text-xl font-bold text-gray-800 md:text-2xl">
                                                {props.role}
                                            </span>
                                        </div>

                                        <span className="text-sm text-gray-500">
                                            Skills/Role
                                        </span>
                                    </div>

                                    <div className="mb-6 flex items-center gap-2 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M12 20.75l-7.5-7.5a4.5 4.5 0 0 1 6.364-6.364L12 7.636l1.136-1.136A4.5 4.5 0 0 1 19.5 13.5l-7.5 7.5z" />
                                        </svg>




                                        <span className="text-sm">Like my work? Reward me with some crypto !</span>
                                    </div>

                                    <div className="flex gap-2.5">
                                        <a
                                            href="#"
                                            className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
                                            onClick={() => {
                                                const walletAddress = props.walletAddress;
                                                navigator.clipboard.writeText(walletAddress);
                                                alert(`Wallet address ${walletAddress} is copied!`);
                                            }}
                                        >
                                            Support Me!
                                        </a>


                                        <a
                                            href="#"
                                            className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
                                            onClick={() => {
                                                const name = props.Name;
                                                navigator.clipboard.writeText(name);
                                                alert(`Contact ${name} is copied!`);
                                            }}
                                        >
                                            Contact Me!
                                        </a>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            )
            }
        </div >
    );
};

export default Card;
