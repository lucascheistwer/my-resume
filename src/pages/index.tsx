"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Calendar, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Curriculum() {
  const [activeSection, setActiveSection] = useState("about");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const skills = [
    "React.js",
    "Node.js",
    "Serverless",
    "Ruby on Rails",
    "Java",
    "Relational DBs",
    "Non Relational DBs",
    "Kubernetes",
    "DevOps & Infra Automation",
  ];

  const jobExperience = [
    {
      company: "ZERF Tech",
      companyUrl: "https://zerf.tech",
      position: "Full Stack Software Engineer",
      startDate: "Feb 2023",
      endDate: "Present",
      isCurrent: true,
      description:
        "Contributed to over six projects for diverse clients, ranging from backend development for Papa John's (Ruby on Rails) to frontend development for Sandals (Next.js). Also managed infrastructure across multiple projects, overseeing and monitoring Kubernetes clusters, creating and maintaining development and production environments, and implementing new tools to improve internal processes.",
    },
    {
      company: "Newfold Digital",
      companyUrl: "https://newfold.com",
      position: "Java Developer",
      startDate: "May 2022",
      endDate: "Feb 2023",
      isCurrent: false,
      description:
        "Worked as a Java Developer with Spring Boot, migrating a monolithic service to dedicated Kubernetes microservices.",
    },
    {
      company: "Deloitte",
      companyUrl: "https://deloitte.com",
      position: "Cybersecurity Consultant",
      startDate: "Jan 2021",
      endDate: "May 2022",
      isCurrent: false,
      description:
        "Served as a Cybersecurity Consultant, implementing RBAC (Role-Based Access Control) platforms for various clients to enhance internal security and improve role and access management.",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8 transition-colors duration-300 ${kanit.className}`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/profile-picture.jpg"
              alt="Lucas Cheistwer"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-4"
            />
            <h1 className={`text-4xl font-bold mb-2 ${kanit.className}`}>
              Lucas Cheistwer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Full Stack Software Engineer
            </p>
          </motion.div>
          <div className="flex justify-center mt-4 space-x-4">
            <Link
              href="https://github.com/lucascheistwer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/lucas-cheistwer-819b2a189/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:lucascheistwer@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </header>

        <nav className="mb-12">
          <ul className="flex justify-center space-x-4">
            {["about", "experience", "skills"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeSection === section
                      ? "bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  } ${kanit.className}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <AnimatePresence mode="wait">
          <motion.section
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
          >
            {activeSection === "about" && (
              <div>
                <h2 className={`text-2xl font-bold mb-4 ${kanit.className}`}>
                  About Me
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Results-driven Full Stack Engineer with a strong focus on
                  backend development, known for a proactive approach and a
                  passion for learning new technologies. Recognized for
                  strengths in communication, efficiency, and problem-solving.
                  Aspiring to lead projects in the future to further develop
                  both technical and leadership skills.
                </p>
              </div>
            )}

            {activeSection === "experience" && (
              <div>
                <h2 className={`text-2xl font-bold mb-6 ${kanit.className}`}>
                  Work Experience
                </h2>
                <div className="space-y-8">
                  {jobExperience.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative ${
                        job.isCurrent ? "border-l-4 border-green-500 pl-4" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Link
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-xl font-semibold hover:underline ${kanit.className}`}
                        >
                          {job.company}
                        </Link>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">
                            {job.startDate} - {job.endDate}
                          </span>
                        </div>
                      </div>
                      <p
                        className={`text-lg text-gray-700 dark:text-gray-300 mb-2 ${kanit.className}`}
                      >
                        {job.position}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {job.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "skills" && (
              <div>
                <h2 className={`text-2xl font-bold mb-6 ${kanit.className}`}>
                  Technical Skills
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
                    >
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
}
