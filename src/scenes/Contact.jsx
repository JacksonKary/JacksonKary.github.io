import { useForm } from "react-hook-form"
import Underline from "../components/Underline";
import { GiTennisBall, GiTennisCourt } from "react-icons/gi";
import { motion } from "framer-motion"

function Contact() {
    return (
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
            <h1 id="#contact" className="text-4xl pt-28">Contact Me!</h1>

            <Underline />
            <br/>
            <br/>

        </motion.div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-20">
            <motion.div
                className="sm:mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <p className="text-3xl font-semibold">Ready to hit it off?</p>
                <br/>
                <i><p className="text-2xl font-montserrat underline">The ball is in your court!</p></i>

            </motion.div>
            {/* Tennis Graphic */}
            <div className="relative flex justify-center mb-36 px-16">
                
                <div className="absolute text-9xl z-0">
                    <GiTennisCourt /> 

                    <motion.div
                        className=""
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.55, duration: 0.7, ease: "easeInOut" }}
                        variants={{
                            hidden: { opacity: 0.8, rotate: 0, scale: 0.7, x: -35, y: -80 },
                            visible: { opacity: 1, rotate: 15, scale: 1.0, x: 0, y: [-80, -82, 0] },
                        }}
                    >
                    <div className="absolute bottom-7 right-7 flex justify-center text-2xl text-lime-300 z-10 drop-shadow-lg rounded-full bg-black">
                        <GiTennisBall />
                    </div>
                </motion.div>
                    
                </div>
            </div>
        </div>

        <br/>

        {/* Contact Form */}
        <motion.div
            className="flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <form
                target="_blank"
                action="https://formspree.io/f/xjkboqgd"
                method="POST"
                className="bg-stone-300 bg-opacity-50 text-black text-sm font-bold mx-auto my-1 px-10 py-15 rounded-3xl shadow-lg mb-14 mt-6"
            >
                <input required type="text" id="name" name="name" placeholder="name" className="placeholder-gray-500 mt-16 mb-2 p-3 rounded-md w-full"/><br />
                <input required type="email" id="email" name="email" placeholder="email" className="placeholder-gray-500 mt-2 mb-3 p-3 rounded-md w-full"/><br />

                <div className="border-t-2 border-stone-700 rounded-full w-11/12 mx-auto mt-2 mb-1 border-opacity-30"></div>

                <textarea required
                    name="message"
                    placeholder="message"
                    rows="4"
                    cols="50"
                    className="placeholder-gray-500 mt-2 mb-6 p-3 rounded-md w-full"
                />
                <br />

                <button
                  className="px-3 py-2 mb-10 bg-stone-600 font-semibold text-stone-300 hover:bg-stone-300 hover:text-stone-600 rounded-md transition duration-200"
                  type="submit"
                >
                    Let's connect!
                </button>

            </form>
        </motion.div>
    </div>
    );
}
  
export default Contact;