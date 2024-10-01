import tennis from '../assets/images/Tennis.webp';
import esports from '../assets/images/Esports.webp';
import aceBadge from '../assets/images/aceBadge.webp';

import Underline from '../components/Underline';

import { motion } from "framer-motion"

function Interest() {
    return (
        <div id="#interests" className='flex-col w-5/6 mx-auto pb-10'>
            {/* Interests Section Header */}
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
                <h1 className="text-4xl pt-28">Interests</h1>

                <Underline />

                <br />

                {/* Interests Section Description */}
                <p className='text-lg mb-8'>
                    Here are a few hobbies that I’m passionate about and have dedicated time to over the years!
                </p>

                <br />
            </motion.div>


            <div className='flex flex-col xl:flex-row xl:justify-center gap-20 xl:gap-1 xl+:gap-5 mt-36 mb-9 xl:mb-40'>

                {/* Tennis */}
                <motion.div
                    className="relative bg-stone-300 bg-opacity-60 rounded-full shadow-2xl xl:shadow-md aspect-square      mb-20 xl:mb-0  h-auto w-full xxs:h-80 xxs:w-80 xs:h-96 xs:w-96 mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -60 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <img loading='lazy' src={tennis} alt="Picture of tennis racket and tennis shoes" className="absolute -inset-32 rounded-xl shadow-2xl h-64 mx-auto" />

                    <p className='mt-36 xs:mt-40 mb-10 xs:mb-20 px-10'>
                        Tennis is my favorite sport and hobby.
                        I enjoy the challenge and satisfaction of hitting clean shots.
                        After nearly a decade, I’m still excited to play every time.
                    </p>
                </motion.div>


                {/* Personal Training */}
                <motion.div
                    className="relative bg-stone-500 rounded-3xl shadow-2xl xl:shadow-md aspect-square      mb-20 xl:mb-0  h-auto w-full xxs:h-80 xxs:w-80  xs:h-96 xs:w-96 xl:w-80 xl+:w-96 mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 60 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className='flex-col justify-evenly'>

                        <img loading='lazy' src={aceBadge} alt="Picture of ACE Personal Trainer Badge" className="absolute -inset-32 mt-0 h-64 mx-auto" />

                        <p className='mt-36 xs:mt-40 mb-10 xs:mb-20 px-10 text-white'>
                            I’m passionate about teaching and exercise, which led me to persue personal training as a hobby.
                            Feel free to ask me any exercise-related questions—I’m happy to help for free!
                        </p>

                    </div>
                </motion.div>

                {/* Esports */}
                <motion.div
                    className="relative bg-stone-300 bg-opacity-60 rounded-full shadow-2xl xl:shadow-md aspect-square      xl:mb-0  h-auto w-full xxs:h-80 xxs:w-80 xs:h-96 xs:w-96 mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -60 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className='absolute -inset-32 h-60 xs:h-64 w-7/12 xs:w-1/2 bg-gradient-to-tr from-black bg-gray-500 rounded-xl shadow-2xl mx-auto'>
                        <img loading='lazy' src={esports} alt="Picture of Valorant agent with UMN jacket" className="h-60 xs:h-64 m-auto rounded-2xl mt-0 px-2" />
                        {/* image credit: https://www.facebook.com/share/g/axUa2S5Gykp5BNHa/ */}
                    </div>

                    <p className='mt-32 xs:mt-40 mb-10 xs:mb-20 px-10'>
                        At university, I joined UMN Valorant, a collegiate esports team competing in Valorant, a 5v5 tactical first-person shooter game.
                        I was on the varsity roster for three semesters and made four lifelong friends.
                    </p>

                </motion.div>

            </div>


        </div>
    );

}

export default Interest;