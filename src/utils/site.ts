const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://i.postimg.cc/9fyGrpjP/s.png";

export const siteConfig = {
  name: "Safin | Mern Stack Developer",
  description:
    "Personal portfolio website showcasing my projects and skills as a Mern stack developer",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    twitter: "https://x.com/Safin1680",
    github: "https://github.com/safin878",
  },
  mailSupport: "shafin1680@gmail.com",
};
