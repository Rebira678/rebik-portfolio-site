import { FaReact, FaNodeJs,FaPython, FaDatabase, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

export const skillCategories = [
    {
        title: "Frontend Development",
        skills: [
            { name: "React", icon: FaReact, level: 90 },
            { name: "JavaScript", icon: SiJavascript, level: 80 },
            { name: "TypeScript", icon: SiTypescript, level: 60 },
            { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },

        ]
    },
    {
        title: "Backend & Database",
        skills: [
            { name: "Node.js", icon: FaNodeJs, level: 85 },
            { name: "Express", icon: SiExpress, level: 80 },
            { name: "Python", icon: FaPython, level: 70 },
            { name: "MongoDB", icon: SiMongodb, level: 80 },
            { name: "SQL / Postgre", icon: FaDatabase, level: 60 },
        ]
    },
    {
        title: "DevOps & Tools",
        skills: [
            { name: "Docker", icon: FaDocker, level: 70 },
            { name: "AWS", icon: FaAws, level: 60 },
            { name: "Git", icon: FaGitAlt, level: 87 },
        ]
    }
];
