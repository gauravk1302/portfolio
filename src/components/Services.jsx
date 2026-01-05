import React, { useEffect, useState } from "react";
import { FiLayout, FiCode, FiSmartphone, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Services() {
  const text = "My Services";
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
    <section className="min-h-[80vh] px-6 py-20">
      <motion.div
        className="w-full text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 18 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              {displayText}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I help build clean, responsive and modern web applications focused
              on performance, usability and real-world needs.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-purple-600 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* SERVICES GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
            <div className="p-6 rounded-2xl border border-gray-200 hover:border-purple-600 transition">
              <FiLayout className="text-purple-600 mb-4" size={26} />
              <h3 className="font-semibold text-black mb-2">
                Frontend Development
              </h3>
              <p className="text-sm text-gray-600">
                Building clean, responsive and interactive user interfaces using
                React, Tailwind CSS and modern JavaScript.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 hover:border-purple-600 transition">
              <FiCode className="text-purple-600 mb-4" size={26} />
              <h3 className="font-semibold text-black mb-2">
                Full Stack Basics
              </h3>
              <p className="text-sm text-gray-600">
                Working with APIs, backend logic understanding and integrating
                frontend with server-side functionality.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 hover:border-purple-600 transition">
              <FiSmartphone className="text-purple-600 mb-4" size={26} />
              <h3 className="font-semibold text-black mb-2">
                Responsive Design
              </h3>
              <p className="text-sm text-gray-600">
                Mobile-first layouts that look great on all screen sizes with
                smooth user experience.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 hover:border-purple-600 transition">
              <FiTrendingUp className="text-purple-600 mb-4" size={26} />
              <h3 className="font-semibold text-black mb-2">
                Performance & Optimization
              </h3>
              <p className="text-sm text-gray-600">
                Optimizing load times, code structure and UI performance.
              </p>
            </div>
          </div>

          {/* ADD-ON : LET'S WORK TOGETHER */}
          <div className="text-center p-12 md:p-16 rounded-3xl border border-gray-200 hover:border-purple-600 transition">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Let’s Work Together
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
              Have a project in mind or want to collaborate? I’m always open to
              discussing ideas and building something meaningful.
            </p>

            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-full
                       bg-black text-white
                       hover:bg-purple-600 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
