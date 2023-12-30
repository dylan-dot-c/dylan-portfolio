import Project from "@/types/Projects";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
    const client = createClient(clientConfig);
    return client.fetch(
        groq`
        *[_type=="project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
            alt
        }
        `
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
            url,
            content
            }
        `,
        { slug: slug }
    );
}