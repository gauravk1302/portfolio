import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";

const navItems = [
  { name: "Home", path: "/", icon: <FiHome size={16} /> },
  { name: "About", path: "/about", icon: <FiUser size={16} /> },
  { name: "Projects", path: "/projects", icon: <FiFolder size={16} /> },
  { name: "Services", path: "/services", icon: <FiBriefcase size={16} /> },
  { name: "Contact", path: "/contact", icon: <FiMail size={16} /> },
];

export default function Header() {
  return (
    <header className="w-full py-6">
      <div className="max-w-6xl mx-auto flex justify-center px-6">

        <nav className="bg-gray-100 rounded-full px-4 py-4">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${
                      isActive
                        ? "bg-black text-white"
                        : "text-gray-600 hover:bg-black hover:text-white"
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

      </div>
    </header>
  );
}
