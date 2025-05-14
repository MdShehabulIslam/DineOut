import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: "#ff602c",
  //       background: "",
  //       navbg: "rgba(89, 86, 86, 0.29)",
  //       cardbg: "rgba(89, 86, 86, 0.4)",
  //     },
  //   },
  //   fontFamily: {
  //     inter: ["Inter", "sans-serif"],
  //   },
  // },
});
