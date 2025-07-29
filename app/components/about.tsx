"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, MapPin, Phone, Mail, Globe, GraduationCap, Star, Zap, Gamepad2 } from "lucide-react"
import { useRef } from "react"

const personalInfo = [
  { icon: Calendar, label: "Birthday", value: "27 April 2002", color: "text-blue-400" },
  { icon: Globe, label: "Website", value: "https://solvxa.github.io/website/", color: "text-teal-400" },
  { icon: Phone, label: "Phone", value: "+92 343 5559340", color: "text-indigo-400" },
  { icon: MapPin, label: "City", value: "Rawalpindi, Pakistan", color: "text-slate-400" },
  { icon: Calendar, label: "Age", value: "23", color: "text-blue-500" },
  { icon: GraduationCap, label: "Degree", value: "BS Computer Science", color: "text-teal-500" },
  { icon: Mail, label: "Email", value: "honeybhai0990@gmail.com", color: "text-indigo-500" },
  { icon: Globe, label: "Freelance", value: "Available", color: "text-green-400" },
]

const achievements = [
  { number: "25+", label: "Projects Completed", icon: Star },
  { number: "3.76", label: "Current CGPA", icon: GraduationCap },
  { number: "5+", label: "Technologies Mastered", icon: Zap },
  { number: "100%", label: "Client Satisfaction", icon: Star },
]

const interests = [{ icon: Gamepad2, label: "Gaming", color: "text-teal-400" }]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)] opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_50%)] opacity-50" />

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          {/* Main heading with brush stroke highlight */}
          <div className="relative inline-block">
            <motion.h2
              className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 z-10"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <span className="relative text-white">
                About Me
                {/* Brush stroke highlight */}
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
                    stroke="url(#brush-gradient)"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                    pathLength="1"
                    strokeDashoffset="0px"
                    strokeDasharray="1px 1px"
                  />
                  <defs>
                    <linearGradient id="brush-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h2>
          </div>
          {/* Decorative elements */}
          <motion.div
            className="absolute left-1/2 top-8 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl -translate-x-1/2 -z-20"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Passionate Computer Science professional with expertise in full-stack development and digital marketing.
            Dedicated to creating innovative solutions and delivering exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <achievement.icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                {achievement.number}
              </div>
              <div className="text-sm text-gray-400 font-medium">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <motion.div style={{ y }} className="relative group">
            <div className="relative">
              {/* Floating geometric shapes around image */}
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-full blur-sm"
              />
              <motion.div
                animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-lg blur-sm"
              />

              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-700 p-8 group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 opacity-50" />

                {/* Enhanced Avatar representation */}
                <div className="relative w-full aspect-square bg-gradient-to-br from-blue-400/20 via-teal-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center">
                  <motion.div
                    animate={{
                      background: [
                        "linear-gradient(45deg, #3b82f6, #14b8a6)",
                        "linear-gradient(45deg, #14b8a6, #4f46e5)",
                        "linear-gradient(45deg, #4f46e5, #1e293b)",
                        "linear-gradient(45deg, #1e293b, #3b82f6)",
                      ],
                    }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                    className="w-24 h-24 rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/images/a (3).jpeg"
                      alt="Rohan Bin Ejaz Avatar"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
              </div>
            </div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div style={{ opacity }} className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6"
            >
              Developer & Digital Marketer
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed italic border-l-4 border-blue-400 pl-6 bg-gradient-to-r from-blue-500/5 to-transparent p-4 rounded-r-lg"
            >
              I am currently pursuing a BS in Computer Science at NUML, Rawalpindi, and have a solid grasp of various
              programming languages and web technologies. I also have experience in C# backend development, React Native
              mobile application development, and digital marketing campaigns.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300 border border-slate-600/30 hover:border-blue-400/30"
                >
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className={`${info.color} group-hover:scale-110 transition-transform`} size={20} />
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-400 text-sm font-medium block">{info.label}</span>
                    <span className="text-white font-semibold">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed bg-gradient-to-r from-teal-500/5 to-indigo-500/5 p-6 rounded-2xl border border-teal-500/20"
            >
              My expertise includes creating dynamic web applications, C# backend services, React Native mobile
              applications, video editing, and managing digital marketing strategies. I thrive in collaborative
              environments and am always eager to take on new challenges to expand my skill set and push the boundaries
              of what's possible in technology.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
