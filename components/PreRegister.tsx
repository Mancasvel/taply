'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function PreRegister() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/preregister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('¡Registro exitoso! Te contactaremos pronto.')
        setFormData({ name: '', email: '', phone: '' })
      } else {
        setStatus('error')
        setMessage(data.error || 'Hubo un error. Por favor, intenta de nuevo.')
      }
    } catch {
      setStatus('error')
      setMessage('Error de conexión. Por favor, intenta de nuevo.')
    }

    setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="preregister" ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-taply-dark via-taply-gray-dark to-taply-dark"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-taply-blue/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Únete a la <span className="text-gradient">revolución</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Regístrate y sé de los primeros en experimentar Taply
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="bg-gradient-to-br from-taply-gray-dark to-taply-gray-dark/80 border border-gray-800/50 rounded-3xl p-12 md:p-16 relative overflow-hidden backdrop-blur-sm shadow-2xl"
        >
          {/* Efectos de brillo elegantes */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-taply-blue/10 to-taply-blue/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-taply-lime/10 to-taply-lime/5 rounded-full blur-3xl"
          />

          {/* Partículas flotantes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 right-10 w-3 h-3 bg-taply-blue/40 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-12 left-12 w-2 h-2 bg-taply-lime/50 rounded-full"
          />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            {/* Nombre */}
            <motion.div
              className="group"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.label
                htmlFor="name"
                className="block text-sm font-semibold mb-3 text-gray-300 group-focus-within:text-taply-blue transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                Nombre completo *
              </motion.label>
              <motion.input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-8 py-5 bg-gradient-to-r from-taply-dark to-taply-dark/80 border border-gray-700/60 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-taply-blue focus:ring-2 focus:ring-taply-blue/30 transition-all duration-500 hover:border-gray-600 focus:bg-taply-dark"
                placeholder="Juan Pérez"
                whileFocus={{
                  scale: 1.02,
                  borderColor: "#007AFF",
                  boxShadow: "0 0 0 3px rgba(0, 122, 255, 0.1)"
                }}
              />
            </motion.div>

            {/* Email */}
            <motion.div
              className="group"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.label
                htmlFor="email"
                className="block text-sm font-semibold mb-3 text-gray-300 group-focus-within:text-taply-blue transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                Correo electrónico *
              </motion.label>
              <motion.input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-8 py-5 bg-gradient-to-r from-taply-dark to-taply-dark/80 border border-gray-700/60 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-taply-blue focus:ring-2 focus:ring-taply-blue/30 transition-all duration-500 hover:border-gray-600 focus:bg-taply-dark"
                placeholder="juan@ejemplo.com"
                whileFocus={{
                  scale: 1.02,
                  borderColor: "#007AFF",
                  boxShadow: "0 0 0 3px rgba(0, 122, 255, 0.1)"
                }}
              />
            </motion.div>

            {/* Teléfono */}
            <motion.div
              className="group"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.label
                htmlFor="phone"
                className="block text-sm font-semibold mb-3 text-gray-300 group-focus-within:text-taply-blue transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                Teléfono (opcional)
              </motion.label>
              <motion.input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-8 py-5 bg-gradient-to-r from-taply-dark to-taply-dark/80 border border-gray-700/60 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-taply-blue focus:ring-2 focus:ring-taply-blue/30 transition-all duration-500 hover:border-gray-600 focus:bg-taply-dark"
                placeholder="+34 612 345 678"
                whileFocus={{
                  scale: 1.02,
                  borderColor: "#007AFF",
                  boxShadow: "0 0 0 3px rgba(0, 122, 255, 0.1)"
                }}
              />
            </motion.div>

            {/* Mensaje de estado */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl ${
                  status === 'success' 
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                    : 'bg-red-500/20 border border-red-500/50 text-red-400'
                }`}
              >
                {message}
              </motion.div>
            )}

            {/* Botón de envío mejorado */}
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              className="group relative w-full px-10 py-6 bg-gradient-to-r from-taply-blue to-blue-600 text-white text-xl font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-taply-blue/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-4 focus:ring-taply-blue/30"
              whileHover={{
                scale: status === 'loading' ? 1 : 1.05,
                boxShadow: status === 'loading' ? "none" : "0 20px 40px rgba(0, 122, 255, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {status === 'loading' ? (
                  <>
                    <motion.svg
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </motion.svg>
                    <span className="animate-pulse">Registrando...</span>
                  </>
                ) : (
                  <>
                    Quiero mi Taply
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
                  </>
                )}
              </span>

              {/* Efectos de fondo mejorados */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-taply-lime to-taply-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Partículas sutiles */}
              <motion.div
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4,
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

            <p className="text-center text-sm text-gray-500">
              Al registrarte, aceptas recibir información sobre Taply
            </p>
          </form>
        </motion.div>

        {/* Stats o badges mejorados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: "100%", label: "Seguro y privado", color: "from-taply-blue to-blue-600" },
            { number: "24/7", label: "Soporte disponible", color: "from-taply-lime to-green-500" },
            { number: "∞", label: "Conexiones ilimitadas", color: "from-taply-blue to-purple-600" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-taply-gray-dark/60 to-taply-gray-dark/30 rounded-3xl border border-gray-800/40 hover:border-taply-blue/40 transition-all duration-500 backdrop-blur-sm">
                {/* Gradiente de fondo en hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                />

                <div className="relative z-10 text-center">
                  <motion.div
                    className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>

                {/* Efecto de brillo */}
                <motion.div
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl blur-xl`}
                />

                {/* Indicador elegante */}
                <div className={`absolute top-3 right-3 w-5 h-5 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center text-xs font-bold text-white`}>
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

