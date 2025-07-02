import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CharaUTnDT´s page",
  description: "A VitePress theme",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png", // Add this line
        href: "https://file.garden/Z5Ffa4I2GxeBlBl3/save-point-transparent.png",
      },
    ],
  ],
  // https://vitepress.dev/guide/markdown#syntax-highlighting-in-code-blocks
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-macchiato",
    },
  },
  themeConfig: {
    logo: {
      src: "https://file.garden/Z5Ffa4I2GxeBlBl3/save-point-transparent.png",
      alt: "Catppuccin logo",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "How to use LinuxDBAssistant", link: "/linuxdbassistant/how-to-use-it" },
    ],
    sidebar: [
      {
        text: "LinuxDBAssistant", // Category title
        items: [
          { text: "What is LinuxDBAssistant?", link: "/linuxdbassistant/linux-db-assistant" },
          { text: "How to use it", link: "/linuxdbassistant/how-to-use-it" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/CharaUTnDT" }],
  },
});
