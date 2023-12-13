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
  pwc,
  suth,
  chatapp,
  gpt,
  threejs,
  cafe,
  peer
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Full Stack developer",
      icon: creator,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "PricewaterhouseCoopers",
      icon: pwc,
      iconBg: "#383E56",
      date: "September 2021 - June 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Led a 6-member Frontend team for a prominent US-based insurance client, overseeing the entire Software Development Life Cycle (SDLC) from requirements gathering to implementation and deployment of a user-centric solution",
        "Orchestrated and presented impactful review demos garnering high appreciation from stakeholders and contributing to a successful internal project"
      ],
    },
    {
      title: "Technical support Intern",
      company_name: "Sutherland Global Services",
      icon: suth,
      iconBg: "#E6DEDD",
      date: "August 2019 - September 2019",
      points: [
        "Efficiently transitioned into AT&T's technical support team at Sutherland following a rigorous two-week training program, providing effective technical assistance to more than 120  customers on daily basis",
        "Managed ticket handling of technical issues between various departments leading to resolution rate of 96%"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Harisriya was able to deliver complex scenarios like Credit Score and OFAC check which has a been a blocker for the Backend devs. She has also been training the developers on V20. She has prepared many asset documents which can be used by all v20 projects. She is a great asset to the team",
      name: "Shyaja Bhaskaran",
      designation: "Manager",
      company: "PwC",
      image: "https://icons-for-free.com/iconfiles/png/512/user+icon-1320190636314922883.png",
    },
    {
      testimonial:
        "Har Sriya is a UI Developer and was able to quickly ramp up on EIS V20. She was able to work on complex stories & has been very helpful in assisting her co-workers in the team. She is a hard worker and makes sure she delivers with quality. Her demos have been impressive & received lot of appreciations",
      name: "Sowmya Srinivas",
      designation: "Scrum Master",
      company: "PwC",
      image: "https://icons-for-free.com/iconfiles/png/512/user+icon-1320190636314922883.png",
    },
    {
      testimonial:
        "Hari Sriya has picked up very well & worked on many front-end related stories and defects for the client related to EIS and OpenL.She is a great team player who supported the team whenever required for UI related work in the project",
      name: "Easwara Chandran",
      designation: "Manager",
      company: "PwC",
      image: "https://icons-for-free.com/iconfiles/png/512/user+icon-1320190636314922883.png",
    },
  ];
  
  const projects = [
    {
      name: "Peer Pulse - Student Engagement Platform",
      description:
        "Developed a web-based platform, leveraging the MERN stack, effectively connecting over 900+ students, enhancing communication and engagement within the university community",
      tags: [
        {
          name: "Express.js",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
      ],
      image: peer,
      source_code_link: "https://github.com/Sriya03/Peer_Pulse",
    },
    {
      name: "Cafe Management System",
      description:
        "Designed  a multi-module Java application to automate cafe operations, for efficiency in menu management, order processing",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "OOPS",
          color: "green-text-gradient",
        },
        {
          name: "Swing UI",
          color: "pink-text-gradient",
        },
      ],
      image: cafe,
      source_code_link: "https://github.com/Sriya03/cafe-management-system",
    },
    {
      name: "Real time Chat Application",
      description:
        "Built a Full Stack chat application to utilize chat services like group chats, 1-on-1 chats, real time messaging, image and file support, and much more for its users",
      tags: [
        {
          name: "Express.js",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/Sriya03/FullStack_ChatApplication",
    },
    {
      name: "GPT4 ChatBot",
      description:
        "Implemented OpenAI api for different tasks in Node.js including major ones from Openai cook book providing hands on with advanced prompt engineering techniques like Chain of thought, Chain of verification along with RAG interaction in UI",
      tags: [
        {
          name: "chatgpt",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: gpt,
      source_code_link: "https://github.com/Sriya03/",
    }
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };