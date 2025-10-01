'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const benefits = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Exclusivity',
    description: 'Limited access to a premium experience designed for those who value the exceptional',
    color: 'from-taply-blue to-blue-600',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'NFC Technology',
    description: 'Connect instantly with a simple tap. The most advanced technology at your fingertips',
    color: 'from-taply-lime to-green-500',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Simplicity',
    description: 'Minimalist and functional design. An intuitive and hassle-free user experience',
    color: 'from-blue-500 to-taply-blue',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Personal Connection',
    description: 'Share your professional information in an elegant and memorable way at every encounter',
    color: 'from-purple-500 to-taply-blue',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
      </svg>
    ),
    title: 'Customizable',
    description: 'Adapt your card to your style and needs. Your digital identity, your way',
    color: 'from-taply-lime to-yellow-500',
  },
]

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-taply-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why choose <span className="text-gradient">Taply</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the advantages that make Taply the best choice for connecting
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative"
            >
              <div className="relative p-10 bg-gradient-to-br from-taply-gray-dark to-taply-gray-dark/50 rounded-3xl border border-gray-800/50 hover:border-taply-blue/50 transition-all duration-500 h-full backdrop-blur-sm">
                {/* Gradiente de fondo en hover mejorado */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-15 rounded-3xl transition-opacity duration-500`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.15 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Contenido */}
                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-5 bg-gradient-to-br ${benefit.color} rounded-2xl mb-8 text-white relative overflow-hidden`}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.6 }
                    }}
                  >
                    {/* Fondo animado del ícono */}
                    <motion.div
                      animate={{
                        background: [
                          `linear-gradient(45deg, ${benefit.color.includes('lime') ? '#A8FF60, #7CE54A' : '#007AFF, #0056CC'})`,
                          `linear-gradient(45deg, ${benefit.color.includes('lime') ? '#7CE54A, #A8FF60' : '#0056CC, #007AFF'})`,
                          `linear-gradient(45deg, ${benefit.color.includes('lime') ? '#A8FF60, #7CE54A' : '#007AFF, #0056CC'})`
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-2xl opacity-50"
                    />

                    <div className="relative z-10">
                      {benefit.icon}
                    </div>

                    {/* Partículas flotantes */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                      className="absolute -top-2 -right-2 w-3 h-3 bg-white/30 rounded-full"
                    />
                  </motion.div>

                  <motion.h3
                    className="text-2xl font-bold mb-5 group-hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {benefit.title}
                  </motion.h3>

                  <p className="text-gray-400 leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </div>

                {/* Efectos de brillo mejorados */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    animate={{
                      background: [
                        "radial-gradient(circle at 20% 80%, rgba(0, 122, 255, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 20%, rgba(168, 255, 96, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 80%, rgba(0, 122, 255, 0.1) 0%, transparent 50%)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-3xl"
                  />
                  <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-gradient-to-br from-taply-blue/10 to-transparent blur-3xl transform -translate-x-1/2"></div>
                </motion.div>

                {/* Indicador sutil de número */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-taply-blue/30 to-taply-lime/30 rounded-full flex items-center justify-center text-xs font-bold text-white/70">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

