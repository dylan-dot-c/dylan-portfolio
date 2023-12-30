import { defineConfig, isDev } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "onyz9154",
    dataset: "production",
    title: "Dylan Portfolio",
    apiVersion: "2023-12-28",
    basePath: "/admin",
    plugins: isDev ? [deskTool(), visionTool()] : [deskTool()],
    schema: { types: schemas },
});

export default config;
