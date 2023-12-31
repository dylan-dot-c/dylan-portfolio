"use client";

import { getProjects, getProjectTypes } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import ProjectType from "@/types/ProjectTypes";
import Project from "@/types/Projects";

const Projects = () => {
    const [activeType, setActiveType] = useState("Frontend");
    const [allTypes, setallTypes] = useState<ProjectType[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        async function getData() {
            const new_projects = await getProjects(activeType);
            const projectTypes = await getProjectTypes();

            setProjects(new_projects);
            setallTypes(projectTypes);
        }

        getData();
    }, []);

    useEffect(() => {
        async function getData() {
            const newProjects = await getProjects(activeType);
            console.log(newProjects);
            setProjects(newProjects);
        }
        getData();
    }, [activeType]);
    // console.log(projects);
    return (
        <div className='mt-5'>
            <h1 className='my-3'>My Projects</h1>

            <div className='flex justify-center gap-2 mb-3'>
                {allTypes.map((type, index) => {
                    return (
                        <Button
                            key={index}
                            className={`${
                                activeType == type.name && "bg-green-400"
                            }`}
                            onClick={() => setActiveType(type.name)}>
                            {type.name}
                        </Button>
                    );
                })}
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {projects.length == 0 ? (
                    <h1>No Projects</h1>
                ) : (
                    <div>
                        {projects.map((project) => {
                            return (
                                <Link href={`/projects/${project.slug}`}>
                                    <div key={project._id}>
                                        <p>{project.name}</p>
                                        <Image
                                            className='w-full'
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
                )}
            </div>
        </div>
    );
};

export default Projects;
