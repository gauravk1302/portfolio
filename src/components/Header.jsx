import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiBriefcase,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";

const navItems = [
  { name: "Home", path: "/", icon: <FiHome size={16} /> },
  { name: "About", path: "/about", icon: <FiUser size={16} /> },
  { name: "Projects", path: "/projects", icon: <FiFolder size={16} /> },
  { name: "Services", path: "/services", icon: <FiBriefcase size={16} /> },
  { name: "Contact", path: "/contact", icon: <FiMail size={16} /> },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        
        <h1 className="text-white font-bold text-lg">Gaurav</h1>

        
        <nav className="hidden md:block">
          <ul className="flex items-center gap-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-2 px-5 py-2 rounded-full
                    text-sm font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-purple-500 text-white"
                        : "text-gray-300 hover:text-purple-500 hover:bg-purple-500/10"
                    }
                    `
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

      
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

    
      {open && (
        <div className="md:hidden mt-4 px-6">
          <ul className="flex flex-col gap-3 bg-black">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                    block px-4 py-3 rounded-lg text-sm font-medium
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-purple-500 text-white"
                        : "text-gray-300 hover:text-purple-500 hover:bg-purple-500/10"
                    }
                    `
                  }
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
