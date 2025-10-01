# Guía de Configuración de MongoDB Atlas para Taply

Esta guía te ayudará a configurar MongoDB Atlas paso a paso para la landing page de Taply.

## 🎯 Pasos para Configurar MongoDB Atlas

### 1. Crear una Cuenta en MongoDB Atlas

1. Ve a [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Haz clic en "Try Free" o "Start Free"
3. Regístrate con tu email o cuenta de Google/GitHub
4. Verifica tu email si es necesario

### 2. Crear un Nuevo Cluster

1. Después de iniciar sesión, verás la opción "Build a Database"
2. Selecciona **"M0 FREE"** (el tier gratuito es perfecto para comenzar)
3. Elige un proveedor cloud:
   - **AWS** (recomendado)
   - Google Cloud Platform
   - Microsoft Azure
4. Selecciona la región más cercana a tus usuarios (ej: Europe - Frankfurt para España)
5. Nombre del cluster: puedes dejarlo como "Cluster0" o cambiarlo a "taply-cluster"
6. Haz clic en **"Create"**
7. Espera 3-5 minutos mientras se crea el cluster

### 3. Configurar Seguridad - Usuario de Base de Datos

1. Verás una ventana de "Security Quickstart"
2. En la sección **"How would you like to authenticate your connection?"**:
   - Selecciona "Username and Password"
   - Username: `taply-admin` (o el que prefieras)
   - Password: Haz clic en "Autogenerate Secure Password" o crea una contraseña segura
   - **⚠️ IMPORTANTE**: Copia y guarda la contraseña, la necesitarás más adelante
3. Haz clic en "Create User"

### 4. Configurar Acceso a la Red

1. En la sección **"Where would you like to connect from?"**:
   - Durante desarrollo, selecciona "My Local Environment"
   - Haz clic en "Add My Current IP Address"
   - O si quieres acceso desde cualquier lugar (para producción en Vercel, etc):
     - IP Address: `0.0.0.0/0`
     - Description: "Allow all (for development/production)"
     - **⚠️ Nota**: En producción real, es mejor limitar las IPs específicas
2. Haz clic en "Finish and Close"

### 5. Obtener el Connection String

1. En el Dashboard, haz clic en **"Connect"** en tu cluster
2. Selecciona **"Drivers"**
3. Selecciona:
   - Driver: "Node.js"
   - Version: "5.5 or later"
4. Copia el connection string que se ve así:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### 6. Configurar el Connection String

1. Reemplaza `<username>` con el nombre de usuario que creaste (ej: `taply-admin`)
2. Reemplaza `<password>` con la contraseña que guardaste
3. Añade el nombre de la base de datos después del `.net/`:
   ```
   mongodb+srv://taply-admin:TU_PASSWORD@cluster0.xxxxx.mongodb.net/taply?retryWrites=true&w=majority
   ```

### 7. Crear el archivo .env.local

En la raíz de tu proyecto Taply, crea un archivo llamado `.env.local`:

```env
MONGODB_URI=mongodb+srv://taply-admin:TU_PASSWORD@cluster0.xxxxx.mongodb.net/taply?retryWrites=true&w=majority
MONGODB_DB=taply
```

**⚠️ IMPORTANTE**: 
- NO compartas este archivo
- NO lo subas a GitHub (ya está en .gitignore)
- Reemplaza `TU_PASSWORD` con tu contraseña real

### 8. Crear la Base de Datos y Colección (Opcional)

MongoDB creará automáticamente la base de datos y colección cuando insertes el primer documento, pero si prefieres crearla manualmente:

1. En MongoDB Atlas, ve a "Browse Collections"
2. Haz clic en "Create Database"
3. Database name: `taply`
4. Collection name: `preregisters`
5. Haz clic en "Create"

### 9. Verificar la Conexión

Ejecuta tu aplicación:

```bash
npm run dev
```

Visita `http://localhost:3000` y prueba el formulario de prerregistro. Si funciona correctamente, verás un mensaje de éxito.

Para verificar que los datos se guardaron:
1. Ve a MongoDB Atlas
2. Haz clic en "Browse Collections"
3. Deberías ver la base de datos `taply` y la colección `preregisters` con tus registros

## 🔍 Estructura de Datos

Los prerregistros se guardan con esta estructura:

```json
{
  "_id": "ObjectId generado automáticamente",
  "name": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "phone": "+34 612 345 678",
  "createdAt": "2025-10-01T10:30:00.000Z",
  "source": "landing"
}
```

## 📊 Ver los Prerregistros

### Desde MongoDB Atlas:
1. Ve a "Browse Collections"
2. Selecciona la base de datos `taply`
3. Haz clic en la colección `preregisters`
4. Verás todos los registros con opciones para filtrar, editar o eliminar

### Desde tu aplicación:
Visita `http://localhost:3000/api/preregister` para ver el total de prerregistros (endpoint GET).

## 🚀 Configuración para Producción (Vercel)

Cuando despliegues en Vercel:

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Añade las variables:
   - Name: `MONGODB_URI`
   - Value: tu connection string completo
   - Name: `MONGODB_DB`
   - Value: `taply`
4. Redeploy tu aplicación

## 🔒 Mejores Prácticas de Seguridad

1. **Nunca compartas tu connection string** - Contiene tu contraseña
2. **Usa variables de entorno** - Nunca hardcodees las credenciales
3. **Limita el acceso IP** - En producción, usa IPs específicas
4. **Cambia las contraseñas regularmente** - Especialmente si se comprometen
5. **Habilita auditoría** - MongoDB Atlas ofrece logs de actividad
6. **Usa roles apropiados** - El usuario solo necesita lectura/escritura en la DB taply

## ❓ Solución de Problemas

### Error: "MongoServerError: bad auth"
- Verifica que el usuario y contraseña sean correctos
- Si la contraseña tiene caracteres especiales, encódelos (usa %XX)

### Error: "MongooseServerSelectionError"
- Verifica que tu IP esté en la lista de IPs permitidas
- Revisa que el connection string sea correcto

### Error: "Cannot read property 'db' of null"
- Asegúrate de que `MONGODB_URI` esté configurado en `.env.local`
- Reinicia el servidor de desarrollo después de crear `.env.local`

## 📚 Recursos Adicionales

- [Documentación oficial de MongoDB Atlas](https://docs.atlas.mongodb.com/)
- [MongoDB University - Cursos gratuitos](https://university.mongodb.com/)
- [Foro de la comunidad](https://www.mongodb.com/community/forums/)

---

¿Necesitas ayuda? Revisa el README.md principal o contacta al equipo de desarrollo.

