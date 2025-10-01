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
    } catch (error) {
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-taply-gray-dark border border-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Efectos de brillo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-taply-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-taply-lime/10 rounded-full blur-3xl"></div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            {/* Nombre */}
            <div className="group">
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300 group-focus-within:text-taply-blue transition-colors duration-300">
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-taply-dark border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-taply-blue focus:ring-2 focus:ring-taply-blue/50 transition-all duration-300"
                placeholder="Juan Pérez"
              />
            </div>

            {/* Email */}
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300 group-focus-within:text-taply-blue transition-colors duration-300">
                Correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-taply-dark border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-taply-blue focus:ring-2 focus:ring-taply-blue/50 transition-all duration-300"
                placeholder="juan@ejemplo.com"
              />
            </div>

            {/* Teléfono */}
            <div className="group">
              <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-300 group-focus-within:text-taply-blue transition-colors duration-300">
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-taply-dark border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-taply-blue focus:ring-2 focus:ring-taply-blue/50 transition-all duration-300"
                placeholder="+34 612 345 678"
              />
            </div>

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

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="group relative w-full px-8 py-5 bg-taply-blue text-white text-lg font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:glow-blue disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Registrando...
                  </>
                ) : (
                  'Quiero mi Taply'
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-taply-blue to-taply-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <p className="text-center text-sm text-gray-500">
              Al registrarte, aceptas recibir información sobre Taply
            </p>
          </form>
        </motion.div>

        {/* Stats o badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-taply-gray-dark/50 rounded-xl border border-gray-800">
            <div className="text-3xl font-bold text-taply-blue mb-2">100%</div>
            <div className="text-gray-400">Seguro y privado</div>
          </div>
          <div className="text-center p-6 bg-taply-gray-dark/50 rounded-xl border border-gray-800">
            <div className="text-3xl font-bold text-taply-lime mb-2">24/7</div>
            <div className="text-gray-400">Soporte disponible</div>
          </div>
          <div className="text-center p-6 bg-taply-gray-dark/50 rounded-xl border border-gray-800">
            <div className="text-3xl font-bold text-taply-blue mb-2">∞</div>
            <div className="text-gray-400">Conexiones ilimitadas</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

