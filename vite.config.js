import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
    server: { https: true },
    preview: { https: true },
    plugins: [ basicSsl() ]
});