// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  shopify,
  starbucks,
  tesla,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "http://www.github.com/sanidhyy/3d-portfolio/",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI-Powered Solutions",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Chatbot | Automation Developer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Web Developer",
    company_name: "Goodface agency",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "AI-Powered Solutions",
    company_name: "Temy",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Designing and integrating intelligent features such as chatbots, recommendation engines, and workflow automations.",
      "Leveraging machine learning and natural language processing to enhance user experience and business efficiency.",
      "Building scalable APIs and services that combine AI with modern web technologies.",
      "Collaborating with clients to identify opportunities where AI can solve real-world problems and deliver measurable value.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Designing, developing, and maintaining server-side applications using Node.js and related frameworks.",
      "Building and integrating RESTful and GraphQL APIs to ensure smooth communication between front-end and back-end systems.",
      "Implementing authentication, authorization, and security best practices to protect applications and user data.",
      "Collaborating with front-end developers, designers, and product managers to deliver reliable, high-quality solutions.",
      "Participating in code reviews, debugging, and performance tuning to maintain clean and efficient codebases.",
      "Leveraging AI and automation to enhance backend workflows and data-driven features.",
    ],
  },
  {
    title: "Chatbot | Automation Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Designing and developing AI-powered chatbots to enhance customer engagement and streamline communication.",
      "Building automation solutions that integrate with APIs, CRMs, and third-party platforms to improve efficiency.",
      "Implementing natural language processing (NLP) for intelligent, human-like interactions.",
      "Collaborating with clients and teams to deliver scalable, secure, and user-friendly AI-driven solutions.",
      "Continuously optimizing chatbot performance with analytics, testing, and feedback loops.",
    ],
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Tradestream",
    description:
      "TrageStream integrates with all of your favorite crypto exchanges to provide in-depth performance tracking for your trading.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://tradestream.xyz/",
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://billline.net/",
  },
  {
    name: "Learn crypto",
    description:
      "Free education platform designed to help users easily learn about cryptocurrency with simple, relevant and engaging content.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://learncrypto.com/",
  },
  {
    name: "30th anniversary of Ukraine",
    description:
      "interactive website dedicated to the 30th anniversary of the independence of Ukraine.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/sanidhyy/tiktok-clone",
    live_site_link: "https://30ua.info/en/",
  },
  {
    name: "Solid Bash",
    description:
      "Gamified website with two navigation modes for a global video game development studio focusing on mobile platforms. Studio provides bespoke solutions for the entire development cycle.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/sanidhyy/crypto-app",
    live_site_link: "http://solidbash.com/",
  },
  {
    name: "Esto",
    description:
      "Corporate website for credit company, specializing in providing merchants automated and tech-driven poing of sale financing, custome private label solutions and tailored payment technology.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://global.esto.eu/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@OPGAMER.",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sanidhyy",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/TechnicalShubam",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sanidhyy",
  },
] as const;
