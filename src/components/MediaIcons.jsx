import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Diploma from '../assets/icons/diploma.webp';

const MediaIcons = ({ iconSize }) => {
    return (
        <div className="mx-auto md:mx-0 flex flex-row gap-8">
            
            <a className="hover:text-stone-400 transition duration-200"
                href="https://www.linkedin.com/in/jackson-kary-software-engineer/"
                rel="noreferrer"
                target='_blank'
                title="LinkedIn Profile"
            >
                <FaLinkedin size={iconSize}/>
            </a>            
            <a className="hover:text-stone-400 transition duration-200"
                href="https://github.com/JacksonKary"
                rel="noreferrer"
                target='_blank'
                title="GitHub Profile"
            >
                <FaGithub size={iconSize} />
            </a>
            <a className="relative group block my-auto"
                href="https://www.parchment.com/u/award/73dc4264bf29e97bca200204dd07aa93"
                rel="noreferrer"
                target="_blank"
                title="Diploma (B.S. Comp. Sci.)"
            >
                {/* Background effect on hover */}
                <div className="absolute inset-0 h-5/6 bg-stone-400 bg-opacity-0 group-hover:bg-opacity-20 group-hover:shadow-sm duration-200 transition-150"></div>
                
                {/* PNG Icon */}
                <img src={Diploma} alt="Diploma (B.S. Comp. Sci.)" className="relative z-10 h-8" />
            </a>
            {/* <a className='bg-stone-400 bg-opacity-0 hover:bg-opacity-20 hover:shadow-sm duration-200 transition '
                href='https://www.parchment.com/u/award/73dc4264bf29e97bca200204dd07aa93'
                rel="noreferrer"
                target='_blank'
                title="Diploma (B.S. Comp. Sci.)"
            >
                <img src={ Diploma } alt="Diploma (B.S. Comp. Sci.)" className='h-8'/>
            </a> */}
        </div>
    )
};
export default MediaIcons;