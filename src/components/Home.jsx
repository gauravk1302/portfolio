import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const text = "Full Stack Developer";
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
    <section className="min-h-[80vh] flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        <motion.div
          className="w-full text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 18,
          }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I’m{" "}
            <span className="text-purple-600 hover:-translate-y-1 inline-block transition">
              Gaurav
            </span>
            <br />
            <span>
              {displayText}
              
            </span>
          </h1>

          <p className="text-gray-600 max-w-lg mb-10">
            I build clean, modern and responsive web applications using React,
            Tailwind CSS and JavaScript.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="px-6 py-3 rounded-full bg-black text-white text-sm hover:bg-purple-600 transition"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-full border border-gray-300 text-sm text-gray-700 hover:border-purple-600 hover:text-purple-600 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="w-full flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/img.png"
            alt="Developer"
            className="w-64 md:w-96 mix-blend-multiply"
          />
        </motion.div>
      </div>
    </section>
  );
}
