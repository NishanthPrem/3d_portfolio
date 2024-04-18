import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  linux,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  docker,
  bofa,
  aimtrainer,
  threejs,
  facerecognition,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Cybersecurity", 
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Linux",
    icon: linux,
  },
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Bank of America",
    icon: bofa,
    iconBg: "#383E56",
    date: "July 2021 - December 2022",
    points: [
      "Developing and maintaining applications using python and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Technology Apprentice",
    company_name: "Bank of America",
    icon: bofa,
    iconBg: "#383E56",
    date: "July 2020 - July 2021",
    points: [
      "",
    ],
  },
];


const projects = [
  {
    name: "Aim Trainer",
    description:
      "Aim Trainer Using Pygame",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PyGame",
        color: "green-text-gradient",
      },
      {
        name: "Gaming",
        color: "pink-text-gradient",
      },
    ],
    image: aimtrainer, 
    source_code_link: "https://github.com/NishanthPrem/aim_trainer",
  },

  {
    name: "Face Recognition",
    description:
      "Face Detection using OpenCV",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Beginner",
        color: "pink-text-gradient",
      },
    ],
    image: facerecognition, 
    source_code_link: "https://github.com/NishanthPrem/FaceDetection",
  },
 
];

export { services, technologies, experiences,  projects };