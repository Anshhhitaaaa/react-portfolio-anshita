import logo from "../assets/anshitalogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
          <a 
            href="https://www.linkedin.com/in/anshita-agrawal-86a9632a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/Anshhhitaaaa" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub">  
            <FaGithub />
          </a>
          <a 
            href="https://www.instagram.com/anshhhhitaaa/profilecard/?igsh=b2hscDZub3lwbDR4" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram">
            <FaInstagram />
          </a>
          <a 
            href="mailto:your-agrawal.anshita07@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
    </nav> 
  )
};

export default Navbar;