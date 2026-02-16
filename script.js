// ===========================================
// DYNAMIC GUESTS SECTION (URL Parameters)
// ===========================================

function loadGuestsFromURL() {
  const urlParams = new URLSearchParams(window.location.search);

  // Obtener parámetros de la URL
  const nombres = urlParams.get("nombres");
  const cantidad = urlParams.get("cantidad");

  // Elementos del DOM
  const guestsGreeting = document.getElementById("guestsGreeting");
  const guestsNames = document.getElementById("guestsNames");
  const guestsCount = document.getElementById("guestsCount");

  // Actualizar nombres
  if (nombres) {
    // Convertir "Juan,Maria" a "Juan y María" o "Juan, María y Pedro"
    const namesArray = nombres.split(",").map((name) => name.trim());

    let displayNames;
    if (namesArray.length === 1) {
      displayNames = namesArray[0];
    } else if (namesArray.length === 2) {
      displayNames = namesArray.join(" y ");
    } else {
      const lastNames = namesArray.slice(0, -1).join(", ");
      displayNames = lastNames + " y " + namesArray[namesArray.length - 1];
    }

    guestsNames.textContent = displayNames;

    // Ajustar saludo según plural/singular
    if (namesArray.length > 1) {
      guestsGreeting.textContent = "Con mucho cariño, invitamos a";
    } else {
      guestsGreeting.textContent = "Con mucho cariño, invitamos a";
    }
  }

  // Actualizar cantidad de pases
  if (cantidad) {
    guestsCount.textContent = cantidad;
  } else if (nombres) {
    // Si no se especifica cantidad, usar el número de nombres
    const namesArray = nombres.split(",");
    guestsCount.textContent = namesArray.length;
  } else {
    guestsCount.textContent = "1";
  }
}

// ===========================================
// COUNTDOWN TIMER
// ===========================================

function initCountdown() {
  // Fecha de la boda: 21 de Marzo de 2026, 4:00 PM
  const weddingDate = new Date("2026-03-21T16:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0",
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0",
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0",
    );
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ===========================================
// SCROLL ANIMATIONS
// ===========================================

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observar todas las secciones
  document.querySelectorAll(".section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    observer.observe(section);
  });
}

// ===========================================
// INITIALIZE ON LOAD
// ===========================================

document.addEventListener("DOMContentLoaded", () => {
  loadGuestsFromURL();
  initCountdown();
  initScrollAnimations();

  // Inicializar iconos de Lucide
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});
