import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "FloweseGuide",
      formats: ["umd", "es"],
      fileName: (format) => `flowese-guide.${format}.js`,
    },
    rollupOptions: {
      // External dependencies - don't bundle React
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "React",
        },
        // Extract CSS into separate file
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'flowese-guide.css';
          }
          return assetInfo.name || 'assets/[name].[ext]';
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    // Ensure CSS is extracted
    cssCodeSplit: false,
  },
});
