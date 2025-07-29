"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Award, Heart } from "lucide-react"

const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    period: "2021 - Present",
    institution: "National University of Modern Languages (NUML), Rawalpindi",
    description: "Currently in Semester 7 with a cumulative GPA of 3.76.",
  },
  {
    degree: "Intermediate (ICS)",
    period: "2019 - 2021",
    institution: "Modern College of Commerce and Sciences, Rawalpindi",
    description: "",
  },
  {
    degree: "Matriculation",
    period: "2017 - 2019",
    institution: "Standard English School and Girls College, Rawalpindi",
    description: "",
  },
]

const experience = [
  {
    title: "AI Research Lab Intern",
    period: "2024",
    company: "Military College of Signals (MCS), Rawalpindi",
    description: [
      "Contributed to research and development in machine learning algorithms.",
      "Worked on real-world AI projects and assisted in data preprocessing and model evaluation.",
    ],
  },
  {
    title: "President",
    period: "Present",
    company: "NUML Computing Society Rawalpindi (NCSR)",
    description: [
      "Organizing workshops, coding events, and tech meetups.",
      "Managing collaborations with external tech partners.",
    ],
  },
  {
    title: "PR Head",
    period: "2020 – Present",
    company: "Team RISE",
    description: [
      "Led PR efforts and coordinated multiple events.",
      "Managed event logistics and external communications.",
    ],
  },
  {
    title: "Freelance Developer",
    period: "2022 - Present",
    company: "Self-employed",
    description: [
      "Built Java and C++ applications including desktop and console solutions.",
      "Developed responsive websites using HTML, CSS, JavaScript.",
      "Managed SEO and social media campaigns.",
    ],
  },
]

const certifications = [
  "React Development Course Certificate",
  "Digital Marketing Certificate",
  "React Native Course Certificate",
  "PR Head & Ambassador of Team RISE (Certified)",
  "Volunteer Certificate – Alkhidmat Foundation",

]

const interests = ["Gaming", "Cricket", "Table Tennis", "Book Reading"]

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            An ambitious and dedicated Computer Science student with a strong foundation in programming, web
            development, and digital marketing. Passionate about innovation, collaboration, and continuous learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <GraduationCap className="text-blue-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-700/30 p-6 rounded-xl hover:bg-gray-700/50 transition-colors"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                    <p className="text-blue-400 font-medium mb-2">{edu.period}</p>
                    <p className="text-gray-300 italic mb-2">{edu.institution}</p>
                    <p className="text-gray-400">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <Award className="text-blue-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-700/30 p-4 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <p className="text-gray-300">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <Briefcase className="text-blue-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-700/30 p-6 rounded-xl hover:bg-gray-700/50 transition-colors"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">{exp.title}</h4>
                    <p className="text-blue-400 font-medium mb-2">{exp.period}</p>
                    <p className="text-gray-300 italic mb-3">{exp.company}</p>
                    <ul className="space-y-1">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <Heart className="text-blue-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Hobbies & Interests</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
