import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  const fullText = "Contact Me";
  const [displayText, setDisplayText] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(timer);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Something went wrong!");
      });
  }

  return (
    <section className="min-h-[80vh] px-6 py-20">
      <motion.div
        className="w-full text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 18 }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              {displayText}
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Have a project in mind or just want to say hi? Fill the form below
              and I’ll get back to you.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-purple-600 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-300
                         focus:outline-none focus:border-purple-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-300
                         focus:outline-none focus:border-purple-600"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-300
                         focus:outline-none focus:border-purple-600"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-full
                         bg-black text-white
                         hover:bg-purple-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
