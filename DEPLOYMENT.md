# Guía de Despliegue - Taply Landing Page

Esta guía te ayudará a desplegar la landing page de Taply en producción.

## 🚀 Opción 1: Desplegar en Vercel (Recomendado)

Vercel es la plataforma oficial de Next.js y ofrece el mejor rendimiento y experiencia de desarrollo.

### Prerrequisitos
- Cuenta de GitHub
- Cuenta de Vercel (gratis)
- MongoDB Atlas configurado (ver SETUP_MONGODB.md)

### Pasos

#### 1. Subir el código a GitHub

```bash
# Inicializar git (si no lo has hecho)
git init

# Añadir todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit - Taply landing page"

# Crear repositorio en GitHub y conectarlo
git remote add origin https://github.com/tu-usuario/taply-landing.git
git branch -M main
git push -u origin main
```

#### 2. Importar en Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub
2. Haz clic en "Add New..." → "Project"
3. Selecciona el repositorio `taply-landing`
4. Configura el proyecto:
   - Framework Preset: **Next.js** (detectado automáticamente)
   - Root Directory: `./` (dejar por defecto)
   - Build Command: `npm run build` (por defecto)
   - Output Directory: `.next` (por defecto)

#### 3. Configurar Variables de Entorno

En la sección "Environment Variables":

```
Name: MONGODB_URI
Value: mongodb+srv://tu-usuario:tu-password@cluster0.xxxxx.mongodb.net/taply?retryWrites=true&w=majority

Name: MONGODB_DB
Value: taply
```

**⚠️ IMPORTANTE**: Usa el connection string real de MongoDB Atlas.

#### 4. Desplegar

1. Haz clic en "Deploy"
2. Espera 2-3 minutos mientras se construye y despliega
3. ¡Listo! Tu sitio estará en `https://tu-proyecto.vercel.app`

#### 5. Configurar Dominio Personalizado (Opcional)

1. En el dashboard de Vercel, ve a Settings → Domains
2. Añade tu dominio (ej: `taply.com`)
3. Sigue las instrucciones para configurar los DNS
4. Vercel configurará automáticamente HTTPS con Let's Encrypt

### Actualizaciones Automáticas

Cada vez que hagas push a GitHub, Vercel desplegará automáticamente:

```bash
git add .
git commit -m "Actualización del diseño"
git push
```

---

## 🌊 Opción 2: Desplegar en Netlify

### Pasos

1. Ve a [netlify.com](https://netlify.com) e inicia sesión
2. Haz clic en "Add new site" → "Import an existing project"
3. Conecta con GitHub y selecciona el repositorio
4. Configura el build:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Base directory: (dejar vacío)
5. Variables de entorno:
   ```
   MONGODB_URI=tu_connection_string
   MONGODB_DB=taply
   ```
6. Haz clic en "Deploy site"

**Nota**: Netlify requiere un plugin adicional para Next.js:
```bash
npm install @netlify/plugin-nextjs
```

Crea `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 🚂 Opción 3: Desplegar en Railway

Railway es excelente si quieres una solución todo-en-uno con base de datos incluida.

### Pasos

1. Ve a [railway.app](https://railway.app) e inicia sesión con GitHub
2. Haz clic en "New Project"
3. Selecciona "Deploy from GitHub repo"
4. Selecciona tu repositorio `taply-landing`
5. Railway detectará automáticamente Next.js
6. Añade las variables de entorno:
   ```
   MONGODB_URI=tu_connection_string
   MONGODB_DB=taply
   ```
7. Haz clic en "Deploy"

### Ventajas de Railway
- Incluye base de datos PostgreSQL/MongoDB gratis
- $5 de crédito mensual gratis
- Logs en tiempo real
- Fácil escalabilidad

---

## 🐳 Opción 4: Docker + VPS

Para más control, puedes usar Docker en tu propio servidor.

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Dependencias
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose

```yaml
version: '3.8'
services:
  taply:
    build: .
    ports:
      - "3000:3000"
    environment:
      - MONGODB_URI=${MONGODB_URI}
      - MONGODB_DB=${MONGODB_DB}
    restart: unless-stopped
```

### Desplegar

```bash
# Construir
docker-compose build

# Ejecutar
docker-compose up -d
```

---

## 🔒 Seguridad en Producción

### 1. Actualizar IP Whitelist en MongoDB Atlas

Si usaste `0.0.0.0/0` durante el desarrollo, actualízalo:

1. Ve a MongoDB Atlas → Network Access
2. Elimina `0.0.0.0/0`
3. Añade las IPs de tu plataforma de hosting:
   - **Vercel**: No tiene IPs fijas, mantén `0.0.0.0/0` pero asegura el endpoint
   - **Railway**: Usa las IPs proporcionadas en el dashboard
   - **VPS**: Usa la IP estática de tu servidor

### 2. Proteger el Endpoint de Estadísticas

En `app/api/preregister/route.ts`, el endpoint GET debería protegerse:

```typescript
export async function GET(request: NextRequest) {
  // Verificar token de autenticación
  const token = request.headers.get('authorization')
  
  if (token !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }
  
  // ... resto del código
}
```

Añade en las variables de entorno:
```
ADMIN_TOKEN=tu_token_super_secreto_123456
```

### 3. Rate Limiting

Considera añadir rate limiting para prevenir spam:

```bash
npm install @vercel/edge-rate-limit
```

### 4. CORS (si tienes un frontend separado)

Si en el futuro separas el frontend:

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  response.headers.set('Access-Control-Allow-Origin', 'https://tudominio.com')
  return response
}
```

---

## 📊 Monitoreo y Analytics

### Vercel Analytics

1. En Vercel Dashboard → Analytics
2. Habilita "Web Analytics"
3. Gratis hasta 100k eventos/mes

### Google Analytics

1. Crea una propiedad en Google Analytics 4
2. Instala el paquete:
   ```bash
   npm install @next/third-parties
   ```
3. Añade en `app/layout.tsx`:
   ```typescript
   import { GoogleAnalytics } from '@next/third-parties/google'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>{children}</body>
         <GoogleAnalytics gaId="G-XXXXXXXXXX" />
       </html>
     )
   }
   ```

---

## 🎯 Optimizaciones Post-Despliegue

### 1. Caché de Imágenes
Next.js optimiza automáticamente las imágenes, pero verifica:
- Logo está en formato PNG optimizado
- Usa WebP para mejor compresión

### 2. Fonts
Las fuentes de Google están preoptimizadas con `next/font`.

### 3. Bundle Size
Verifica el tamaño:
```bash
npm run build
```

### 4. Performance Testing
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## 🚨 Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Error de MongoDB en producción
- Verifica que las variables de entorno estén correctas
- Confirma que la IP de la plataforma esté en MongoDB Atlas
- Revisa los logs de la plataforma

### Sitio muy lento
- Habilita caché en headers
- Verifica el tamaño del bundle
- Usa CDN para assets estáticos

---

## ✅ Checklist de Despliegue

Antes de lanzar a producción:

- [ ] Variables de entorno configuradas
- [ ] MongoDB Atlas conectado y funcionando
- [ ] Formulario de prerregistro probado
- [ ] Dominio personalizado configurado (opcional)
- [ ] SSL/HTTPS habilitado
- [ ] Analytics configurado
- [ ] Rate limiting implementado (recomendado)
- [ ] Endpoint de admin protegido
- [ ] IPs actualizadas en MongoDB
- [ ] Pruebas en diferentes dispositivos
- [ ] SEO verificado (meta tags, sitemap)
- [ ] Políticas de privacidad actualizadas

---

¡Tu landing page de Taply está lista para conquistar el mundo! 🚀

