import Header from './Header';
import profileImg from '../assets/images/profile.webp';
import MediaIcons from '../components/MediaIcons';

import { motion } from "framer-motion"

function Home() {
    return (
        <div className='min-h-100svh flex'>

            <Header />

            <div id="#home" className="mx-auto w-5/6 md:w-full xs:mt-10 md:mt-0 md:flex md:flex-row-reverse md:justify-evenly mt-4 mb-10 px-4 pb-4 md:px-0 md:pb-0 ring-1 md:ring-0 
                                    ring-stone-400 rounded-2xl bg-stone-50 bg-opacity-70 md:bg-inherit shadow-md md:shadow-none">


                <img id="profileImg" alt="profile" src={profileImg} className='mx-auto md:mx-0 md:w-full max-w-44 md:max-w-72 aspect rounded-full shadow-2xl my-5 self-center'/>
            
                <div className="flex flex-col items-center lg:items-start justify-center basis-2/5 gap-0 md:gap-2">
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
                            Currently, I’m a software integration engineer at Lansworth Pharma SelfServe.
                            Outside of work, I enjoy weightlifting and tennis.
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
        </div>
    );
}

export default Home;