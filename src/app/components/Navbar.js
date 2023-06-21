"use client"
import Link from "next/link";
import LoginComp from "../wallet/page"
import { getIsLoggedIn } from "../wallet/page";
const Navbar = () => {
    const handleLinkClick = (e) => {
        if (!getIsLoggedIn()) {
            e.preventDefault(); // Prevent the link from navigating if not logged in
            // Redirect to login page
            // You can replace "/login" with your actual login page route
            // For example: router.push("/login");
            alert("Please login first")
        }
    };
    return (
        <div className="bg-white pb-0 sm:pb-0 lg:pb-0">
            <header className="mb-8 border-b">
                <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
                    {/* <!-- logo - start --> */}
                    <Link
                        href="/about"
                        className="text-zinc-900 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
                        aria-label="logo"
                    >
                        <svg
                            width="95"
                            height="94"
                            viewBox="0 0 95 94"
                            className="h-auto w-6 text-indigo-500"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                        </svg>
                        Subho
                    </Link>
                    {/* <!-- logo - end -->

                    <!-- nav - start --> */}
                    <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                        <Link
                            href="/"
                            className="text-lg font-semibold  text-indigo-700  transition duration-100 hover:text-violet-600 "

                        >
                            Home
                        </Link>
                        <Link onClick={handleLinkClick}
                            href="/collections"
                            className="text-lg font-semibold  text-indigo-700  transition duration-100 hover:text-indigo-500"

                        >
                            Collections
                        </Link>
                        <Link
                            href="/login"
                            className="text-lg font-semibold  text-indigo-700  transition duration-100 hover:text-indigo-500"


                        >
                            Client
                        </Link>
                        <Link
                            href="/about"
                            className="text-lg font-semibold  text-indigo-700  transition duration-100 hover:text-indigo-500"

                        >
                            About
                        </Link>
                    </nav>
                    {/* <!-- nav - end -->

                    <!-- buttons - start --> */}
                    <div className="flex divide-x border-r sm:border-l">
                        <Link
                            href="#"
                            className="hidden h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:flex sm:h-20 sm:w-20 md:h-24 md:w-24"
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
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>

                            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                                Wishlist
                            </span>
                        </Link>

                        <Link href="#"

                        >
                            <LoginComp />
                        </Link>

                        <Link
                            href="/collections"
                            className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
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
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>

                            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                                Projects
                            </span>
                        </Link>

                        {/* <button
                            type="button"
                            className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-800"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                                Menu
                            </span>
                        </button> */}
                    </div>
                    {/* <!-- buttons - end --> */}
                </div>
            </header>
        </div>
    );
};

export default Navbar;
