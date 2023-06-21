"use client"
import Link from "next/link";
import React from "react";

import projectsData from '../../../collections1.json';
import { getIsLoggedIn } from "../wallet/page";
import Gallery from "./Gallery";
const Projects = () => {
    const handleLinkClick = (e) => {
        if (!getIsLoggedIn()) {
            e.preventDefault(); // Prevent the link from navigating if not logged in
            // Redirect to login page
            // You can replace "/login" with your actual login page route
            // For example: router.push("/login");
            alert("Please login first")
        }
    };
    const projectsToShow = projectsData.slice(0, 8);
    return (
        <div className=" py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-6 flex items-end justify-between gap-4">
                    <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Selected</h2>

                    <Link
                        href="/collections"
                        onClick={handleLinkClick} className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-500 hover:text-white focus-visible:ring active:bg-indigo-200 md:px-8 md:py-3 md:text-base"
                    >
                        Show more
                    </Link>
                </div>

                <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                    {/* <!-- product - start --> */}
                    {projectsToShow.map((project, index) => (
                        <Gallery
                            key={index}
                            projectUrl={project.projectUrl}
                            imageUrl={project.imageUrl}
                            walletAddress={project.walletAddress}
                        />))}
                    {/*  <!-- product - end --> */}


                </div>
            </div>
        </div>
    );
};

export default Projects;
