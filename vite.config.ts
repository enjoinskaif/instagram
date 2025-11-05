import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [
    react(),
    // Only use Express plugin during development (serve), not during build
    ...(command === "serve" ? [expressPlugin()] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    async configureServer(server) {
      try {
        // Dynamically import only during dev serve (avoiding esbuild resolution issues)
        const module = await import("./server/index");
        const { createServer } = module;
        const app = createServer();

        // Add Express app as middleware to Vite dev server
        server.middlewares.use(app);
      } catch (error) {
        console.warn(
          "Dev server Express middleware not loaded (this is OK for build)",
        );
      }
    },
  };
}
