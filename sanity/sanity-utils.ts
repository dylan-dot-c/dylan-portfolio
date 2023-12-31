import Project from "@/types/Projects";
import ProjectType from "@/types/ProjectTypes";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProjects(project_type: string): Promise<Project[]> {
    const client = createClient(clientConfig);
    return client.fetch(
        groq`
        *[_type=="project" && project_type -> name == $type]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            github_url,
            live_url,
            content,
            alt
        }
        `,
        {
            type: project_type,
        }
    );
}

export async function getProject(slug: string): Promise<Project> {
    const client = createClient(clientConfig);
    return client.fetch(
        groq`
            *[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            github_url,
            live_url,
            content
            }
        `,
        { slug: slug }
    );
}

export async function getProjectTypes(): Promise<ProjectType[]> {
    const client = createClient(clientConfig);

    return client.fetch(
        groq`*[_type=="project_type"] {
            name
        }`
    );
}
