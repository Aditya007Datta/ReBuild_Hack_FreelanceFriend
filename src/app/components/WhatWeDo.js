"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dallEphoto from "public/d.png";

const WhatWeDo = () => {
    return (
        <div className="py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    <div>
                        <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                            <Image
                                src={dallEphoto}
                                loading="lazy"
                                height={500}
                                width={500}
                                alt="Photo by Martin Sanchez"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    <div className="md:pt-8">
                        <h2
                            className="mb-2 text-center text-3xl font-semibold text-yellow-200 sm:text-2xl md:mb-4 md:text-center" style={{ textShadow: "0 0 5px #FFFFFF", color: "#FFD700" }}
                        >
                            About us
                        </h2>



                        <h2
                            className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left"
                            style={{ textShadow: "0 0 5px #FFFFFF", color: "#F8F8F8" }}
                        >
                            What We Do
                        </h2>

                        <p className="mb-6 text-slate-200 sm:text-lg md:mb-8">
                            Introducing our innovative web application that empowers users to
                            showcase their diverse talents and creations! Our platform enables
                            individuals to upload and exhibit their content writing, coding
                            projects, music samples, and video edits. With the added benefit
                            of earning crypto coins, users can gain recognition for their work
                            while exploring exciting opportunities in the digital landscape.
                            Start sharing your creations and unlocking your potential today!
                        </p>

                        <h2
                            className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left"
                            style={{ textShadow: "0 0 5px #FFFFFF", color: "#F8F8F8" }}
                        >
                            About us
                        </h2>

                        <p className="mb-6 text-slate-200 sm:text-lg md:mb-8">
                            Our team consists of passionate developers, always eager to learn
                            and ride the new waves of technology.As a dynamic group of tech
                            enthusiasts, we are dedicated to pushing the boundaries of
                            innovation.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WhatWeDo;
