
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMongoose, SiJsonwebtokens, SiFastify } from "react-icons/si";
import frontendImage from "../assets/images/backendSkill.png"
import backendImage from "../assets/images/imageBackEnd.png"
import dataBaseImage from "../assets/images/databaseImage.png"


import cssImage from "../assets/skillsImage/cssImage.jpeg"
import htmImage from "../assets/skillsImage/htmlImage.jpeg"
import jsImage from "../assets/skillsImage/jsImage.jpeg"
import nodeImage from "../assets/skillsImage/nodeImage.jpeg"
import reactImage from "../assets/skillsImage/reactImage.jpeg"
import expressImage from "../assets/skillsImage/expressjsImage.jpeg"
import mongoImage from "../assets/skillsImage/mongoImage.jpeg";


import salesImage from "../assets/images/salesMaintenance.png"
import empManagement from "../assets/images/empManagement.png"
import proMaker from "../assets/images/promaker.png"


const infromations = {}

infromations.aboutMe = " I’m a passionate Full Stack Developer who loves building web applications that are fast, responsive, and user-friendly. I enjoy turning ideas into real products using modern tools like React, Node.js, and MongoDB. Always learning, always coding."

infromations.skills = [
    {
        id: "1",
        name: "Frontend",
        meInThat: "I love building beautiful and responsive UIs. Crafting pixel-perfect designs, smooth interactions, and blazing-fast frontend apps is my jam.",
        image: frontendImage,
        skillImages: [
            { name: "HTML", images: htmImage },
            { name: "CSS", images: cssImage },
            { name: "JavaScript", images: jsImage },
            { name: "React", images: reactImage },
        ],
    },
    {
        id: "2",
        name: "Backend",
        meInThat: "I love writing clean APIs, handling complex logic, and building secure, scalable backend systems using Node.js and Express.",
        image: backendImage,
        skillImages: [
            { name: "Node.js", images: nodeImage },
            { name: "Express", images: expressImage },
            // { name: "JWT", images: SiJsonwebtokens },
            // { name: "Fastify", images: SiFastify }
        ]
    },
    {
        id: "3",
        name: "Database",
        meInThat: "I use MongoDB to structure, store, and manage data effectively. I design flexible schemas and use aggregation pipelines like a pro.",
        image: dataBaseImage,
        skillImages: [
            { name: "MongoDB", images: mongoImage },
            // { name: "Mongoose", images: SiMongoose }
        ]
    }
];

infromations.projectData = [

    {
        title: 'Online Portfolio Generator',
        image: proMaker,
        description: 'Users can design and customize portfolios, select templates, edit styles, and generate links.',
        id: '2',
        forCode: "https://github.com/siddharthanMadhimax/proMaker-client",
        hoverDescription: "Create personal portfolios with custom templates, styles, and real-time preview."
    },
    {
        title: "Employee Management System",
        image: "", // add image if available
        description: "A system to manage employees with features like role assignment, leave tracking, and performance logs.",
        id: "3",
        forCode: "https://github.com/siddharthanMadhimax/EMP-frontend",
        hoverDescription: "HR-focused dashboard to control employee roles, monitor attendance, and view detailed records.",
        image: empManagement
    },
    {
        title: 'Sales Maintenance App',
        image: salesImage,
        description: 'A CRM-like tool to manage client lifecycle from prospect to closed deal with activity tracking.',
        id: "1",
        forCode: "https://github.com/siddharthanMadhimax/sales-server",
        hoverDescription: "Track leads, schedule follow-ups, and manage sales stages with performance insights."
    },
];


infromations.experience = [
    {
        title: "MERN Stack Trainee",
        company: "Pixsoffice (Product Based)",
        duration: "Jan 2024 - Apr 2024",
        description:
            "Hands-on training in building full-stack applications using MongoDB, Fastify, React, and Node.js. Worked on real-world projects like CRM tools and admin dashboards.",
        techStack: ["React", "Node.js", "JavaScript", "Fastify", "MongoDB","AntD",],
        status: "out",
        id:"1"
    },
    {
        title: "Frontend Developer",
        company: "Muthu Soft Labs",
        status: "In",
        duration: "May 2024 - Jul 2024",
        description:
            "Developed dynamic and responsive UI components using React and Tailwind CSS. Collaborated closely with backend teams to integrate APIs.",
        techStack: ["React", "Tailwind CSS","Git","Neet Folder Structure","Express"],
        id:"2"
    },
]




export default infromations