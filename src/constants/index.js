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
  financedash,
  rssfeed,
  cloudresume,
  churnprediction,
  sentimentanalysis,
  googlestock
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
    date: "July 2020 - December 2022",
    points: [
      "Utilized NLP, OCR, and Machine Learning to automate document classification and key information extraction resulting in a 90% reduction in manual effort, significantly expediting document processing workflows in the home loan processing department.",
      "Leveraged expertise in Python, Linux, SQL, Git, and Agile methodologies to expedite projects by 20%, reinforce security, and stimulate innovation, yielding a 15% operational efficiency surge and a 30% client satisfaction upswing.",
      "Managed a process re-engineering project to improve and consolidate end-to-end service processes; restructured communication flow among 5 departments and cut down paperwork by 80%.",
      "Played a pivotal role in ensuring software quality by conducting comprehensive testing, offering unwavering 24/7 client support, and devising strategic blueprints for future software enhancements.",
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

  {
    name: "Finance Dashboard",
    description:
      "Dashboard using Typescript",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "TS",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },      
    ],
    image: financedash, 
    source_code_link: "https://github.com/NishanthPrem/finance_dashboard",
  },

  {
    name: "RSS Feedreader GUI",
    description:
      "RSS Feed Reader application which parses the link and outputs the title, link and description of the URL",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "RSS",
        color: "pink-text-gradient",
      },      
    ],
    image: rssfeed, 
    source_code_link: "https://github.com/NishanthPrem/rss_freader_gui",
  },

  {
    name: "Cloud Resume",
    description:
      "",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "NoSQL",
        color: "pink-text-gradient",
      },      
    ],
    image: cloudresume, 
    source_code_link: "https://github.com/NishanthPrem/cloud_resume",
  },

  {
    name: "Churn Prediction Model",
    description:
      "",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "PyTorch",
        color: "pink-text-gradient",
      },      
    ],
    image: churnprediction, 
    source_code_link: "https://github.com/NishanthPrem/churn_prediction",
  },

  {
    name: "Sentiment Analysis",
    description:
      "",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },      
    ],
    image: sentimentanalysis, 
    source_code_link: "https://github.com/NishanthPrem/sentiment_analysis",
  }, 

  {
    name: "Google Stock Price Predictor",
    description:
      "",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },      
    ],
    image: googlestock, 
    source_code_link: "https://github.com/NishanthPrem/google_stock_price_predictor",
  },
  
];

export { services, technologies, experiences,  projects };