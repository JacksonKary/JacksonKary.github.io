/* Skill Icons */
/* Programming Language Icons - in order */
import { BiLogoCPlusPlus } from "react-icons/bi";
import { DiJava } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { SiOcaml } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { GoCpu } from "react-icons/go";

/* Web Development Icons - in order */
import { DiNodejsSmall } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { SiPug } from "react-icons/si";

/* Frontend Icons - in order */
import { DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";


/* Skill Icons - in order */
import { SiJira } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiTableau } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { DiLinux } from "react-icons/di";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { BsDatabaseLock } from "react-icons/bs";
import { BsDatabaseFillLock } from "react-icons/bs";
import { FaTerminal } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { SiUml } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { MdOutlineWeb } from "react-icons/md";
import { SiPostman } from "react-icons/si";
import { DiUbuntu } from "react-icons/di";



/* Structure of `skills` */
/*
    const skills = [
        programmingLanguages,

        webDevelopmentStack,

        frontend,

        skills
    ]
*/


const programmingLanguages = [
    {
        name: "C/C++",
        icon: <BiLogoCPlusPlus />
    },
    {
        name: "Java",
        icon: <DiJava />
    },
    {
        name: "Javascript",
        icon: <DiJsBadge />
    },
    {
        name: "OCaml",
        icon: <SiOcaml />
    },
    {
        name: "Python (HuggingFace, Numpy, Pandas, PyTorch)",
        icon: <DiPython />
    },
    {
        name: "X86-64 ASM",
        icon: <GoCpu />
    }
];

const webDevelopmentStack = [
    {
        name: "Node.js",
        icon: <DiNodejsSmall />
    },
    {
        name: "Express.js (jwt, bcrypt)",
        icon: <SiExpress />
    },
    {
        name: "Javascript (Fetch API)",
        icon: <DiJavascript />
    },
    {
        name: "HTML (Pug)",
        icon: <SiPug />
    },
    {
        name: "CSS",
        icon: <DiCss3 />
    },
    {
        name: "MySQL (mysql-await)",
        icon: <DiMysql />
    }
];

const frontend = [
    {
        name: "React.js",
        icon: <DiReact />
    },
    {
        name: "Tailwind.css",
        icon: <SiTailwindcss />
    },
    {
        name: "FramerMotion",
        icon: <TbBrandFramerMotion />
    }
];

const technologies = [
    {
        name: "Agile/Scrum Development (Jira)",
        icon: <SiJira />
    },
    {
        name: "Containerization (Docker)",
        icon: <FaDocker />
    },
    {
        name: "Data Visualization (Pandas, Matplot, Tableau)",
        icon: <SiTableau />
    },
    {
        name: "Design Patterns",
        icon: <FaProjectDiagram />
    },
    {
        name: "Documentation (Doxygen)",
        icon: <IoDocumentTextOutline />
    },
    {
        name: "Google Test",
        icon: <FaGoogle />
    },
    {
        name: "Unix/Linux",
        icon: <DiLinux />
    },
    {
        name: "Operating Systems",
        icon: <TbDeviceDesktopCode />
    },
    {
        name: "Secure Software Development",
        icon: <BsDatabaseLock />
    },
    {
        name: "Secure Web Programming",
        icon: <BsDatabaseFillLock />
    },
    {
        name: "SSH",
        icon: <FaTerminal />
    },
    {
        name: "SQL",
        icon: <FaDatabase />
    },
    {
        name: "Systems Programming",
        icon: <FaCogs />
    },
    {
        name: "UML (Lucid Chart)",
        icon: <SiUml />
    },
    {
        name: "Version Control (Git)",
        icon: <DiGit />
    },
    {
        name: "Web Design",
        icon: <MdOutlineWeb />
    },
    {
        name: "Web API Debugging (Postman)",
        icon: <SiPostman />
    },
    {
        name: "WSL/Ubuntu",
        icon: <DiUbuntu />
    }
];

const skills = [programmingLanguages, webDevelopmentStack, frontend, technologies];

export default skills;