"use client"

import { motion, useMotionValue } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Download,
  Code2,
  Camera,
  TrendingUp,
  ChevronDown,
  Terminal,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const socialLinks = [
  { icon: Twitter, href: "https://x.com/heartshoneytea?mx=2", label: "Twitter", color: "hover:text-blue-400" },
  { icon: Facebook, href: "https://www.facebook.com/ch.ahad292", label: "Facebook", color: "hover:text-blue-600" },
  { icon: Instagram, href: "https://www.instagram.com/ig._.rohann/", label: "Instagram", color: "hover:text-pink-500" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rohan-bin-ejaz-514177317/",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
]

const skillIcons = [
  { icon: Code2, label: "Development", delay: 0.5, color: "text-blue-400" },
  { icon: Camera, label: "Photography", delay: 0.9, color: "text-indigo-400" },
  { icon: TrendingUp, label: "Marketing", delay: 1.1, color: "text-slate-400" },
  { icon: Terminal, label: "Programming", delay: 1.3, color: "text-blue-500" },
  { icon: Cpu, label: "Tech", delay: 1.5, color: "text-teal-500" },
]

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
      mouseX.set(clientX)
      mouseY.set(clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Dynamic gradient background with masculine colors */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(59, 130, 246, 0.3) 0%, 
            rgba(20, 184, 166, 0.2) 25%, 
            rgba(79, 70, 229, 0.2) 50%, 
            rgba(30, 41, 59, 0.1) 75%, 
            transparent 100%)`,
        }}
      />

      {/* Floating orbs with masculine colors */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-40 h-40 rounded-full blur-xl ${
              i % 4 === 0
                ? "bg-gradient-to-r from-blue-500/20 to-indigo-600/20"
                : i % 4 === 1
                  ? "bg-gradient-to-r from-teal-500/20 to-blue-600/20"
                  : i % 4 === 2
                    ? "bg-gradient-to-r from-indigo-500/20 to-slate-600/20"
                    : "bg-gradient-to-r from-slate-500/20 to-blue-500/20"
            }`}
            style={{
              left: `${15 + i * 12}%`,
              top: `${15 + i * 8}%`,
            }}
            animate={{
              x: [0, 120, -120, 0],
              y: [0, -120, 120, 0],
              scale: [1, 1.3, 0.7, 1],
            }}
            transition={{
              duration: 18 + i * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center">
          {/* Enhanced Avatar with programming theme */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className="mb-8 relative"
          >
            <div className="relative w-72 h-72 mx-auto">
              {/* Multiple rotating rings with different speeds */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-6 rounded-full border-2 border-dashed border-teal-400/40"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-12 rounded-full border-2 border-dashed border-indigo-400/40"
              />

              {/* Avatar container */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-600 p-1 shadow-2xl shadow-blue-500/50">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  {/* Enhanced 3D Avatar */}
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 via-teal-500/20 to-indigo-500/20 rounded-full flex items-center justify-center">
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
                        src="/images/a (11).jpeg"
                        alt="Rohan Bin Ejaz Avatar"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating skill icons */}
              {skillIcons.map((skill, index) => {
                const angle = index * 60 * (Math.PI / 180)
                const radius = 140
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    className={`absolute w-14 h-14 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-full border border-blue-400/30 flex items-center justify-center`}
                    style={{
                      left: `calc(50% + ${x}px - 28px)`,
                      top: `calc(50% + ${y}px - 28px)`,
                    }}
                    whileHover={{ scale: 1.3, rotate: 180 }}
                    transition={{
                      delay: skill.delay,
                      duration: 3 + index * 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      type: "tween",
                    }}
                  >
                    <skill.icon size={24} className={skill.color} />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Fixed Name - Enhanced visibility with better contrast */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 relative whitespace-nowrap"
          >
            <div className="relative inline-block">
              <span className="relative text-white">
                Rohan Bin Ejaz
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
                    stroke="url(#brush-gradient-hero)"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                    pathLength="1"
                    strokeDashoffset="0px"
                    strokeDasharray="1px 1px"
                  />
                  <defs>
                    <linearGradient id="brush-gradient-hero" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </div>
          </motion.h1>

          {/* Enhanced typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-300"
          >
            <span className="text-gray-400">I'm a </span>
            <span className="font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Digital Marketer",
                  2000,
                  "Creative Photographer",
                  2000,
                  "Code Architect",
                  2000,
                  "Gamer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </span>
          </motion.div>

          {/* Enhanced description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Crafting digital experiences through code, creativity, and innovation. Passionate about programming, digital
            marketing, and building the future one line of code at a time.
          </motion.p>

          {/* Enhanced social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.3, rotate: 10, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`group w-14 h-14 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 border border-slate-700 hover:border-blue-400/50 ${social.color}`}
              >
                <social.icon size={24} className="transition-transform group-hover:scale-110" />
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-600 hover:from-blue-600 hover:via-teal-600 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/25 border-0 transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10">Let's Connect</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden border-2 border-blue-400 text-blue-400 hover:text-white px-8 py-4 rounded-2xl font-bold text-lg bg-transparent hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-teal-500/10 transition-all duration-300 shadow-lg shadow-blue-500/10"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1lJ2DOzE57_KRNtDfHEvsnGCpEXppP31R?usp=sharing",
                    "_blank",
                  )
                }
              >
                <Download className="mr-2 transition-transform group-hover:scale-110" size={20} />
                <span>Download Resume</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center space-y-2 text-blue-400"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
