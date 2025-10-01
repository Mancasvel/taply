# 🔧 Configuración de Variables de Entorno

## 📋 Pasos para Configurar

### 1. Crear el archivo .env.local

En la raíz del proyecto, crea un archivo llamado `.env.local` (exactamente con ese nombre):

```bash
# En Windows (PowerShell)
New-Item -Path ".env.local" -ItemType File

# En macOS/Linux
touch .env.local
```

### 2. Copiar el contenido

Copia el siguiente contenido en tu archivo `.env.local`:

```env
# ===========================================
# TAPLY - VARIABLES DE ENTORNO
# ===========================================

# MONGODB ATLAS CONFIGURATION
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
MONGODB_DB=taply

# OPCIONAL - SEGURIDAD
# ADMIN_TOKEN=tu_token_super_secreto_aqui_123456789

# OPCIONAL - ANALYTICS
# GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Completar con tus datos reales

Reemplaza los valores de ejemplo:

- `<username>`: Tu usuario de MongoDB Atlas
- `<password>`: Tu contraseña de MongoDB Atlas  
- `<cluster>`: El nombre de tu cluster
- `<database>`: El nombre de tu base de datos (recomendado: `taply`)

### 4. Ejemplo completo

```env
MONGODB_URI=mongodb+srv://taply-admin:miPassword123@cluster0.abc123.mongodb.net/taply?retryWrites=true&w=majority
MONGODB_DB=taply
```

## ⚠️ IMPORTANTE

- ❌ **NUNCA** subas el archivo `.env.local` a GitHub
- ✅ Ya está incluido en `.gitignore`
- ✅ Cada desarrollador debe crear su propio `.env.local`
- ✅ En producción, configura estas variables en tu plataforma de hosting

## 🚀 Para Despliegue

### Vercel
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Añade cada variable una por una

### Netlify
1. Site settings → Environment variables
2. Añade las variables necesarias

### Railway
1. Variables tab en tu proyecto
2. Añade las variables de entorno

## 🔍 Verificar Configuración

Después de crear `.env.local`, ejecuta:

```bash
npm run dev
```

Si todo está bien configurado, la aplicación iniciará sin errores y podrás probar el formulario de prerregistro.
