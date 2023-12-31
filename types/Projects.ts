import { PortableTextBlock } from "sanity";

type Project = {
    _id: "string";
    _createdAt: "string";
    name: "string";
    slug: "string";
    image: "string";
    github_url: "string";
    live_url: "string";
    content: PortableTextBlock[];
    alt: string;
};

export default Project;
