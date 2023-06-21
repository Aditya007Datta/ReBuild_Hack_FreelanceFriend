import Link from 'next/link';
import Image from 'next/image';


const Gallery = (props) => {
    return (
        <div>
            <Link
                href={props.projectUrl}
                className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
            >
                <Image
                    src=""
                    loading="lazy"
                    alt="Photo by Rachit Tank"
                    width={500}
                    height={500}
                    className=" object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    Featured
                </span>
            </Link>

            <div>
                <Link
                    href={props.projectUrl}
                    className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                    {props.walletAddress}
                </Link>

                <div className="flex items-end gap-2">
                    <span className="font-bold text-gray-800 lg:text-lg">$15.00</span>
                    {/* <span className="mb-0.5 text-red-500 line-through">$30.00</span> */}
                </div>
            </div>
        </div>
    )
}
export default Gallery