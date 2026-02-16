# 📝 PERSONALIZACIÓN PENDIENTE

## ⚠️ IMPORTANTE: Debes completar estos pasos antes de compartir la invitación

### 1. 📸 FOTOS DE LA PAREJA

Reemplaza las URLs de las fotos de ejemplo con tus propias fotos:

**Línea ~158** - **FOTO DE FONDO DEL HERO** (¡NUEVA!):
```html
<img src="TU_FOTO_HERO.jpg" 
     alt="Laura Valentina y Juan Esteban" 
     class="hero-bg-image">
```
**Recomendación:** Foto horizontal de ustedes dos, preferiblemente en exteriores o con fondo bonito.
**Tamaño ideal:** 1920x1080px (horizontal) o similar.

**Línea ~185** - Foto principal de "Nuestra Historia":
```html
<img src="TU_FOTO_PRINCIPAL.jpg" 
     alt="Laura Valentina y Juan Esteban" class="story-photo">
```

**Líneas ~200-212** - Galería de 3 fotos:
```html
<img src="TU_FOTO_1.jpg" alt="Momento especial 1" class="gallery-photo">
<img src="TU_FOTO_2.jpg" alt="Momento especial 2" class="gallery-photo">
<img src="TU_FOTO_3.jpg" alt="Momento especial 3" class="gallery-photo">
```

### 2. 📍 GOOGLE MAPS

**Línea ~239** - Actualiza el link de Google Maps:
```html
<a href="https://maps.google.com/?q=Parroquia+San+José+Neiva" target="_blank" class="location-map-btn">
```

**Cómo obtener tu link:**
1. Busca "Parroquia San José, Calle 15 #8-45, Neiva" en Google Maps
2. Click en "Compartir"
3. Copia el link
4. Pégalo en el código

### 3. 📱 WHATSAPP Y TELÉFONO

**Línea ~283** - WhatsApp (actualiza el número):
```html
<a href="https://wa.me/573001234567?text=Hola,%20confirmo%20mi%20asistencia%20a%20la%20ceremonia%20de%20Laura%20Valentina%20y%20Juan%20Esteban" 
   class="rsvp-btn primary" target="_blank">
```

**Línea ~288** - Teléfono:
```html
<a href="tel:+573001234567" class="rsvp-btn">
```

**Formato del número de WhatsApp:**
- Colombia: `57` + número de 10 dígitos
- Ejemplo: `573001234567` (57 + 300 123 4567)

### 4. 🎯 PASOS PARA SUBIR LAS FOTOS

#### Opción A: Usar un servicio de hosting de imágenes (Recomendado)

1. **Imgur.com** (Gratis):
   - Ve a https://imgur.com
   - Click "New post"
   - Sube tus fotos
   - Click derecho en la imagen → "Copiar dirección de imagen"
   - Pega esa URL en el código

2. **ImgBB.com** (Gratis):
   - Ve a https://imgbb.com
   - Sube tu foto
   - Copia el "Direct link"
   - Pégalo en el código

#### Opción B: Subir las fotos junto con el proyecto

1. Crea una carpeta llamada `images` en tu proyecto:
   ```
   invitacion-boda/
   ├── images/
   │   ├── foto-principal.jpg
   │   ├── galeria-1.jpg
   │   ├── galeria-2.jpg
   │   └── galeria-3.jpg
   ├── invitacion-boda.html
   └── ...
   ```

2. Actualiza las rutas en el HTML:
   ```html
   <img src="images/foto-principal.jpg" ...>
   <img src="images/galeria-1.jpg" ...>
   <img src="images/galeria-2.jpg" ...>
   <img src="images/galeria-3.jpg" ...>
   ```

3. Sube toda la carpeta a GitHub/Vercel

### 5. ✅ CHECKLIST FINAL

Antes de hacer deploy, verifica:

- [ ] **Foto de fondo del Hero** (foto horizontal de portada)
- [ ] Foto principal de "Nuestra Historia" (vertical)
- [ ] 3 fotos de la galería (verticales)
- [ ] Link de Google Maps funcional
- [ ] Número de WhatsApp correcto
- [ ] Número de teléfono correcto
- [ ] Todas las fechas dicen "2026"
- [ ] Nombres completos correctos
- [ ] Probar la invitación localmente
- [ ] Probar parámetros URL: `?nombres=Prueba&cantidad=1`
- [ ] Probar en móvil

### 6. 🧪 CÓMO PROBAR LOCALMENTE

Simplemente abre el archivo `invitacion-boda.html` en tu navegador:
- Haz doble click en el archivo
- O arrastra el archivo al navegador
- Prueba agregar `?nombres=Juan&cantidad=1` al final de la URL

### 7. 📞 NÚMEROS DE CONTACTO A ACTUALIZAR

Busca en el archivo y reemplaza `3001234567` con tus números reales:
- Línea ~283: WhatsApp
- Línea ~288: Teléfono

---

## 🎨 TIPS PARA LAS FOTOS

### Recomendaciones por foto:

**1. Foto Hero (Fondo de portada):**
- **Formato**: JPG o PNG
- **Orientación**: Horizontal (landscape)
- **Tamaño recomendado**: 1920x1080px o 1600x900px
- **Peso**: Máximo 800KB
- **Estilo**: Foto romántica de ustedes dos, puede ser:
  - En exteriores con paisaje bonito
  - En un lugar significativo para ustedes
  - Con buena iluminación natural
  - Fondo desenfocado o limpio (el texto irá encima)
- **Tip**: La foto tendrá un overlay semi-transparente dorado, así que funcionan bien fotos con cualquier tono

**2. Foto principal "Nuestra Historia":**
- **Formato**: JPG o PNG
- **Orientación**: Vertical (portrait)
- **Tamaño recomendado**: 800x1000px
- **Peso**: Máximo 500KB
- **Estilo**: Foto formal o semi-formal de ustedes dos

**3. Galería (3 fotos):**
- **Formato**: JPG o PNG
- **Orientación**: Vertical (portrait)
- **Tamaño recomendado**: 700x900px cada una
- **Peso**: Máximo 500KB cada una
- **Estilo**: Momentos especiales, pueden ser:
  - Fotos casuales de la relación
  - Fotos de viajes juntos
  - Momentos significativos
  - Mix de fotos formales e informales

### Para optimizar tus fotos:
1. Ve a https://tinypng.com
2. Sube tus fotos
3. Descarga las versiones optimizadas
4. Usa esas fotos en tu invitación

---

## 🚀 DESPUÉS DE PERSONALIZAR

1. Guarda todos los cambios
2. Sigue la guía en `DEPLOYMENT.md` para subir a Vercel
3. Comparte tu link: `https://tu-sitio.vercel.app?nombres=Invitado&cantidad=1`

---

## ❓ ¿NECESITAS AYUDA?

Si tienes dudas, revisa:
- `README.md` - Documentación completa
- `DEPLOYMENT.md` - Guía de deployment paso a paso

¡Éxito con tu boda! 💍✨
