import React from 'react'

const page = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-md px-4 md:px-8">
                <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">The Kaze Guide</h1>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    KazeVault envisions to be the platform for creators, where their talent speaks and their work get the due. Hence considering the magnitude of our ambition it will take time for KazeVault to activates its BEAST mode! However, there is a lot for creators still even now as they can share their projects and earn rewards based on them.
                </p>

                <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">How to upload your work?</h2>

                <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">Excited to showcase your skills to the world, just follow the few steps and your work is there for the everyone to see in just a few seconds</p>

                <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
                    <li>Go to the Form section in the navigation bar</li>
                    <li>The form will ask for your name, a brief description and your skillset</li>
                    <li>Select the file you want to share, and then click the Upload to IPFS button</li>
                    <li>Voila! Go to collections and you will get to see your shared work alongside a lot of other projects.</li>
                </ul>

                <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">“Talent is the spark that ignites potential, the seed that blossoms into greatness, and the force that propels dreams into reality.”</blockquote>

                <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
                    <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350" loading="lazy" alt="Photo by Minh Pham" className="h-full w-full object-cover object-center" />
                </div>
                <p className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">Have a nice day!</p>

            </div>
        </div>
    )
}

export default page