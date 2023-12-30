const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" },
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: "true" },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
        {
            name: "languages",
            title: "Languages",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: "live_url",
            title: "Live Url",
            type: "url",
        },
        {
            name: "github_url",
            title: "Github Url",
            type: "url",
        },
        {
            name: "project_type",
            title: "Project Type",
            type: "reference",
            to: [{ type: "project_type" }],
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};

export default project;
