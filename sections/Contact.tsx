"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaPaperPlane, FaGlobe } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMessage("");

    try {
      const response = await fetch("https://us-central1-madsdev404.cloudfunctions.net/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setResponseMessage(data.message);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      } else {
        setStatus("error");
        setResponseMessage(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setResponseMessage("Network error. Please try again later.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="ftco-section contact-section bg-white dark:bg-gray-800 ftco-no-pb py-16"
      id="contact-section"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center mb-5 pb-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-7/12 heading-section text-center animate-fade-in"
          >
            <span className="subheading text-lg font-semibold text-gray-500 dark:text-gray-400">
              Contact Me
            </span>
            <h2 className="mb-4 text-3xl font-bold">Have a Project?</h2>
            <p className="text-gray-500 dark:text-gray-400">
              I&#39;m always open to new opportunities, freelance work, or just
              a friendly chat about tech and ideas. Reach out anytime!
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-8/12 px-4 mb-8"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-700 p-8 md:p-10 rounded-lg shadow contact-form"
            >
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control w-full bg-white dark:bg-gray-600 p-3 border border-gray-300 rounded-md"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control w-full bg-white dark:bg-gray-600 p-3 border border-gray-300 rounded-md"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="w-full px-2 mb-4">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control w-full bg-white dark:bg-gray-600 p-3 border border-gray-300 rounded-md"
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>
                <div className="w-full px-2 mb-4">
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      cols={30}
                      rows={7}
                      className="form-control w-full bg-white dark:bg-gray-600 p-3 border border-gray-300 rounded-md"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-2 mb-4">
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white py-3 px-5 rounded-full cursor-pointer"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
                {responseMessage && (
                  <div
                    className={`w-full px-2 mt-4 text-center ${
                      status === "success" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {responseMessage}
                  </div>
                )}
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full md:w-4/12 pl-2 pt-10"
          >
            <div className="w-full">
              <div className="dbox w-full flex mb-10">
                <div className="icon flex items-center justify-center size-12 rounded-full bg-blue-500 text-white mr-4">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div className="flex items-center">
                  <p>
                    <span className="font-semibold">Address:</span>Jhenaidah,
                    Khulna, Bangladesh 🇧🇩
                  </p>
                </div>
              </div>
              <div className="dbox w-full flex mb-10">
                <div className="icon flex items-center justify-center size-12 rounded-full bg-blue-500 text-white mr-4">
                  <FaPhone className="text-xl" />
                </div>
                <div className="flex items-center">
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a href="tel://+8801734326573">+880 17343-26573</a>
                  </p>
                </div>
              </div>
              <div className="dbox w-full flex mb-10">
                <div className="icon flex items-center justify-center size-12 rounded-full bg-blue-500 text-white mr-4">
                  <FaPaperPlane className="text-xl" />
                </div>
                <div className="flex items-center">
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    <a href="mailto:abduss.sobhan28@gmail.com">
                      abduss.sobhan28@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="dbox w-full flex">
                <div className="icon flex items-center justify-center size-12 rounded-full bg-blue-500 text-white mr-4">
                  <FaGlobe className="text-xl" />
                </div>
                <div className="flex items-center">
                  <p>
                    <span className="font-semibold">Website</span>{" "}
                    <a target="_blank" href="https://madsdev404.web.app">
                      madsdev404.web.app
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
