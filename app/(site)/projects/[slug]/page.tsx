import { Button } from "@/components/ui/button";
import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

const Project = async ({ params }: { params: { slug: string } }) => {
    const project = await getProject(params.slug);
    console.log(params.slug);
    console.log(project);
    return (
        <div className='max-w-4xl mx-auto mt-20'>
            <header className='flex justify-between items-center mb-10'>
                <h1 className='text-6xl '>{project.name}</h1>
                <a href={project.url}>
                    <Button
                        variant='secondary'
                        className='whitespace-nowrap hover:bg-green-400 hover:text-black transition'>
                        View Project
                    </Button>
                </a>
            </header>

            <Image
                src={project.image}
                alt={project.alt}
                width={500}
                height={200}
            />
            <main>
                <div className='text-xl whitespace-nowrap text-white'>
                    <PortableText value={project.content} />
                </div>
            </main>
        </div>
    );
};

export default Project;
