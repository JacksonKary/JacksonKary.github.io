import Project from './Project';
import Underline from '../components/Underline';

import data from '../assets/data/projectData';

import { motion } from "framer-motion"

function Projects() {

    return (
    <div id="#projects" className='w-5/6 mx-auto'>
        {/* Projects Section Header */}
        <motion.div
                className=""
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                }}
        >
           <h1 className='text-4xl pt-28 mb-10'>Projects</h1>

            <Underline />

            <br />

            {/* Projects Section Description */}
            <p className='text-lg mb-20'>
                Here are some of my projects! This is where I got my hands dirty to apply my knowledge.
            </p> 
        </motion.div>
        

        {/* Project Grid */}
        <div className="mx-auto items-center text-center grid grid-cols-1 xl:grid-cols-2 gap-12 mt-12 mb-16">
            {data.map((project, index) => (
                <motion.div
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <Project key={index} thumbnail={project.thumbnail} title={project.title} githubUrl={project.githubUrl} highlights={project.highlights} description={project.description}/>
                </motion.div>
                
            ))}
        </div>
    </div>
    );
}
  
export default Projects;