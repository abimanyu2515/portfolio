import { color } from "framer-motion";
import {
  mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, hepto, zeex, carrent, jobit, tripguide, threejs, bootstrap, fastapi 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
    icon: backend,
  },
];

const technologies = [
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap
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
    name: "FastAPI",
    icon: fastapi
  }
];

const experiences = [
  {
    title: "Front-end Developer Intern",
    company_name: "Hepto Technologies",
    icon: hepto,
    iconBg: "#383E56",
    date: "Nov 2024 - Dec 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Zeex AI",
    icon: zeex,
    iconBg: "#E6DEDD",
    date: "May 2025 - Aug 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Infernal Enterprise",
    description:
      "An AI-based solution for E-commerce sites, which helps in measuring clothing sizes to avoid unnecessary returns.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "CV",
        color: "blue-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/abimanyu2515/Infernal-Enterprise",
  },
  // {
  //   name: "CCTV Surveillance and Analysis Dashboard",
  //   description:
  //     "Built a CCTV surveillance and analysis dashboard that stores and displays visuals on insecurities or accidents occured",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient"
  //     },
  //     {
  //       name: "fastapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "postgresql",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "",
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Smart Irrigation and Crop Monitoring System",
    description:
      "Automated irrigation and threat protection system for farmers with Integrated Arduino IoT sensors.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Internet of Things",
        color: "green-text-gradient",
      }
    ],
    image: "",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };