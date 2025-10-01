# Taply - Guía de Identidad de Marca

Esta guía define los elementos visuales, tonos y principios de diseño de Taply para mantener la coherencia en todas las comunicaciones.

---

## 🎨 Paleta de Colores

### Colores Principales

| Color | Hex | RGB | Uso |
|-------|-----|-----|-----|
| **Azul Eléctrico** | `#007AFF` | rgb(0, 122, 255) | Principal, acentos, elementos interactivos |
| **Crema Azul Claro** | `#E8F4FD` | rgb(232, 244, 253) | Fondos sutiles, efectos de profundidad |
| **Gris Claro** | `#F5F5F7` | rgb(245, 245, 247) | Fondos principales, elementos neutros |

### Colores Secundarios

| Color | Hex | RGB | Uso |
|-------|-----|-----|-----|
| **Negro** | `#000000` | rgb(0, 0, 0) | Texto principal, elementos destacados |
| **Gris Oscuro** | `#1D1D1F` | rgb(29, 29, 31) | Texto secundario, acentos elegantes |

### Gradientes

**Gradiente Principal (Texto)**
```css
background: linear-gradient(to right, #007AFF, #1D1D1F);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

**Gradiente de Fondo**
```css
background: linear-gradient(to bottom right, rgba(232, 244, 253, 0.3), #FFFFFF, rgba(245, 245, 247, 0.5));
```

**Gradiente de Botones**
```css
background: linear-gradient(to right, #000000, #1D1D1F);
```

---

## 🔤 Tipografía

### Fuentes

**Montserrat** - Para títulos, logo y elementos destacados
- Peso: Bold (700)
- Uso: H1, H2, H3, Logo
- Ejemplo: `font-family: 'Montserrat', sans-serif;`

**Inter** - Para texto de cuerpo y descripciones
- Peso: Regular (400), Medium (500)
- Uso: Párrafos, descripciones, labels
- Ejemplo: `font-family: 'Inter', sans-serif;`

### Jerarquía de Texto

```css
/* Hero Title */
font-size: 4rem;        /* 64px */
font-weight: 700;
line-height: 1.1;

/* Section Titles */
font-size: 3rem;        /* 48px */
font-weight: 700;
line-height: 1.2;

/* Card Titles */
font-size: 1.5rem;      /* 24px */
font-weight: 700;
line-height: 1.3;

/* Body Text */
font-size: 1rem;        /* 16px */
font-weight: 400;
line-height: 1.6;

/* Small Text */
font-size: 0.875rem;    /* 14px */
font-weight: 400;
line-height: 1.5;
```

---

## 🎭 Logo

### Versiones del Logo

1. **Logo Principal**: Símbolo NFC + "taply" (horizontal)
2. **Logo Simplificado**: Solo símbolo NFC (para favicons, apps)
3. **Logo Texto**: Solo "taply" en tipografía

### Espaciado y Tamaños

**Espacio Mínimo**: Mantener al menos 20px de espacio claro alrededor del logo

**Tamaños Recomendados**:
- Hero: 150-200px altura
- Header: 40-50px altura
- Footer: 40-50px altura
- Favicon: 32x32px, 64x64px

### No hacer con el logo

❌ No cambiar los colores del logo  
❌ No rotar o inclinar el logo  
❌ No añadir efectos de sombra o 3D  
❌ No estirar o deformar las proporciones  
❌ No colocar sobre fondos que reduzcan la legibilidad  

---

## 🎯 Iconografía

### Estilo de Iconos

- **Líneas finas**: stroke-width de 1.5px a 2px
- **Minimalistas**: sin relleno, solo contornos
- **Redondeados**: line-cap y line-join redondeados
- **Tamaño base**: 24x24px, escalable

### Temas de Iconos

**Tecnología**: NFC, chip, señal wireless, rayo, conexión  
**Interacción**: tap, touch, mano, dedos  
**Profesional**: tarjeta, briefcase, red, usuarios  
**Seguridad**: candado, escudo, verificación  

### Librería Recomendada

- **Heroicons** (usada en el proyecto)
- **Lucide Icons** (alternativa)
- **Feather Icons** (alternativa)

---

## ✨ Animaciones y Microinteracciones

### Principios de Animación

1. **Sutiles**: Las animaciones deben mejorar, no distraer
2. **Rápidas**: Duración entre 200-600ms
3. **Suaves**: Usar easing curves naturales (ease-in-out)
4. **Contextuales**: Reforzar la acción del usuario

### Efectos Comunes

**Hover en Botones**
```css
transition: all 0.3s ease;
transform: scale(1.05);
box-shadow: 0 0 40px rgba(0, 122, 255, 0.4);
```

**Hover en Cards**
```css
transition: all 0.3s ease;
transform: scale(1.02);
border-color: #007AFF;
```

**Animación de "Tap"**
```css
@keyframes tap {
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
}
```

**Ondas NFC**
```css
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.5); opacity: 0; }
}
```

---

## 📐 Espaciado y Layout

### Sistema de Espaciado (múltiplos de 4px)

```
4px   - Micro espaciado
8px   - Espaciado pequeño
16px  - Espaciado base
24px  - Espaciado medio
32px  - Espaciado grande
48px  - Espaciado extra grande
64px  - Separación de secciones
96px  - Padding de secciones hero
```

### Grid y Breakpoints

```css
/* Mobile First */
xs: 0px      /* Default */
sm: 640px    /* Tablets pequeñas */
md: 768px    /* Tablets */
lg: 1024px   /* Desktop */
xl: 1280px   /* Desktop grande */
2xl: 1536px  /* Pantallas grandes */
```

### Contenedores

**Max Width**: 1280px (container)  
**Padding Lateral**: 24px (mobile), 48px (desktop)  
**Secciones**: Padding vertical 96px (desktop), 64px (mobile)

---

## 🎬 Imágenes y Medios

### Estilo Fotográfico

- **Tonalidad**: Fondos oscuros con elementos luminosos
- **Temática**: Manos, tecnología, close-ups de tarjetas NFC
- **Iluminación**: Luz azul eléctrico o verde lima
- **Composición**: Minimalista, espacio negativo, focus en producto

### Efectos en Imágenes

```css
/* Overlay oscuro */
background: rgba(17, 17, 17, 0.7);

