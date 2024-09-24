import profileImg from '../assets/images/t3-fin.webp';
import MediaIcons from '../components/MediaIcons';

import { motion } from "framer-motion"

function Home() {
    return (
        <div id="#home" className="w-5/6 md:w-full mt-5 xs:mt-10 md:mt-0 md:flex md:flex-row-reverse md:justify-evenly">

            <img alt="profile" src={profileImg} className='mx-auto md:mx-0 w-full max-w-72 rounded-full shadow-2xl md:mt-36 mb-6 md:mb-32' />

            <div className="flex flex-col items-center lg:items-start justify-center basis-2/5  gap-2">
                {/* Biography */}
                <motion.div
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -40 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className='text-center lg:text-left text-lg md:mt-20'>
                        I graduated with a Bachelor of Science in Computer Science from the University of Minnesota in December 2023.
                        Upon graduating, I worked as a software developer at DataAnnotation, where I trained AI models to improve at programming.
                        Currently, I’m a software integration specialist at Lansworth Pharma Self Serve.
                        Outside of work, I enjoy weightlifting and playing tennis.
                    </p>
                </motion.div>

                <br />

                {/* Resume Link */}
                <motion.div
                    className="flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -40 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <a className="self-center md:self-auto px-6 py-4 rounded-2xl bg-stone-900 bg-gradient-to-tr from-stone-500 text-white font-semibold hover:bg-stone-400 transition duration-200"
                        href="https://drive.google.com/file/d/1wIys8xAFxQcvLoWokW1U564hEh9g1CZO/view?usp=sharing"
                        rel="noreferrer"
                        target='_blank'
                        title="Resume (Google Drive Link)"
                    >
                        Resume
                    </a>
                </motion.div>
                <br />

                {/* Media Links */}
                <motion.div
                    className="flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -40 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <MediaIcons iconSize={'30px'} />
                </motion.div>
            </div>


        </div>
    );
}

export default Home;