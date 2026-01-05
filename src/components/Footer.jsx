import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">

  
        <nav className="mb-6">
          <ul className="flex justify-center gap-6 text-sm">
            <li>
              <NavLink to="/" className="flex items-center gap-2 hover:text-purple-500 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="flex items-center gap-2 hover:text-purple-500 transition">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="flex items-center gap-2 hover:text-purple-500 transition">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="flex items-center gap-2 hover:text-purple-500 transition">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="flex items-center gap-2 hover:text-purple-500 transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

      
        <h2 className="text-lg font-semibold text-white mb-4">
          Gaurav
        </h2>

        
        <div className="flex justify-center gap-5 mb-6">
          <a href="https://github.com/gauravk1302" className="hover:text-purple-500 transition">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/gaurav-kumar-986016363/" className="hover:text-purple-500 transition">
            <FaLinkedin size={18} />
          </a>
          <a href="https://www.instagram.com/__gaurav_.saini/" className="hover:text-purple-500 transition">
            <FaInstagram size={18} />
          </a>
        </div>

    
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Gaurav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
