"use client"

import type React from "react"
import { motion, useMotionValue } from "framer-motion"
import { useState, useRef } from "react"
import { MapPin, Phone, Mail, Send, MessageCircle, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    value: "Tulsa Road, Lalzar, Rawalpindi",
    description: "Visit me for coffee & collaboration",
    color: "from-red-500 to-pink-600",
  },
  {
    icon: Phone,
    title: "Call Me",
    value: "+92 343 5559340",
    description: "Available 9 AM - 6 PM (PKT)",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Mail,
    title: "Email Me",
    value: "honeybhai0990@gmail.com",
    description: "Response within 24 hours",
    color: "from-blue-500 to-cyan-600",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })
      mouseX.set(x)
      mouseY.set(y)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,211,238,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 3 === 0 ? "bg-cyan-400/40" : i % 3 === 1 ? "bg-violet-400/40" : "bg-fuchsia-400/40"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10" onMouseMove={handleMouseMove}>
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
                Let's Connect
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
                    stroke="url(#brush-gradient-contact)"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                    pathLength="1"
                    strokeDashoffset="0px"
                    strokeDasharray="1px 1px"
                  />
                  <defs>
                    <linearGradient id="brush-gradient-contact" x1="0%" y1="0%" x2="100%" y2="0%">
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
            initial={{ width: 0 }}
            whileInView={{ width: "300px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto rounded-full mb-8"
          />
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Ready to bring your ideas to life? Let's discuss projects, collaborations, or just connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <MessageCircle className="text-cyan-400 mr-3" size={32} />
                Get in Touch
              </h3>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group relative flex items-start space-x-6 p-8 mb-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl hover:from-slate-700/60 hover:to-slate-600/60 transition-all duration-300 border border-slate-600/30 hover:border-cyan-400/50 overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div
                    className={`relative z-10 p-4 bg-gradient-to-r ${info.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon size={28} className="text-white" />
                  </div>

                  <div className="relative z-10 flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-lg text-gray-300 mb-1 font-medium">{info.value}</p>
                    <p className="text-sm text-gray-400 flex items-center">
                      <Clock size={14} className="mr-2" />
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Map Placeholder */}
            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=Rawalpindi,Pakistan" // Replace with your actual Google Maps link from index.html
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300 h-64 flex items-center justify-center group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-center relative z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <MapPin size={64} className="text-cyan-400 mx-auto mb-4" />
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-2">Interactive Location</h4>
                <p className="text-gray-300">Rawalpindi, Pakistan</p>
                <p className="text-sm text-gray-400 mt-2">Click to view on maps</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 h-14 text-lg rounded-xl transition-all duration-300 hover:bg-slate-700/70"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 h-14 text-lg rounded-xl transition-all duration-300 hover:bg-slate-700/70"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 h-14 text-lg rounded-xl transition-all duration-300 hover:bg-slate-700/70"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-lg rounded-xl resize-none transition-all duration-300 hover:bg-slate-700/70"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 hover:from-cyan-600 hover:via-violet-600 hover:to-fuchsia-600 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/25 border-0 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-3">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-3">
                          <Send size={20} />
                          <span>Send Message</span>
                        </div>
                      )}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </Button>
                  </motion.div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle size={40} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
