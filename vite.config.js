import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { URL_BASE } from "./src/components/constants/url";

export default defineConfig({
  root: "./src",
  base: URL_BASE + "/",
  build: {
    outDir: "../dist",
  },
  plugins: [
    VitePWA({
      manifest: {
        start_url: URL_BASE + "/",
        icons: [
          {
            src: `${URL_BASE}/icons/android-chrome-36x36.png`,
            sizes: "36x36",
            type: "image/png",
          },
          {
            src: `${URL_BASE}/icons/android-chrome-48x48.png`,
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: `${URL_BASE}/icons/android-chrome-72x72.png`,
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: `${URL_BASE}/icons/android-chrome-96x96.png`,
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: `${URL_BASE}/icons/android-chrome-144x144.png`,
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: `${URL_BASE}/icons/android-chrome-192x192.png`,
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: `${URL_BASE}/icons/android-chrome-256x256.png`,
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: `${URL_BASE}/icons/android-chrome-512x512.png`,
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
      },
    }),
  ],
});
