import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "CPP",
      icon: "/assets/tech/cpp.svg",
      link: "https://en.cppreference.com/w/c/23",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "PHP",
      icon: "/assets/tech/php.svg",
      link: "https://www.php.net/",
    },
  ],
  frameworks: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Nest.js",
      icon: "/assets/tech/nestjs.svg",
      link: "https://nestjs.com/",
    },
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/express.svg",
      link: "https://expressjs.com/",
    },
    {
      name: "React Native",
      icon: "/assets/tech/react-native.svg",
      link: "https://reactnative.dev/",
    },
  ],
  libraries: [
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.svg",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Insomnia",
      icon: "/assets/tech/insomnia.svg",
      link: "https://insomnia.rest/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "NPM",
      icon: "/assets/tech/npm.svg",
      link: "https://www.npmjs.com/",
    },
    {
      name: "PNPM",
      icon: "/assets/tech/pnpm.svg",
      link: "https://pnpm.io/",
    },
    {
      name: "BUN",
      icon: "/assets/tech/bun.svg",
      link: "https://bun.sh/",
    }

  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/mysql.svg",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgresSQL",
      icon: "/assets/tech/psql.svg",
      link: "https://www.postgresql.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
  ],
};

const experiences = [
  {
    title: "Legal Translator",
    company_name: "Elite Legal Translation Services",
    icon: "/assets/company/legal.png",
    iconBg: "#E6DEDD",
    date: "November 2019 - Feburary 2022",
    points: [
      "Translating legal documents from Arabic to English or English to French with high accuracy.",
      "Collaborating with legal experts to ensure precise terminology and legal context in translations.",
      "Reviewing and proofreading translations to ensure clarity and correctness across languages.",
      "Ensuring confidentiality and adhering to legal standards during the translation process."
    ],
  },
  {
    title: "IT support intern",
    company_name: "Computime Hong Kong",
    icon: "/assets/company/computime.png",
    iconBg: "#E6DEDD",
    date: "February 2022 - June 2022",
    points: [
      "Assisted in troubleshooting hardware and software issues for internal users, ensuring minimal downtime.",
      "Supported the IT team in managing system upgrades and deployments, including the configuration of new workstations.",
      "Maintained and updated IT documentation, ensuring accurate records of system configurations and troubleshooting procedures.",
      "Provided technical support to employees, both remotely and in-person, addressing various IT-related inquiries and resolving issues efficiently."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Geeks for Geeks",
    icon: "/assets/company/geeks.png",
    iconBg: "#E6DEDD",
    date: "Auguest 2022 - Present",
    points: [
      "Currently serving as web application engineer, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
      "Led induction programs, ensured new member alignment with the organization's mission, and provided technical mentorship.",
      "Developed more than 25+ website, enhancing every organization's online visibility.",
      "Helped in building and securing many web servers with Top network engineers.", 
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Farouq proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Farouq does.",
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
    name: "FinanceRan",
    description:
      "FinanceRan is a financial critical dashboard for admins built on the MERN stack. The dashboard allows admins to view and manage data from various financial platforms, and predict their income using Linear Regression",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "cyan-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
      {
        name: "mui-materials",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/finance_dashboard.png",
    source_code_link: "https://github.com/ibra-kdbra/Finance-DashBoard",
    deployed_link: "https://finance-mongo.netlify.app/",
  },
  {
    name: "Funda Stream",
    description:
      "Video Stream website build on tailwind css, rapid API paid features, which can orgranise the user need, sort the data as you want.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "mui-materials",
        color: "pink-text-gradient",
      },
      {
        name: "react-player",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/fundaStream.png",
    source_code_link: "https://github.com/ibra-kdbra/Video-Clone",
    deployed_link: "https://funda-streamvideos.netlify.app/",
  },
  {
    name: "Comptitive Programming Platform",
    description:
      "A platform for competitive programming, built on next.js, firebase, react-recoil to train student on solving coding problems with multiple data structures.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "react-confetti",
        color: "yellow-text-gradient",
      },
      {
        name: "react-confetti",
        color: "cyan-text-gradient",
      },
    ],
    image: "/assets/projects/leetCode.png",
    source_code_link:
      "https://github.com/ibra-kdbra/Journey_FullStack/tree/leetCode",
    deployed_link:
      "https://leetcode-copy.netlify.app/",
  },
  {
    name: "Chess Game Engine",
    description:
      "This is a chess game made using the Three.js library and JavaScript. The game includes a 3D chessboard with realistic lighting and materials, move validation, and support for castling and en passant. The game also includes an AI opponent using the Stockfish chess engine",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "three.js",
        color: "black-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/chess_game.png",
    source_code_link:
      "https://github.com/ibra-kdbra/Chessboard-three.js",
    deployed_link:
      "https://ibra-kdbra.github.io/Chessboard-three.js/",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/ibra-kdbra",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/",
  },
];

const heroTexts = [
  "Nodejs developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Web engineer at geeks for geeks ",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
