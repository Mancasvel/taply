'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Register',
    description: 'Complete the pre-registration form and join our exclusive waiting list',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Receive your Taply',
    description: 'You\'ll be notified when your card is ready. You\'ll receive it directly at your home',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Customize',
    description: 'Set up your digital profile and add all your contact information and social networks',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Connect',
    description: 'Share your information with a simple tap. Networking reinvented',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-taply-dark via-taply-gray-dark to-taply-dark">
      {/* Efectos de fondo */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-taply-lime/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient">it works</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            In just 4 steps you&apos;ll be ready to start connecting in a completely new way
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea conectora sutil (solo visible en desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="relative"
              >
                <div className="relative group">
                  {/* Número de paso elegante */}
                  <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-taply-blue/40 to-taply-lime/40 absolute -top-8 -left-4 pointer-events-none select-none">
                    {step.number}
                  </div>

                  {/* Card del paso mejorada */}
                  <motion.div
                    className="relative bg-gradient-to-br from-taply-gray-dark to-taply-gray-dark/80 border border-gray-800/60 rounded-3xl p-10 hover:border-taply-blue/60 transition-all duration-500 group-hover:transform group-hover:scale-105 backdrop-blur-sm"
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 20 }
                    }}
                  >
                    {/* Icono mejorado */}
                    <motion.div
                      className="relative z-10 mb-8"
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.6 }
                      }}
                    >
                      <div className="inline-flex p-6 bg-gradient-to-br from-taply-blue to-taply-lime rounded-2xl text-white relative overflow-hidden shadow-lg">
                        {/* Fondo animado */}
                        <motion.div
                          animate={{
                            background: [
                              "linear-gradient(45deg, #007AFF, #A8FF60)",
                              "linear-gradient(45deg, #A8FF60, #007AFF)",
                              "linear-gradient(45deg, #007AFF, #A8FF60)"
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute inset-0 opacity-30"
                        />

                        <div className="relative z-10">
                          {step.icon}
                        </div>

                        {/* Partícula flotante */}
                        <motion.div
                          animate={{
                            y: [0, -15, 0],
                            x: [0, 8, 0],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5
                          }}
                          className="absolute -top-3 -right-3 w-4 h-4 bg-white/40 rounded-full"
                        />
                      </div>
                    </motion.div>

                    {/* Título mejorado */}
                    <motion.h3
                      className="text-2xl font-bold mb-5 relative z-10 group-hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {step.title}
                    </motion.h3>

                    {/* Descripción mejorada */}
                    <p className="text-gray-400 relative z-10 leading-relaxed text-lg">
                      {step.description}
                    </p>

                    {/* Efectos de fondo mejorados */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-taply-blue/5 to-taply-lime/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ scale: 0.9 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Indicador de progreso sutil */}
                    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-taply-blue/50 to-taply-lime/50 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                         style={{ width: '100%' }} />
                  </motion.div>

                  {/* Flecha conectora mejorada (solo visible en desktop) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20"
                      animate={{
                        x: [0, 10, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      <motion.svg
                        className="w-10 h-10 text-taply-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            Ready to get started? <a href="#preregister" className="text-taply-blue hover:text-taply-lime transition-colors duration-300 font-semibold underline">Register now</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

