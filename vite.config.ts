import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";
import { renameSync, existsSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [".", "./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [
    react(),
    expressPlugin(),
    copyRedirectsPlugin(), // 👈 add this
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

// ✅ Express middleware sirf dev server ke liye
function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // only during dev
    configureServer(server) {
      const app = createServer();
      server.middlewares.use(app);
    },
  };
}

// ✅ Plugin jo _redirects.txt ko build ke baad _redirects banata hai
function copyRedirectsPlugin(): Plugin {
  return {
    name: "copy-redirects",
    apply: "build",
    closeBundle() {
      const from = "public/_redirects.txt";
      const to = "dist/spa/_redirects";
      if (existsSync(from)) {
        renameSync(from, to);
        console.log(`✅ Copied ${from} → ${to}`);
      }
    },
  };
}
