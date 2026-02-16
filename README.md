# 💍 Invitación de Boda Digital

Invitación elegante y minimalista para ceremonia de Eucaristía.

## 🌟 Características

- ✨ Diseño elegante y sobrio
- 📱 Totalmente responsive (móvil, tablet, desktop)
- 🎨 Animaciones sutiles y profesionales
- 👥 Sección de invitados dinámica mediante URL
- ⏰ Contador regresivo en tiempo real
- 🎯 Iconos profesionales con Lucide Icons
- 📸 Galería de fotos con efectos hover
- 🙏 Enfoque espiritual y ceremonial

## 🚀 Deploy en Vercel

### Opción 1: Deploy desde GitHub

1. **Sube el proyecto a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Invitación de boda"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/invitacion-boda.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Import Project"
   - Selecciona tu repositorio de GitHub
   - Click en "Deploy"
   - ¡Listo! Tu invitación estará en línea

### Opción 2: Deploy directo con Vercel CLI

1. **Instala Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Para producción:**
   ```bash
   vercel --prod
   ```

## 🔗 Personalización de Invitados

La invitación soporta parámetros URL para personalizar cada invitación:

### Ejemplos de URLs:

**Un invitado:**
```
https://tu-dominio.vercel.app?nombres=Juan&cantidad=1
```

**Dos invitados:**
```
https://tu-dominio.vercel.app?nombres=Juan,María&cantidad=2
```

**Tres o más invitados:**
```
https://tu-dominio.vercel.app?nombres=Ana,Pedro,Luis&cantidad=3
```

## 🎨 Personalización del Contenido

### Datos a actualizar en `invitacion-boda.html`:

1. **Nombres de los novios** (línea ~155):
   ```html
   <div class="hero-initials">A & M</div>
   ```

2. **Fecha de la boda** (líneas ~167, ~754):
   ```javascript
   const weddingDate = new Date('2026-03-21T16:00:00').getTime();
   ```

3. **Ubicación de la ceremonia** (líneas ~228-232):
   ```html
   <div class="location-name">Parroquia San José</div>
   <div class="location-address">...</div>
   ```

4. **Enlace de Google Maps** (línea ~237):
   ```html
   <a href="https://maps.google.com/..." ...>
   ```

5. **WhatsApp y teléfono** (líneas ~281-287):
   ```html
   <a href="https://wa.me/573001234567?text=..." ...>
   <a href="tel:+573001234567" ...>
   ```

6. **Fotos personales**:
   - Línea ~168: Foto principal de "Nuestra Historia"
   - Líneas ~183-193: Galería de 3 fotos

7. **Fecha límite de confirmación** (línea ~276):
   ```html
   <strong>1 de Marzo de 2026</strong>
   ```

## 📁 Estructura del Proyecto

```
invitacion-boda/
├── invitacion-boda.html    # Archivo principal
├── vercel.json              # Configuración de Vercel
└── README.md                # Este archivo
```

## 🎯 Tecnologías Utilizadas

- HTML5
- CSS3 (Animaciones, Grid, Flexbox)
- JavaScript (Vanilla)
- Lucide Icons
- Google Fonts (Cinzel, Cormorant Garamond, Montserrat)

## 📱 Características Técnicas

- **Responsive Design**: Adaptable a todos los dispositivos
- **Animaciones CSS**: Fade-in, slide, hover effects
- **Contador en tiempo real**: Actualización cada segundo
- **URL Parameters**: Sistema dinámico de invitados
- **Performance**: Optimizado para carga rápida
- **SEO Ready**: Meta tags y estructura semántica

## 🌐 Navegadores Soportados

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Licencia

Este proyecto es de uso personal para invitaciones de boda.

## 💝 Créditos

Diseñado con amor para celebrar un momento especial.

---

**¿Necesitas ayuda?** Contacta al desarrollador o consulta la documentación de [Vercel](https://vercel.com/docs).
