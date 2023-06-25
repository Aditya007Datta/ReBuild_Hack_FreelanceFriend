import Link from 'next/link';
import Image from 'next/image';


const Gallery = (props) => {
    return (
        <div>
            <Link
                href={props.projectUrl}
                className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
            >
                <img
                    src={props.imageUrl}
                    loading="lazy"
                    alt="Photo by Rachit Tank"

                    className=" object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    {props.role}
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
                    <span className="font-bold text-slate-100 lg:text-lg">{props.name}</span>

                </div>
            </div>
        </div>
    )
}
export default Gallery