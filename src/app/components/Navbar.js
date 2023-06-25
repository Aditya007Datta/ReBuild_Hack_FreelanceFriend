"use client";
import Link from "next/link";
import LoginComp from "../wallet/page";
import { getIsLoggedIn } from "../wallet/page";
import Image from "next/image";
import logo from "public/logo.jpeg";
const Navbar = () => {
    const handleLinkClick = (e) => {
        if (!getIsLoggedIn()) {
            e.preventDefault();
            alert("Please login first!");
        }
    };
    return (
        <div className="bg-slate-100 pb-0 sm:pb-0 lg:pb-0">
            <header className="mb-8 border-b">
                <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
                    <Link
                        href="/about"
                        className="text-zinc-900 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
                        aria-label="logo"
                    >
                        <Image src={logo} width={50} height={50} />
                        KazeVault
                    </Link>

                    <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                        <Link
                            href="/"
                            className="text-lg font-semibold  text-indigo-700  transition duration-100 hover:text-violet-600 "
                        >
                            Home
                        </Link>
                        <Link
                            onClick={handleLinkClick}
                            href="/collections"
                            className="text-lg font-semibold  text-indigo-700  transition duration-100 hover:text-indigo-500"
                        >
                            Collections
                        </Link>
                        <Link
                            href="/form"
                            className="text-lg font-semibold  text-indigo-700  transition duration-100 hover:text-indigo-500"
                        >
                            Form
                        </Link>
                        <Link
                            href="/about"
                            className="text-lg font-semibold  text-indigo-700  transition duration-100 hover:text-indigo-500"
                        >
                            About
                        </Link>
                    </nav>

                    <div className="flex divide-x border-r sm:border-l">
                        <Link href="#">
                            <LoginComp />
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
