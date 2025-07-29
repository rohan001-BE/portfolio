"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Code2, Gamepad2, Terminal, Cpu, Database, Wifi } from "lucide-react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

const techIcons = [Code2, Gamepad2, Terminal, Cpu, Database, Wifi]

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const createParticles = () => {
      const newParticles: Particle[] = []
      for (let i = 0; i < 80; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.1,
        })
      }
      setParticles(newParticles)
    }

    createParticles()

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 to-teal-500"
          style={{
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            x: [particle.x, particle.x + particle.speedX * 100],
            y: [particle.y, particle.y + particle.speedY * 100],
          }}
          transition={{
            duration: Math.random() * 25 + 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}

      {/* Floating tech icons */}
      {[...Array(12)].map((_, i) => {
        const IconComponent = techIcons[i % techIcons.length]
        return (
          <motion.div
            key={`tech-${i}`}
            className={`absolute ${
              i % 4 === 0
                ? "text-blue-400/20"
                : i % 4 === 1
                  ? "text-teal-400/20"
                  : i % 4 === 2
                    ? "text-indigo-400/20"
                    : "text-slate-400/20"
            }`}
            style={{
              left: Math.random() * dimensions.width,
              top: Math.random() * dimensions.height,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <IconComponent size={24 + Math.random() * 16} />
          </motion.div>
        )
      })}

      {/* Floating geometric shapes with masculine colors */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className={`absolute ${
            i % 3 === 0
              ? "bg-gradient-to-r from-blue-500/10 to-indigo-600/10"
              : i % 3 === 1
                ? "bg-gradient-to-r from-teal-500/10 to-blue-600/10"
                : "bg-gradient-to-r from-indigo-500/10 to-slate-600/10"
          } ${
            i % 4 === 0
              ? "rounded-full"
              : i % 4 === 1
                ? "rounded-lg rotate-45"
                : i % 4 === 2
                  ? "rounded-full"
                  : "rounded-lg"
          }`}
          style={{
            width: Math.random() * 120 + 60,
            height: Math.random() * 120 + 60,
            left: Math.random() * dimensions.width,
            top: Math.random() * dimensions.height,
          }}
          animate={{
            y: [0, -80, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
