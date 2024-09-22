/* Scenes and Components */
import Skill from './Skill';
import Underline from '../components/Underline';

/* Skill Data */
import data from '../assets/data/skillData';

/* Framer Motion */
import { motion } from "framer-motion"

function Skills() {

    return (
    <div id="#skills" className='w-5/6 mx-auto'>
        {/* Programming Language - Bubbles */}
        <div>
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
                <h1 className='text-4xl pt-28'>Programming Languages</h1>

                <Underline />

            </motion.div>

            <motion.div
                    className="p-4 gap-2 flex flex-wrap justify-center items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
            >
                {data[0].map((skill, index) => (
                    <Skill key={index} name={skill.name} icon={skill.icon}/>
                ))}
            </motion.div>
        </div>
        
        {/* Web Development Stack - Bubbles */}
        <div>
            <motion.div
                className=""
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <h1 className='text-4xl mt-7'>Web Development Technologies</h1>

                <Underline />

            </motion.div>

            <motion.div
                    className="pt-4 pb-2 gap-2 flex flex-wrap justify-center items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
            >
                {data[1].map((skill, index) => (
                    <Skill key={index} name={skill.name} icon={skill.icon}/>
                ))}
            </motion.div>

            <motion.div
                    className="mt-2 pt-2 pb-4 gap-2 flex flex-wrap justify-center items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
            >
                {data[2].map((skill, index) => (
                    <Skill key={index} name={skill.name} icon={skill.icon}/>
                ))}
            </motion.div>

        </div>

        {/* Skills - Bubbles */}
        <div>
            <motion.div
                className=""
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <h1 className='text-4xl mt-7'>Skills</h1>

                <Underline />

            </motion.div>

            <motion.div
                    className="mb-16 p-4 gap-2 flex flex-wrap justify-center items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
            >
                {data[3].map((skill, index) => (
                    <Skill key={index} name={skill.name} icon={skill.icon}/>
                ))}
            </motion.div>
        </div>
    </div>
    );
}
  
export default Skills;