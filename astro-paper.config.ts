import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://omarathon.github.io/",
    title: "Omar Tanner",
    description:
      "Omar Tanner's developer portfolio, spanning systems, HPC and applied ML projects.",
    author: "Omar Tanner",
    profile: "https://www.linkedin.com/in/omartanner/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "UTC",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/omarathon" },
    { name: "linkedin", url: "https://www.linkedin.com/in/omartanner/" },
    { name: "mail",     url: "mailto:omar.tanner@outlook.com?subject=Portfolio%20Enquiry" },
  ],
  shareLinks: [],
});