import { defineConfig } from "astro/config";
import osPlugin from "@builder-os/astro";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    osPlugin({
      customCSS: ["./src/os.css"],
      user: {
        name: "Dummy",
        description: "Testing 123",
        avatar: "/placeholder.jpg",
        socials: {
          github: "https://github.com",
          linkedin: "https://www.linkedin.com",
          twitter: "https://twitter.com",
        },
        coords: {
          lat: 28.5983,
          lng: 83.931,
          name: "Himalayas, Asia",
        },
      },
      isBioEnabled: true,
      isTravelEnabled: true,
      isProjectsEnabled: true,
      isMusicEnabled: true,
      isNotesEnabled: true,
      travel: {
        wishlist: [
          { name: "Thailand", isChecked: false },
          { name: "Brazil", isChecked: false },
          { name: "Jamaica", isChecked: false },
        ],
      },
    }),
  ],
});
