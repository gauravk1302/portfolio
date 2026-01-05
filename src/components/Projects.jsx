import React, { useEffect, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Projects() {
  const text = "Projects";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(timer);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-white via-purple-50/30 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="w-full text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, damping: 18 }}
        >
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              {displayText}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A collection of projects that highlight my skills and real-world
              experience.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-purple-600 to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">
              Working Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl border border-purple-200 p-6 shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Stack Overflow Clone
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  A full-stack Q&A platform with authentication, posting,
                  voting, and comments.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                    React
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                    Appwrite
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <a className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-300 ease-in-out">
                    <FiGithub /> Code
                  </a>
                </div>
              </div>

              {/* Portfolio Website */}
              <div className="bg-white rounded-3xl border border-purple-200 p-6 shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Portfolio Website
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Personal portfolio showcasing projects, skills and experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                    React
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <a className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-300 ease-in-out">
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center mb-10">
              Completed Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Amazon Clone */}
              <div className="bg-white rounded-3xl border border-purple-200 p-6 shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Amazon Clone
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  E-commerce web app with product listing, cart functionality,
                  authentication and checkout flow.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                    Javascript
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                    CSS
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                    HTML
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/gauravk1302/amazon-project-1.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-300 ease-in-out"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>

              {/* Authentication System */}
              <div className="bg-white rounded-3xl border border-purple-200 p-6 shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Authentication System
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Secure auth system with login, signup, email verification and
                  reset flow.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                    React
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                    Node.js
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                    MongoDB
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                    NextJS
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/gauravk1302/auth-nextjs.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-300 ease-in-out"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
