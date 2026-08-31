import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://omarathon.github.io/",
    title: "Omar Tanner",
    description: "Omar Tanner's personal website.",
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
    dynamicOgImage: false,
    showArchives: false,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/omarathon" },
    { name: "linkedin", url: "https://www.linkedin.com/in/omartanner/" },
    { name: "mail",     url: "mailto:omar.tanner@outlook.com?subject=Portfolio%20Enquiry%20-%20Remove%20me%20if%20you%27re%20not%20a%20bot" },
  ],
  shareLinks: [],
});