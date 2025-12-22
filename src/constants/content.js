import {
  backend, web, javascript, typescript, html, css, reactjs, tailwind, nodejs, mongodb, git, figma, hepto, zeex, threejs, bootstrap, fastapi, python, postgres, github_tech, carrent, jobit, tripguide
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
    name: "Python",
    icon: python,
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
    name: "GitHub",
    icon: github_tech,
  },
  {
    name: "FastAPI",
    icon: fastapi
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
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
      "Integrated secure login and signup functionality with JWT authentication and token expiry in a CCTV surveillance site using react.js, FastAPI, and PostgreSQL, improving operational efficiency by 65%.",
      "Implemented role-based user management and route handling for administrators and general users, reducing the risk of unauthorized access by minimizing manual errors.",
      "Revamped blog page of organization's website, refined visual appeal and UI with react.js and Tailwind CSS.",
    ],
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
    source_code_link: "https://github.com/abimanyu2515/Infernal-Enterprise",
  },

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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };