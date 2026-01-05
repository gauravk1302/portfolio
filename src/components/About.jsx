"use client";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import {
  FiCode,
  FiLayers,
  FiZap,
  FiTool,
  FiDatabase,
  FiGlobe,
} from "react-icons/fi";

export default function About() {
  const text = "About Me";
  const [displayText, setDisplayText] = React.useState("");

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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-900 mb-6 animate-in fade-in duration-700 hover:scale-105 transition-all">
              {displayText}
              <span className="text-purple-600 animate-pulse"></span>
            </h1>

            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-purple-600 to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 mb-20">
            <div className="lg:col-span-3 bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="text-gray-700 space-y-3">
                <p className="text-xl font-semibold">
                  Hi, I'm{" "}
                  <span className="font-bold text-purple-600 text-2xl">
                    Gaurav
                  </span>{" "}
                  👋
                </p>

                <p className="text-lg">
                  A passionate full-stack developer with a strong foundation in
                  building modern, scalable web applications that users love.
                </p>

                <div className="pl-4 border-l-4 border-purple-600 bg-purple-50/50 p-4 rounded-r-xl">
                  <p className="text-base">
                    I specialize in{" "}
                    <strong className="text-purple-600">React.js</strong>,{" "}
                    <strong className="text-purple-600">Next.js</strong>, and{" "}
                    <strong className="text-purple-600">Tailwind CSS</strong>{" "}
                    for creating beautiful, responsive frontends. On the
                    backend, I work with{" "}
                    <strong className="text-purple-600">Node.js</strong>,{" "}
                    <strong className="text-purple-600">Express</strong>, and
                    databases like{" "}
                    <strong className="text-purple-600">MongoDB</strong>.
                  </p>
                </div>

                <p>
                  I'm constantly learning and exploring new technologies.
                  Recently, I've been diving deeper into{" "}
                  <strong className="text-gray-900">TypeScript</strong>,{" "}
                  <strong className="text-gray-900">RESTful APIs</strong>, and
                  modern deployment practices with tools like{" "}
                  <strong className="text-gray-900">Vercel</strong> and{" "}
                  <strong className="text-gray-900">Docker</strong>.
                </p>

                <p className="text-base italic text-gray-600">
                  Beyond coding, I enjoy solving algorithmic problems,
                  contributing to open-source projects, and building real-world
                  applications that make a meaningful impact.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="group p-6 rounded-3xl bg-gradient-to-br from-purple-600 to-purple-700 text-white hover:scale-105 transition-all duration-300 shadow-xl">
                <FiCode
                  className="mb-3 group-hover:rotate-12 transition-transform duration-300"
                  size={32}
                />
                <h3 className="font-bold mb-2 text-xl">Clean Architecture</h3>
                <p className="text-sm text-purple-100">
                  Writing maintainable, scalable code following industry best
                  practices and design patterns.
                </p>
              </div>

              <div className="group p-6 rounded-3xl bg-white border-2 border-purple-200 hover:border-purple-600 hover:shadow-2xl transition-all duration-300">
                <FiLayers
                  className="text-purple-600 mb-3 group-hover:scale-110 transition-transform duration-300"
                  size={32}
                />
                <h3 className="font-bold text-gray-900 mb-2 text-xl">
                  Modern Tech Stack
                </h3>
                <p className="text-sm text-gray-600">
                  React, Next.js, TypeScript, Tailwind CSS, Node.js, Express,
                  MongoDB, PostgreSQL.
                </p>
              </div>

              <div className="group p-6 rounded-3xl bg-gradient-to-br from-black to-gray-900 text-white hover:scale-105 transition-all duration-300 shadow-xl">
                <FiZap
                  className="mb-3 group-hover:rotate-12 transition-transform duration-300"
                  size={32}
                />
                <h3 className="font-bold mb-2 text-xl">Performance First</h3>
                <p className="text-sm text-gray-200">
                  Optimizing applications for speed, accessibility, and seamless
                  user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-purple-600/10 to-purple-600/5 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-purple-100 p-12 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
                Technical{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                  Expertise
                </span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 hover:border-purple-600 hover:shadow-xl transition-all duration-300">
                  <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FiGlobe className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 text-xl">
                    Frontend
                  </h3>

                  <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside text-left">
                    <li>React.js & Next.js</li>
                    <li>JavaScript & TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Redux & Context API</li>
                    <li>Responsive UI</li>
                  </ul>
                </div>

                <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 hover:border-purple-600 hover:shadow-xl transition-all duration-300">
                  <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FiDatabase className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 text-xl">
                    Backend
                  </h3>

                  <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside text-left">
                    <li>Node.js & Express.js</li>
                    <li>RESTful API</li>
                    <li>MongoDB</li>
                    <li>Authorization</li>
                    <li>API Validation</li>
                  </ul>
                </div>

                <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 hover:border-purple-600 hover:shadow-xl transition-all duration-300">
                  <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FiTool className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 text-xl">
                    Tools & Practices
                  </h3>

                  <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside text-left">
                    <li>Git & GitHub</li>
                    <li>Vercel Deployment</li>
                    <li>Docker Deployment</li>
                    <li>Clean Code Practices</li>
                    <li>Debugging </li>
                    <li>UI/UX Design Principles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 relative">
            <div
              className="relative text-center p-12 rounded-3xl bg-white border border-purple-200 shadow-xl 
                  transition-all duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Let's Build Something Amazing
              </h3>

              <p className="text-purple-500 text-lg mb-8 max-w-2xl mx-auto transition-colors duration-500 ease-in-out">
                I'm always excited to collaborate on interesting projects and
                explore new opportunities. Feel free to reach out!
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className="h-1 w-16 bg-black rounded-full transition-all duration-500 ease-in-out hover:w-20"></div>
                <div className="h-2 w-2 bg-black rounded-full"></div>
                <div className="h-1 w-16 bg-black rounded-full transition-all duration-500 ease-in-out hover:w-20"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
