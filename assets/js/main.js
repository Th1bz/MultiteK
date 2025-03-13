/**
 * Template Site Vitrine - Main JavaScript
 * Version: 1.0
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * Sélecteurs d'éléments fréquemment utilisés
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Écouteur d'événements
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Écouteur d'événements au défilement
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navigation mobile
   */
  const initNavigation = () => {
    const hamburger = select(".hamburger");
    const navMenu = select(".nav-menu");

    // Affichage/Masquage du menu mobile
    if (hamburger) {
      hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        console.log("Menu hamburger cliqué"); // Ajout pour debug
      });
    }

    // Ferme le menu mobile quand on clique sur un lien
    const navLinks = select(".nav-menu a", true);
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });

    // Détection du scroll pour le header
    window.addEventListener("scroll", function () {
      headerScrolled();
    });

    // Gestion du bouton "back to top"
    const backToTop = select(".back-to-top");
    if (backToTop) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
          backToTop.classList.add("active");
        } else {
          backToTop.classList.remove("active");
        }
      });
    }
  };

  /**
   * Navigation active state sur défilement
   */
  const navbarlinks = select(".nav-menu a", true);

  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };

  /**
   * Header fixe lors du défilement
   */
  const headerScrolled = () => {
    const header = select("#header");
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    }
  };

  /**
   * Animation au défilement avec AOS
   */
  const initAOS = () => {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }
  };

  /**
   * Animation de défilement doux pour les liens d'ancrage
   */
  const initSmoothScroll = () => {
    on(
      "click",
      'a[href*="#"]:not([href="#"])',
      function (e) {
        if (
          location.pathname.replace(/^\//, "") ===
            this.pathname.replace(/^\//, "") &&
          location.hostname === this.hostname
        ) {
          e.preventDefault();

          let target = select(this.hash);
          if (target) {
            let headerHeight = select("#header").offsetHeight;
            let scrollPosition = target.offsetTop - headerHeight;

            window.scrollTo({
              top: scrollPosition,
              behavior: "smooth",
            });

            // Fermer le menu mobile si ouvert
            const navMenu = select(".nav-menu");
            const hamburger = select(".hamburger");
            if (navMenu.classList.contains("active")) {
              navMenu.classList.remove("active");
              hamburger.classList.remove("active");
            }
          }
        }
      },
      true
    );
  };

  /**
   * Préchargeur
   */
  const initPreloader = () => {
    const preloader = select("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }
  };

  /**
   * Animation des éléments décoratifs de la hero section
   */
  const initHeroDecorations = () => {
    const heroSection = select("#hero");
    const decorElement1 = select(".hero-decorative-element-1");
    const decorElement2 = select(".hero-decorative-element-2");

    // Si les éléments n'existent pas, ne pas continuer
    if (!heroSection || !decorElement1 || !decorElement2) return;

    // Appliquer une position aléatoire initiale pour l'élément 1
    const randomX = Math.random() * 50 - 25; // Entre -25px et 25px
    const randomY = Math.random() * 50 - 25; // Entre -25px et 25px
    decorElement1.style.transform = `translate(${randomX}px, ${randomY}px)`;

    // Effet de parallaxe au défilement
    window.addEventListener("scroll", function () {
      const scrollPos = window.scrollY;
      const heroHeight = heroSection.offsetHeight;

      // Ne pas appliquer l'effet si on est trop loin de la section hero
      if (scrollPos > heroHeight * 1.5) return;

      // Effet de parallaxe inversé pour le premier élément (mouvement plus lent)
      const offset1 = scrollPos * 0.2;
      decorElement1.style.transform = `translate(${randomX}px, ${
        randomY - offset1
      }px)`;

      // Effet de parallaxe pour le second élément (mouvement plus rapide)
      const offset2 = scrollPos * 0.4;
      decorElement2.style.transform = `rotate(45deg) translateY(${offset2}px)`;
    });

    // Effet de suivi de souris pour ajouter de l'interactivité
    heroSection.addEventListener("mousemove", function (e) {
      // Calculer la position relative de la souris par rapport au centre
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      // Appliquer un léger mouvement basé sur la position de la souris
      decorElement1.style.transform = `translate(${randomX + mouseX * 20}px, ${
        randomY + mouseY * 20
      }px)`;
      decorElement2.style.transform = `rotate(45deg) translate(${
        mouseX * 15
      }px, ${mouseY * 15}px)`;
    });
  };

  /**
   * Initialisation de toutes les fonctions
   */
  window.addEventListener("load", () => {
    initPreloader();
    initAOS();
  });

  // Initialiser la navigation
  initNavigation();

  // Initialiser l'effet de parallaxe pour les éléments décoratifs
  initHeroDecorations();

  // Initialiser le défilement doux
  initSmoothScroll();

  // Activer les liens de navigation au défilement
  window.addEventListener("scroll", navbarlinksActive);

  // Active le header scrolled si la page est chargée et déjà scrollée
  headerScrolled();
});
