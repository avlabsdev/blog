import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "AV Labs - Blog",
  DESCRIPTION: "Everything from web application development to life and everything in between.",
  EMAIL: "hello@avlabs.dev",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Professional web applications development and services.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Dribbble",
    HREF: "https://dribbble.com/avlabsdev",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/avlabsdev",
  },
];
