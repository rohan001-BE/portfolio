"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Resume from "./components/resume"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Footer from "./components/footer"
import ParticleBackground from "./components/particle-background"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="bg-slate-950 text-white min-h-screen relative overflow-hidden">
      {/* Enhanced Progress Bar with masculine colors */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-teal-500 to-indigo-600 z-50 origin-left shadow-lg shadow-blue-500/50"
        style={{ scaleX }}
      />

      {/* Particle Background */}
      <ParticleBackground />

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
