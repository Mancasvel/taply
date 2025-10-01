'use client'

import { motion } from 'framer-motion'

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
          {/* Logo tipográfico */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="text-gradient">TAPLY</span>
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="h-1 bg-gradient-to-r from-taply-blue to-taply-lime mx-auto mt-2 rounded-full"
                style={{ width: '200px' }}
              />
            </div>
          </motion.div>

          {/* Main tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl"
          >
            The card that{' '}
            <span className="text-gradient">connects with you</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl"
          >
            Technology, simplicity and exclusivity in the palm of your hand
          </motion.p>

          {/* Animación de tap/NFC mejorada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="mb-16 relative"
          >
            <div className="relative w-72 h-72 mx-auto">
              {/* Ondas de señal NFC mejoradas */}
              <motion.div
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="absolute inset-0 border-3 border-taply-blue/60 rounded-full"
                style={{ top: '20%', left: '20%', right: '20%', bottom: '20%' }}
              />
              <motion.div
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.8
                }}
                className="absolute inset-0 border-3 border-taply-lime/50 rounded-full"
                style={{ top: '15%', left: '15%', right: '15%', bottom: '15%' }}
              />
              <motion.div
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.2, 0, 0.2],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 1.6
                }}
                className="absolute inset-0 border-3 border-taply-blue/30 rounded-full"
                style={{ top: '10%', left: '10%', right: '10%', bottom: '10%' }}
              />

              {/* Ícono central mejorado */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(0, 122, 255, 0)",
                      "0 0 40px rgba(0, 122, 255, 0.6)",
                      "0 0 0px rgba(0, 122, 255, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-28 h-28 bg-gradient-to-br from-taply-blue to-blue-600 rounded-full flex items-center justify-center relative overflow-hidden"
                >
                  {/* Efecto de pulso interno */}
                  <motion.div
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-taply-blue/50 rounded-full"
                  />

                  <motion.svg
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 0.95, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-14 h-14 text-white relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </motion.svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button mejorado */}
          <motion.button
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            onClick={scrollToPreRegister}
            className="group relative px-16 py-6 bg-gradient-to-r from-taply-blue to-blue-600 text-white text-xl font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-taply-blue/50 focus:outline-none focus:ring-4 focus:ring-taply-blue/30"
          >
            <motion.span
              className="relative z-10 flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register now
              <motion.svg
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.span>

            {/* Efectos de fondo mejorados */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-taply-lime to-taply-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Partículas elegantes */}
            <motion.div
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0"
            >
              <div className="absolute top-2 left-4 w-2 h-2 bg-taply-lime rounded-full"></div>
              <div className="absolute top-4 right-6 w-1 h-1 bg-taply-blue rounded-full"></div>
              <div className="absolute bottom-3 left-8 w-1.5 h-1.5 bg-taply-lime rounded-full"></div>
            </motion.div>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-4 text-sm text-gray-400"
          >
            Be among the first to experience Taply
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

