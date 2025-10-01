'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const scrollToPreRegister = () => {
    const element = document.getElementById('preregister')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo animado con gradientes */}
      <div className="absolute inset-0 bg-gradient-taply">
        <div className="absolute top-20 left-10 w-96 h-96 bg-taply-blue/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-taply-lime/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Image 
              src="/taply.png" 
              alt="Taply Logo" 
              width={300} 
              height={100}
              className="w-auto h-24 md:h-32"
              priority
            />
          </motion.div>

          {/* Tagline principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl"
          >
            La tarjeta que{' '}
            <span className="text-gradient">conecta contigo</span>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl"
          >
            Tecnología, simplicidad y exclusividad en la palma de tu mano
          </motion.p>

          {/* Animación de tap/NFC */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12 relative"
          >
            <div className="relative w-64 h-64">
              {/* Ondas de señal NFC */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 border-4 border-taply-blue rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute inset-0 border-4 border-taply-lime rounded-full"
              />
              
              {/* Ícono central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-taply-blue rounded-full glow-blue flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={scrollToPreRegister}
            className="group relative px-12 py-5 bg-taply-blue text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:glow-blue"
          >
            <span className="relative z-10">Regístrate ahora</span>
            <div className="absolute inset-0 bg-gradient-to-r from-taply-blue to-taply-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-4 text-sm text-gray-400"
          >
            Sé de los primeros en experimentar Taply
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-taply-blue rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-taply-blue rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

