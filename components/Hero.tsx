import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram, FaDownload } from "react-icons/fa6";
import TypingSVG from "./TypingSVG";

function Hero() {
    return (
        <div className='flex gap-5 items-center justify-between mt-12 h-[calc(100vh-100px)]'>
            <div className='text-green-400 w-1/2 flex flex-col gap-2'>
                <p>Hello there, My name is</p>
                <TypingSVG />
                <h2>FrontEnd Web Developer</h2>
                <p className='text-xl text-slate-400'>
                    Crafting Exceptional User Experiences <br />
                    with REACT, TailwindCSS, TypeScript <br /> Web Design
                    Enthusiast
                </p>
                <div className='flex gap-3'>
                    <FaLinkedin size={30} />
                    <FaGithub size={30} />
                    <FaInstagram size={30} />
                </div>

                <button className='px-4 py-2 shadow-sm shadow-black bg-slate-400 text-white w-1/2 mt-3 transition hover:bg-green-400 hover:text-black uppercase'>
                    View Projects
                </button>
                <button className='flex gap-2 items-center justify-center px-4 py-2 shadow-sm border shadow-black  text-white w-1/2 mt-3 transition hover:bg-green-400 hover:text-black hover:border-transparent uppercase'>
                    <span>Download Resume</span> <FaDownload />
                </button>
            </div>
            <div>
                <Image
                    src='/developer.svg'
                    alt='SVG Illustartion of someone programming'
                    width={500}
                    height={200}
                />
            </div>
        </div>
    );
}

export default Hero;
