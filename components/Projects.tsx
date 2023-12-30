import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

const Projects = async () => {
    const projects = await getProjects();
    console.log(projects);
    return (
        <div>
            <h1>My Projects</h1>

            <div className='grid grid-cols-3 gap-4'>
                {projects.map((project) => {
                    return (
                        <Link href={`/projects/${project.slug}`}>
                            <div key={project._id}>
                                <p>{project.name}</p>
                                <Image
                                    className='w-full object-cover h-64'
                                    src={project.image}
                                    alt='Project image'
                                    width={300}
                                    height={100}
                                />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
