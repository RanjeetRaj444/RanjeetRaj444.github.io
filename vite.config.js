import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Deployed to https://ranjeetraj444.github.io (user page, served at root) -> base "/"
export default defineConfig({
	base: "/",
	plugins: [react(), tailwindcss()],
	build: {
		outDir: "dist",
		assetsInlineLimit: 4096,
	},
});
