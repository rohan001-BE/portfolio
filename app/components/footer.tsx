"use client"

import { motion } from "framer-motion"
import { Twitter, Facebook, Instagram, Linkedin, ArrowUp, Code, Palette, Camera } from "lucide-react"

const socialLinks = [
  { icon: Twitter, href: "https://x.com/heartshoneytea?mx=2", label: "Twitter", color: "hover:text-blue-400" },
  { icon: Facebook, href: "https://www.facebook.com/ch.ahad292", label: "Facebook", color: "hover:text-blue-600" },
  { icon: Instagram, href: "https://www.instagram.com/ig._.rohann/", label: "Instagram", color: "hover:text-pink-500" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rohan-bin-ejaz-514177317/",
    label: "LinkedIn",
    color: "hover:text-cyan-400",
  },
]

const services = [
  { icon: Code, label: "Web Development", description: "Modern, responsive websites" },
  { icon: Palette, label: "Digital Marketing", description: "Growth-driven campaigns" },
  { icon: Camera, label: "Photography", description: "Professional photo shoots" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,211,238,0.1),transparent_50%)] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)] opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-16 border-b border-slate-800"
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="relative inline-block">
                <motion.h3
                  className="relative text-4xl font-black mb-6 z-10"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
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
                        stroke="url(#brush-gradient-footer)"
                        strokeWidth="20"
                        strokeLinecap="round"
                        fill="none"
                        pathLength="1"
                        strokeDashoffset="0px"
                        strokeDasharray="1px 1px"
                      />
                      <defs>
                        <linearGradient id="brush-gradient-footer" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="50%" stopColor="#14b8a6" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </span>
                </motion.h3>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                Aspiring Computer Scientist with a passion for coding, web development, and digital content creation.
                Always eager to learn, innovate, and create impactful solutions.
              </p>

              {/* Services */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white mb-4">What I Do</h4>
                {services.map((service, index) => (
                  <motion.div
                    key={service.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors group cursor-pointer"
                  >
                    <service.icon size={20} className="group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="font-medium">{service.label}</span>
                      <span className="text-sm ml-2 opacity-75">{service.description}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                {[
                  { label: "About Me", href: "#about" },
                  { label: "My Skills", href: "#skills" },
                  { label: "Resume", href: "#resume" },
                  { label: "Portfolio", href: "#portfolio" },
                  { label: "Contact", href: "#contact" },
                ].map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="block text-gray-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="text-gray-400">
                  <p className="font-medium text-white mb-1">Location</p>
                  <p>Rawalpindi, Pakistan</p>
                </div>
                <div className="text-gray-400">
                  <p className="font-medium text-white mb-1">Email</p>
                  <p>honeybhai0990@gmail.com</p>
                </div>
                <div className="text-gray-400">
                  <p className="font-medium text-white mb-1">Phone</p>
                  <p>+92 343 5559340</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-12"
        >
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-white mb-4">Connect With Me</h4>
            <p className="text-gray-400">Let's stay connected across all platforms</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.3, rotate: 10, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`group w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 border border-slate-600 hover:border-cyan-400/50 ${social.color}`}
              >
                <social.icon size={24} className="transition-transform group-hover:scale-110" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-400 flex items-center"
            >
              © {new Date().getFullYear()}
              <span className="text-white font-semibold mx-2">Rohan Bin Ejaz</span>
              All Rights Reserved.
            </motion.p>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <ArrowUp size={20} className="text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
