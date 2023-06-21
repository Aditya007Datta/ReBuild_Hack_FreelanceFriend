import Link from 'next/link';
import React from 'react';

const Card = (props) => {
    return (
        <div>
            <Link href={props.projectUrl} className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                <img src={props.imageUrl} loading="lazy" alt="Photo by Austin Wade" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                    <span className="text-gray-500">{props.walletAddress}</span>
                    <span className="text-lg font-bold text-gray-800 lg:text-xl">Business Casual</span>
                </div>
            </Link>
        </div>
    );
}

export default Card;