/* Blur de fondo */
backdrop-filter: blur(20px);

/* Glow effect */
box-shadow: 0 0 40px rgba(0, 122, 255, 0.4);
```

---

## 💬 Tono de Voz y Copywriting

### Personalidad de Marca

**Taply es**:
- ✅ Premium pero accesible
- ✅ Tecnológico pero humano
- ✅ Innovador pero confiable
- ✅ Exclusivo pero inclusivo

**Taply NO es**:
- ❌ Corporativo frío
- ❌ Demasiado casual
- ❌ Técnico incomprensible
- ❌ Elitista inalcanzable

### Reglas de Copy

1. **Frases cortas**: Máximo 15 palabras por oración
2. **Activo, no pasivo**: "Conecta" en vez de "Se conecta"
3. **Beneficios claros**: Qué gana el usuario, no solo features
4. **Directo**: Sin rodeos, al punto
5. **Aspiracional**: Inspirar, no solo informar

### Ejemplos de Copy

**✅ Correcto**:
- "La tarjeta que conecta contigo"
- "Tecnología en la palma de tu mano"
- "Sé de los primeros en experimentar Taply"
- "Networking reinventado"

**❌ Incorrecto**:
- "Nuestro producto utiliza tecnología NFC avanzada para..." (muy técnico)
- "¡La mejor tarjeta del mundo!!!" (exagerado, exceso de exclamaciones)
- "Quizás te interese nuestra tarjeta..." (inseguro)

### Llamadas a la Acción (CTAs)

**Fuertes**:
- "Regístrate ahora"
- "Quiero mi Taply"
- "Únete a la revolución"
- "Descubre Taply"

**Evitar**:
- "Haz clic aquí"
- "Saber más"
- "Enviar"

---

## 🎨 Componentes de UI

### Botones

**Botón Primario**
```css
background: #007AFF;
color: #FFFFFF;
padding: 16px 48px;
border-radius: 12px;
font-weight: 600;
transition: all 0.3s ease;
```

**Botón Primario Hover**
```css
background: linear-gradient(to right, #007AFF, #A8FF60);
transform: scale(1.05);
box-shadow: 0 0 40px rgba(0, 122, 255, 0.4);
```

**Botón Secundario**
```css
background: transparent;
border: 2px solid #007AFF;
color: #007AFF;
padding: 14px 46px;
border-radius: 12px;
```

### Cards

```css
background: #1C1C1E;
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 16px;
padding: 32px;
transition: all 0.3s ease;
```

**Card Hover**
```css
border-color: #007AFF;
transform: scale(1.02);
box-shadow: 0 8px 32px rgba(0, 122, 255, 0.2);
```

### Forms

**Input Fields**
```css
background: #111111;
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 12px;
padding: 16px 24px;
color: #FFFFFF;
font-size: 16px;
transition: all 0.3s ease;
```

**Input Focus**
```css
border-color: #007AFF;
box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
outline: none;
```

---

## 📱 Responsive Design

### Prioridades Mobile-First

1. **Contenido primero**: El mensaje debe ser claro en mobile
2. **Touch-friendly**: Botones de al menos 44px de altura
3. **Legibilidad**: Texto nunca menor a 14px
4. **Espaciado**: Más generoso en mobile para evitar toques accidentales

### Ajustes por Dispositivo

**Mobile (< 768px)**:
- Títulos: 2.5rem (40px)
- Padding de secciones: 64px vertical
- Una columna en grids

**Desktop (> 1024px)**:
- Títulos: 4rem (64px)
- Padding de secciones: 96px vertical
- Grids de 2-4 columnas

---

## ♿ Accesibilidad

### Contraste

- Texto blanco sobre fondo oscuro: ✅ 15.5:1 (excelente)
- Azul eléctrico sobre negro: ✅ 8.2:1 (muy bueno)
- Verde lima sobre negro: ✅ 14.1:1 (excelente)

### Focus States

Todos los elementos interactivos deben tener estados de focus visibles:

```css
:focus-visible {
  outline: 2px solid #007AFF;
  outline-offset: 4px;
}
```

### ARIA Labels

- Añadir `aria-label` a iconos sin texto
- Usar `alt` descriptivo en imágenes
- Marcar regiones con `role` apropiado

---

## ✅ Checklist de Diseño

Antes de publicar cualquier diseño de Taply:

- [ ] Usa solo colores de la paleta oficial
- [ ] Tipografía correcta (Montserrat/Inter)
- [ ] Espaciado múltiplo de 4px
- [ ] Animaciones suaves (200-600ms)
- [ ] Contraste de color suficiente (WCAG AA mínimo)
- [ ] Responsive en todos los breakpoints
- [ ] Logo con espacio claro adecuado
- [ ] CTAs claros y directos
- [ ] Tono de voz coherente con la marca
- [ ] Estados hover/focus definidos

---

**Última actualización**: Octubre 2025  
**Versión**: 1.0

Para consultas sobre la marca, contacta al equipo de diseño de Taply.

