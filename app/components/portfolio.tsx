"use client"

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useState, useRef } from "react"
import { Eye, Github, Play, Award, X } from "lucide-react" // Added X for close button
import { Button } from "@/components/ui/button"
import { portfolioItems } from "./data/portfolio-items"
import { categories } from "./data/categories"

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null) // State for pop-up image
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  const featuredItems = filteredItems.filter((item) => item.featured)
  const regularItems = filteredItems.filter((item) => !item.featured)

  const openImagePopup = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeImagePopup = () => {
    setSelectedImage(null)
  }

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(20,184,166,0.15),transparent_50%)]" />

        {/* Floating code symbols */}
        {["{}", "[]", "</>", "&&", "||", "=>"].map((symbol, i) => (
          <motion.div
            key={symbol}
            className="absolute text-blue-400/10 text-4xl font-mono font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 10,
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
                My Portfolio
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
                    stroke="url(#brush-gradient-portfolio)"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                    pathLength="1"
                    strokeDashoffset="0px"
                    strokeDasharray="1px 1px"
                  />
                  <defs>
                    <linearGradient id="brush-gradient-portfolio" x1="0%" y1="0%" x2="100%" y2="0%">
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
            className="h-1 bg-gradient-to-r from-blue-400 to-teal-500 mx-auto rounded-full mb-8"
          />
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Explore my diverse range of programming projects, web development, digital marketing and creative work.
          </p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center mb-16 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? "text-white shadow-2xl shadow-blue-500/25"
                  : "text-gray-300 hover:text-white bg-slate-800/50 hover:bg-slate-700/50"
              }`}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activePortfolioTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <category.icon size={20} className="relative z-10" />
              <span className="relative z-10">{category.label}</span>
              <span className="relative z-10 bg-white/20 text-white text-sm px-2 py-1 rounded-full">
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Featured Projects Section */}
        {featuredItems.length > 0 && (
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8 flex items-center"
            >
              <Award className="text-yellow-400 mr-3" size={32} />
              Featured Projects
            </motion.h3>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 border border-slate-600/30 hover:border-blue-400/50"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{ y }}
                >
                  <div
                    className="relative h-80 overflow-hidden cursor-pointer"
                    onClick={() => openImagePopup(item.image)}
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Category icon overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-500/80 to-teal-500/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <item.icon size={20} className="text-white" />
                    </div>

                    {/* Enhanced overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-center"
                    >
                      <div className="flex space-x-4">
                        {item.demo && (
                          <motion.button
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-14 h-14 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                          >
                            <Play size={20} fill="white" />
                          </motion.button>
                        )}
                        {item.github && (
                          <motion.button
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-14 h-14 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-teal-500/50 transition-all"
                          >
                            <Github size={20} />
                          </motion.button>
                        )}
                        <motion.button
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-slate-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                        >
                          <Eye size={20} />
                        </motion.button>
                      </div>
                    </motion.div>

                    {/* Award badge */}
                    {item.award && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                        <Award size={14} />
                        <span>{item.award}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          className="px-3 py-1 bg-gradient-to-r from-slate-700 to-slate-600 text-blue-400 text-sm rounded-full border border-blue-400/30 hover:border-blue-400/60 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects Grid with staggered animations */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {regularItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: -15 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50, rotateX: 15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 border border-slate-600/30 hover:border-blue-400/50"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{ y: -10 }}
              >
                <div
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={() => openImagePopup(item.image)}
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Category icon */}
                  <div className="absolute top-3 right-3 w-10 h-10 bg-gradient-to-r from-blue-500/80 to-teal-500/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <item.icon size={16} className="text-white" />
                  </div>

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center"
                  >
                    <div className="flex space-x-3">
                      {item.demo && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                        >
                          <Play size={16} fill="white" />
                        </motion.button>
                      )}
                      {item.github && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                        >
                          <Github size={16} />
                        </motion.button>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                      >
                        <Eye size={16} />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Award badge */}
                  {item.award && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <Award size={12} />
                      <span>{item.award}</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-slate-700 text-blue-400 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700 text-gray-400 text-xs rounded-full">
                        +{item.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-600 hover:from-blue-600 hover:via-teal-600 hover:to-indigo-700 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/25 border-0 transition-all duration-300"
            onClick={() => {
              setActiveCategory("all")
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <span className="relative z-10">View All Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </Button>
        </motion.div>
      </div>

      {/* Image Pop-up Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeImagePopup}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-auto bg-slate-900 rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
            >
              <button
                onClick={closeImagePopup}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                aria-label="Close image"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Full size project image"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
