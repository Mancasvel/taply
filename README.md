# Taply - Landing Page de Prerregistro

![Taply Logo](public/taply.png)

## 🎯 Descripción

Landing page premium para Taply, la tarjeta inteligente con tecnología NFC que conecta a profesionales y creativos de manera innovadora. Esta aplicación está construida con Next.js 14, TypeScript, Tailwind CSS y conectada a MongoDB Atlas para gestionar prerregistros.

## ✨ Características

### Diseño y UX
- **Estética premium**: Fondo oscuro con acentos en azul eléctrico (#007AFF) y verde lima (#A8FF60)
- **Animaciones fluidas**: Microinteracciones con Framer Motion
- **Diseño responsivo**: Optimizado para todos los dispositivos
- **Tipografía moderna**: Montserrat (títulos) e Inter (cuerpo)

### Secciones
1. **Hero**: Logo, tagline, animación NFC y CTA principal
2. **Beneficios**: 5 características clave con iconografía minimalista
3. **Cómo funciona**: Proceso de 4 pasos con visualización interactiva
4. **Prerregistro**: Formulario conectado a MongoDB Atlas
5. **Footer**: Enlaces legales y redes sociales

### Funcionalidades técnicas
- **Prerregistro completo**: Validación de datos y almacenamiento en MongoDB
- **API Routes**: Endpoints seguros para manejo de datos
- **Validaciones**: Email, teléfono y campos requeridos
- **Feedback visual**: Mensajes de éxito/error en tiempo real
- **SEO optimizado**: Metadata y estructura semántica

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Cuenta de MongoDB Atlas

### 1. Instalar dependencias

\`\`\`bash
npm install
\`\`\`

### 2. Configurar MongoDB Atlas

1. Crea una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crea un nuevo cluster (el tier gratuito es suficiente)
3. Crea un usuario de base de datos con permisos de lectura/escritura
4. Obtén tu connection string (debería verse así: `mongodb+srv://usuario:password@cluster.mongodb.net/`)

### 3. Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

\`\`\`env
# MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority

# Database Name
MONGODB_DB=taply
\`\`\`

**Importante**: Reemplaza `<username>`, `<password>`, `<cluster>` y `<database>` con tus datos reales.

### 4. Ejecutar en desarrollo

\`\`\`bash
npm run dev
\`\`\`

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

\`\`\`
taply/
├── app/
│   ├── api/
│   │   └── preregister/
│   │       └── route.ts          # API endpoint para prerregistros
│   ├── globals.css               # Estilos globales y utilidades
│   ├── layout.tsx                # Layout principal con fuentes
│   └── page.tsx                  # Página principal
├── components/
│   ├── Hero.tsx                  # Sección hero con animaciones
│   ├── Benefits.tsx              # Beneficios de Taply
│   ├── HowItWorks.tsx           # Proceso de 4 pasos
│   ├── PreRegister.tsx          # Formulario de prerregistro
│   └── Footer.tsx               # Footer con enlaces y redes
├── lib/
│   ├── mongodb.ts               # Configuración de MongoDB
│   └── models/
│       └── PreRegister.ts       # Modelo y validaciones
├── public/
│   └── taply.png                # Logo de Taply
├── .env.local.example           # Ejemplo de variables de entorno
├── package.json
├── tailwind.config.ts           # Configuración de Tailwind
└── tsconfig.json
\`\`\`

## 🎨 Guía de Marca

### Colores
- **Azul eléctrico**: #007AFF (principal)
- **Verde lima**: #A8FF60 (acento)
- **Negro carbón**: #111111 (fondo)
- **Gris oscuro**: #1C1C1E (secundario)
- **Blanco**: #FFFFFF (texto)

### Tipografía
- **Montserrat Bold**: Logos y títulos
- **Inter**: Texto de cuerpo

### Principios de diseño
- Minimalista y tecnológico
- Animaciones sutiles y elegantes
- Microinteracciones en hover y tap
- Espacios amplios y jerarquía clara

## 🔧 Scripts Disponibles

\`\`\`bash
npm run dev      # Ejecuta el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run start    # Ejecuta la aplicación en modo producción
npm run lint     # Ejecuta el linter
\`\`\`

## 📊 API Endpoints

### POST /api/preregister
Registra un nuevo usuario en la lista de espera.

**Request body:**
\`\`\`json
{
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "phone": "+34 612 345 678" // opcional
}
\`\`\`

**Response (201):**
\`\`\`json
{
  "success": true,
  "message": "Prerregistro exitoso",
  "id": "..."
}
\`\`\`

**Response (400/409/500):**
\`\`\`json
{
  "error": "Mensaje de error"
}
\`\`\`

### GET /api/preregister
Obtiene estadísticas de prerregistros (proteger en producción).

**Response (200):**
\`\`\`json
{
  "totalPreregisters": 42
}
\`\`\`

## 🚀 Despliegue

### Vercel (Recomendado)

1. Haz push de tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Añade las variables de entorno en la configuración de Vercel
4. Despliega automáticamente

### Otras plataformas
- Netlify
- Railway
- Render
- DigitalOcean App Platform

**Importante**: No olvides configurar las variables de entorno en tu plataforma de hosting.

## 🔒 Seguridad

- Las variables de entorno nunca se commitean al repositorio
- Las validaciones de datos se hacen tanto en cliente como en servidor
- Los emails se almacenan en minúsculas para evitar duplicados
- El endpoint de estadísticas debe protegerse con autenticación en producción

## 🎯 Próximos Pasos

- [ ] Implementar sistema de autenticación para admin
- [ ] Dashboard para visualizar prerregistros
- [ ] Sistema de notificaciones por email
- [ ] A/B testing de CTAs
- [ ] Analytics y tracking de conversiones
- [ ] Sistema de referidos
- [ ] Integración con CRM

## 🤝 Contribuciones

Este es un proyecto privado de Taply. Para contribuir, contacta con el equipo de desarrollo.

## 📄 Licencia

© 2025 Taply. Todos los derechos reservados.

## 📞 Contacto

Para más información sobre Taply, visita nuestra landing page o contáctanos a través de nuestras redes sociales.

---

**Desarrollado con ❤️ para el profesional del futuro**

