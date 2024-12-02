"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, Calendar, Briefcase } from "lucide-react";

export default function Curriculum() {
  const [activeSection, setActiveSection] = useState("about");
  const [selectedSkill, setSelectedSkill] = useState("");

  const skills = [
    { name: "React.js", color: "bg-blue-400" },
    { name: "Node.js", color: "bg-green-400" },
    { name: "Serverless", color: "bg-purple-300" },
    { name: "Ruby on Rails", color: "bg-red-500" },
    { name: "Java", color: "bg-orange-600" },
    { name: "Relational DBs", color: "bg-gray-400" },
    { name: "Non Relational DBs", color: "bg-green-500" },
    { name: "Kubernetes", color: "bg-blue-500" },
    { name: "DevOps & Infra Automation", color: "bg-yellow-500" },
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
        "Contributed to over six projects for diverse clients, ranging from backend development for Papa John's (Ruby on Rails) to frontend development for Sandals (Next.js). Also managed infrastructure across multiple projects, overseeing and monitoring Kubernetes clusters, creating and maintaining development and production environments, and implementing new tools to improve internal processes. Regularly recognized for adding great value to projects and delivering on time with high quality",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <motion.h1
            className="text-4xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Lucas Cheistwer
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full Stack Software Engineer
          </motion.p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="https://github.com/lucascheistwer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-cheistwer-819b2a189/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:lucascheistwer@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </header>

        <nav className="mb-12">
          <ul className="flex justify-center space-x-4">
            {["about", "skills", "job experience"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeSection === section
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <motion.section
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          {activeSection === "skills" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                {skills.map((skill) => (
                  <button
                    key={skill.name}
                    onClick={() => setSelectedSkill(skill.name)}
                    className={`
                      rounded-lg p-2 sm:p-3 text-center transition-all duration-300 ease-in-out
                      ${
                        selectedSkill === skill.name
                          ? `${skill.color} text-gray-800 shadow-lg transform scale-105`
                          : "bg-gray-700 hover:bg-gray-600 text-white"
                      }
                    `}
                  >
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                      {skill.name}
                    </h3>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeSection === "about" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
                Results-driven Full Stack Engineer with a strong focus on
                backend development, known for a proactive approach and a
                passion for learning new technologies. Recognized for strengths
                in communication, efficiency, and problem-solving. Aspiring to
                lead projects in the future to further develop both technical
                and leadership skills.
              </p>
            </div>
          )}

          {activeSection === "job experience" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Job Experience</h2>
              <div className="space-y-6">
                {jobExperience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${
                      job.isCurrent ? "border-l-4 border-blue-500" : ""
                    }`}
                  >
                    {job.isCurrent && (
                      <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                        Current
                      </span>
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <Briefcase
                          className={`w-5 h-5 mr-2 ${
                            job.isCurrent ? "text-blue-400" : "text-gray-400"
                          }`}
                        />
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-xl font-semibold ${
                            job.isCurrent ? "text-blue-400" : "text-white"
                          } hover:underline`}
                        >
                          {job.company}
                        </a>
                      </div>
                      <div
                        className={`flex items-center ${
                          job.isCurrent ? "text-blue-400" : "text-gray-400"
                        }`}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">
                          {job.startDate} - {job.endDate}
                        </span>
                      </div>
                    </div>
                    <p className="text-lg text-gray-300 mb-3">{job.position}</p>
                    <p className="text-sm text-gray-400">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.section>
      </div>
    </div>
  );
}
