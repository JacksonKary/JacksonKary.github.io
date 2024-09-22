import React, { useState, useEffect } from 'react';
import signatureImage from '../assets/images/Signature.webp';
import '../components/styles.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
    // State to hold whether navbar is opaque or not
    const [isOpaque, setIsOpaque] = useState(false);

    useEffect(() => {
        const navbarHeight = 66;
        const handleScroll = () => {
            // Set navbar to opaque if scrolled past a third of its height
            if ((window.scrollY > navbarHeight / 3)) {
                setIsOpaque(true);
            } else {
                setIsOpaque(false);
            }
        };
        // Call the function to set the initial state based on the current scroll position
        handleScroll();
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // State to manage if the menu is open or closed
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu's state
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div>
            <nav className={`flex justify-end fixed top-0 left-0 w-full transition-all duration-300 z-50 ${isOpaque ? 'bg-opacity-75 shadow-xl backdrop-blur-sm' : 'bg-opacity-0'} bg-stone-200 `}>
                {/* Desktop */}
                <div id="navbar" className="flex flex-row w-5/6 lg:mx-auto justify-end">

                    {/* ASSISTS MOBILE MENU: creates an invisible button allowing to close dropdown menu by clicking/tapping off of it. */}
                    <button onClick={toggleMenu} className={`${isOpen ? 'flex flex-grow lg:hidden' : 'lg:hidden'}`}></button>

                    <div id="links" className={`hidden lg:flex justify-center gap-16 text-center`}>
                        <AnchorLink href="#home" className="py-5 pr-0.5 border-transparent hover:text-white hover:text-shadow transition-all duration-250 ease-linear flex items-center">Home</AnchorLink>
                        <AnchorLink href="#skills" className="py-5 pr-0.5 border-b-transparent hover:text-white  hover:text-shadow transition-all duration-250 ease-linear flex items-center">Skills</AnchorLink>
                        <AnchorLink href="#projects" className="py-5 pr-0.5 border-b-transparent hover:text-white hover:text-shadow transition-all duration-250 ease-linear flex items-center">Projects</AnchorLink>
                        <AnchorLink href="#interests" className="py-5 pr-0.5 border-b-transparent hover:text-white hover:text-shadow transition-all duration-250 ease-linear flex items-center">Interests</AnchorLink>
                        <AnchorLink href="#contact" className="py-5 pr-1 border-b-transparent hover:text-white hover:text-shadow transition-all duration-250 ease-linear flex items-center">Contact</AnchorLink>
                    </div>

                </div>
                {/* Mobile */}
                <div id="menu" className={`flex flex-col lg:hidden items-center justify-end justify-self-end transition-all duration-300 top-0 py-0 px-0 w-1/4 h-full ${isOpen ? 'bg-opacity-75 shadow-xl backdrop-blur-sm bg-stone-200' : 'bg-opacity-0'} z-50`}>

                    <button onClick={toggleMenu} className="flex items-center justify-center z-50">
                        {isOpen ? (
                            <svg className="h-8 self-center my-2" viewBox="0 0 24 24">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            </svg>
                        ) : (
                            <svg className="h-8 self-center my-2" viewBox="0 0 24 24">
                                {/* <path d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z"/> */}
                                <path d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                            </svg>
                        )}
                    </button>


                    <div className={`flex-col justify-between ${isOpen ? 'min-h-screen max-h-screen opacity-100' : 'min-h-0 max-h-0 opacity-0'} transition-all duration-200 ease-in-out`}>
                        <AnchorLink href="#home" onClick={toggleMenu} className="border-y-2 border-black flex items-center pt-8">Home</AnchorLink>
                        <AnchorLink href="#skills" onClick={toggleMenu} className="border-b-2 border-black flex items-center pt-8">Skills</AnchorLink>
                        <AnchorLink href="#projects" onClick={toggleMenu} className="border-b-2 border-black flex items-center pt-8">Projects</AnchorLink>
                        <AnchorLink href="#interests" onClick={toggleMenu} className="border-b-2 border-black flex items-center pt-8">Interests</AnchorLink>
                        <AnchorLink href="#contact" onClick={toggleMenu} className="border-b-2 border-black flex items-center pt-8">Contact</AnchorLink>
                    </div>
                    
                </div>
                
            </nav>

            {/* Signature Image */}
            <img src={signatureImage} alt="Signature: Jackson Kary" className={ `xs:block fixed top-0 ml-vw-2 xs:ml-vw-4 md:ml-vw-6 md+:ml-vw-8 lg:ml-vw-11 xl:ml-vw-15 mt-0.5 lg:mt-1 max-w-max max-h-max transition-all duration-150 ${isOpaque ? 'h-11 lg:h-14 ml-vw-2 xs:ml-vw-4 xl:ml-vw-8' : 'h-14 xs:h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 md:mt-52 lg:mt-56'} z-50` } />
        
        </div>
        
    );
};
  
export default Header;