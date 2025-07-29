"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useRef } from "react"
import { Code, Globe, Camera, Star, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-blue-400 to-indigo-500",
    skills: [
      {
        name: "C++",
        level: 80,
        color: "from-blue-500 to-blue-600",
        description: "Object-oriented programming, Data structures",
      },
      {
        name: "Java",
        level: 80,
        color: "from-orange-500 to-red-500",
        description: "Enterprise applications, Android development",
      },
      {
        name: "C#",
        level: 90,
        color: "from-indigo-500 to-violet-600",
        description: ".NET framework, Backend services, Desktop applications", // Updated description
      },
      {
        name: "Python",
        level: 80,
        color: "from-green-500 to-emerald-600",
        description: "Machine learning, Web scraping",
      },
      { name: "Database", level: 90, color: "from-yellow-500 to-orange-600", description: "MySQL, Database design" },
    ],
  },
  {
    title: "Web & Mobile Development",
    icon: Globe,
    color: "from-teal-400 to-blue-500",
    skills: [
      { name: "HTML", level: 90, color: "from-red-500 to-red-600", description: "Semantic markup, Accessibility" },
      { name: "CSS", level: 70, color: "from-blue-500 to-cyan-600", description: "Responsive design, Animations" },
      {
        name: "React",
        level: 90,
        color: "from-cyan-500 to-blue-600",
        description: "Component architecture, State management",
      },
      {
        name: "React Native",
        level: 95,
        color: "from-indigo-500 to-purple-600",
        description: "Cross-platform mobile apps",
      },
    ],
  },
  {
    title: "Creative & Marketing",
    icon: Camera,
    color: "from-slate-400 to-teal-500",
    skills: [
      {
        name: "Photography",
        level: 95,
        color: "from-pink-500 to-rose-600",
        description: "Portrait, Landscape, Commercial",
      },
      {
        name: "Video Editing",
        level: 95,
        color: "from-violet-500 to-purple-600",
        description: "Motion graphics, Color grading",
      },
      {
        name: "Digital Marketing",
        level: 95,
        color: "from-emerald-500 to-teal-600",
        description: "SEO, Social media campaigns",
      },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="skills" ref={containerRef} className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 4 === 0
                ? "bg-blue-400/20"
                : i % 4 === 1
                  ? "bg-teal-400/20"
                  : i % 4 === 2
                    ? "bg-indigo-400/20"
                    : "bg-slate-400/20"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Floating programming symbols */}
        {["{ }", "< />", "[ ]", "( )", "=>", "&&"].map((symbol, i) => (
          <motion.div
            key={symbol}
            className="absolute text-blue-400/10 text-2xl font-mono font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          <div className="relative inline-block">
            <motion.h2
              className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 z-10"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <span className="relative text-white">
                My Skills
                <motion.svg
                  viewBox="0 0 300 60"
                  className="absolute -bottom-3 left-0 w-full h-6 md:h-7 -z-10"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5,30 C50,10 100,40 150,25 C200,10 250,40 295,20"
                    stroke="url(#brush-gradient-skills)"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                    pathLength="1"
                    strokeDashoffset="0px"
                    strokeDasharray="1px 1px"
                  />
                  <defs>
                    <linearGradient id="brush-gradient-skills" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h2>
          </div>
          <motion.div
            className="absolute left-1/2 top-8 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl -translate-x-1/2 -z-20"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
           Proficient in programming, web and mobile app development, C# backend services, and database management, combining logic with creativity to build seamless digital solutions.
          </motion.p>
        </motion.div>

        {/* Enhanced Category Tabs */}
        <div className="flex flex-wrap justify-center mb-16 gap-4">
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeCategory === index
                  ? "text-white shadow-2xl"
                  : "text-gray-300 hover:text-white bg-slate-800/50 hover:bg-slate-700/50"
              }`}
            >
              {activeCategory === index && (
                <motion.div
                  layoutId="activeSkillTab"
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <category.icon
                size={24}
                className={`relative z-10 transition-transform group-hover:scale-110 ${
                  activeCategory === index ? "text-white" : "text-gray-400"
                }`}
              />
              <span className="relative z-10">{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Enhanced Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="max-w-6xl mx-auto"
          style={{ y }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm p-8 rounded-2xl hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300 border border-slate-600/30 hover:border-blue-400/50 overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h3>
                    <motion.span
                      className="text-2xl font-black bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent"
                      animate={{ scale: hoveredSkill === skill.name ? 1.2 : 1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">{skill.description}</p>

                  {/* Enhanced progress bar */}
                  <div className="relative">
                    <div className="w-full bg-slate-600/50 rounded-full h-4 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 2, delay: index * 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                      >
                        <motion.div
                          animate={{ x: ["0%", "100%"] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/3"
                        />
                      </motion.div>
                    </div>

                    {/* Skill level indicators */}
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Advanced</span>
                      <span>Expert</span>
                    </div>
                  </div>

                  {/* Skill rating stars */}
                  <div className="flex space-x-1 mt-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <motion.div
                        key={starIndex}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + starIndex * 0.1,
                          type: "spring",
                        }}
                        viewport={{ once: true }}
                      >
                        <Star
                          size={16}
                          className={`${
                            starIndex < Math.floor(skill.level / 20)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-600"
                          } transition-colors`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/20">
            <Terminal className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning, Always Growing</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly updating my skills and exploring new technologies
              to stay at the forefront of innovation in programming and digital creativity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
