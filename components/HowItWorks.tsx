'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Regístrate',
    description: 'Completa el formulario de prerregistro y únete a la lista de espera exclusiva',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Recibe tu Taply',
    description: 'Serás notificado cuando tu tarjeta esté lista. La recibirás directamente en tu domicilio',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Personaliza',
    description: 'Configura tu perfil digital y añade toda tu información de contacto y redes sociales',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Conecta',
    description: 'Comparte tu información con un simple tap. Networking reinventado',
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
            ¿Cómo <span className="text-gradient">funciona</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            En solo 4 pasos estarás listo para comenzar a conectar de una manera totalmente nueva
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea conectora (solo visible en desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-taply-blue via-taply-lime to-taply-blue opacity-30 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="relative group">
                  {/* Número de paso */}
                  <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-taply-blue/20 to-taply-lime/20 absolute -top-8 -left-4 pointer-events-none select-none">
                    {step.number}
                  </div>

                  {/* Card del paso */}
                  <div className="relative bg-taply-gray-dark border border-gray-800 rounded-2xl p-8 hover:border-taply-blue transition-all duration-300 group-hover:transform group-hover:scale-105">
                    {/* Icono */}
                    <div className="relative z-10 mb-6">
                      <div className="inline-flex p-4 bg-gradient-to-br from-taply-blue to-taply-lime rounded-xl text-white group-hover:animate-tap">
                        {step.icon}
                      </div>
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-taply-blue transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-400 relative z-10 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Brillo de fondo en hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-taply-blue/10 to-taply-lime/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Flecha conectora (solo visible en desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <svg className="w-8 h-8 text-taply-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg">
            ¿Listo para empezar? <a href="#preregister" className="text-taply-blue hover:text-taply-lime transition-colors duration-300 font-semibold underline">Regístrate ahora</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

