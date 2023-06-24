import Card from './Card'
import projectsData from '../../../collections1.json';
import GoToTop from './GoToTop';
const Clients = () => {

    return (
        <div className="bg-black py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">Collections</h2>

                <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                    {projectsData.map((project, index) => (
                        <Card
                            key={index}
                            projectUrl={project.projectUrl}
                            imageUrl={project.imageUrl}
                            Name={project.Name}
                            walletAddress={project.Account && project.Account.length > 0 ? project.Account[0] : null}
                        />
                    ))}
                </div>
                <GoToTop />
            </div>
        </div>
    )
}

export default Clients