# 🚀 GUÍA RÁPIDA DE DEPLOYMENT

## Opción 1: Deploy en Vercel (Recomendado - GRATIS)

### Paso a paso:

1. **Crea una cuenta en Vercel**
   - Ve a https://vercel.com
   - Regístrate con GitHub, GitLab o email

2. **Sube tu proyecto a GitHub**
   ```bash
   # Inicializa git en tu carpeta
   git init
   
   # Agrega todos los archivos
   git add .
   
   # Haz tu primer commit
   git commit -m "Invitación de boda lista"
   
   # Crea un repositorio en GitHub (https://github.com/new)
   # Luego conecta tu repositorio local:
   git remote add origin https://github.com/TU-USUARIO/invitacion-boda.git
   git branch -M main
   git push -u origin main
   ```

3. **Conecta Vercel con GitHub**
   - En Vercel, click "New Project"
   - Selecciona "Import Git Repository"
   - Autoriza GitHub
   - Selecciona tu repositorio "invitacion-boda"
   - Click "Deploy"

4. **¡Listo!**
   - Vercel te dará una URL tipo: `https://invitacion-boda-abc123.vercel.app`
   - Puedes configurar un dominio personalizado si lo deseas

---

## Opción 2: Deploy con Vercel CLI (Más rápido)

```bash
# 1. Instala Vercel CLI globalmente
npm install -g vercel

# 2. Navega a la carpeta de tu proyecto
cd ruta/a/tu/proyecto

# 3. Inicia sesión en Vercel
vercel login

# 4. Deploy
vercel

# 5. Para deploy en producción
vercel --prod
```

---

## Opción 3: Netlify (Alternativa gratuita)

1. Ve a https://netlify.com
2. Click "Add new site" → "Deploy manually"
3. Arrastra y suelta tu carpeta del proyecto
4. ¡Listo! Obtendrás una URL instantánea

---

## Opción 4: GitHub Pages (100% Gratis)

1. Sube tu proyecto a GitHub (pasos del Opción 1)
2. Ve a Settings → Pages
3. En "Source", selecciona "main" branch
4. Click "Save"
5. Tu sitio estará en: `https://TU-USUARIO.github.io/invitacion-boda/`

---

## 🔗 Cómo compartir invitaciones personalizadas

Una vez deployed, comparte links así:

**Invitación para Juan (1 persona):**
```
https://tu-sitio.vercel.app?nombres=Juan&cantidad=1
```

**Invitación para Juan y María (2 personas):**
```
https://tu-sitio.vercel.app?nombres=Juan,María&cantidad=2
```

**Invitación para la familia Rodríguez (4 personas):**
```
https://tu-sitio.vercel.app?nombres=Carlos,Ana,Pedro,Sofía&cantidad=4
```

---

## 💡 Tips Pro

### Acortar URLs con Bitly:
1. Ve a https://bitly.com
2. Pega tu URL larga
3. Obtendrás algo como: `https://bit.ly/boda-juan`

### Dominio personalizado:
En Vercel → Settings → Domains → Add domain
Ejemplo: `bodaandreaymiguel.com`

### Analytics (saber quién visita):
En Vercel → Analytics → Enable (gratis hasta 100k visitantes/mes)

---

## ⚠️ Checklist antes de compartir

- [ ] Actualizar nombres de los novios
- [ ] Actualizar fecha correcta
- [ ] Actualizar ubicación del evento
- [ ] Actualizar número de WhatsApp
- [ ] Cambiar fotos de ejemplo por fotos reales
- [ ] Probar URL con parámetros
- [ ] Probar en móvil
- [ ] Revisar contador regresivo

---

## 🆘 Problemas comunes

**"La página no carga"**
→ Verifica que index.html esté en la raíz del proyecto

**"Los iconos no se ven"**
→ Revisa que la conexión a internet esté activa (usa CDN)

**"El contador no funciona"**
→ Verifica la fecha en el código (formato: 'YYYY-MM-DDTHH:MM:SS')

**"Los parámetros URL no funcionan"**
→ Verifica que uses `?nombres=Juan,Maria&cantidad=2` (sin espacios)

---

## 📞 Soporte

- Documentación Vercel: https://vercel.com/docs
- Documentación Netlify: https://docs.netlify.com
- GitHub Pages: https://pages.github.com

¡Éxito con tu boda! 💍✨
