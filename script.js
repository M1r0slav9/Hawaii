const translations = {
  en: {
    hero1: "Welcome to our world of comfort and style! Explore cozy furniture, soft textiles, and inspiring home decor ideas that make your space truly yours.",
    hero2: "Create your perfect corner for relaxation. From plush blankets to decorative pillows, find everything you need to unwind after a long day.",
    hero3: "We are always close to you! Visit our stores or shop online conveniently, and bring comfort and style into your home wherever you are.",
    menu: { about: "About us", shop: "Shop", service: "Customer Service" },
    buttons: { signin: "Sign in", signup: "Sign up" },
    footer: {
      customer: "Customer",
      supermarkets: "Supermarkets",
      tips: "Tips",
      invoice: "Customer invoice",
      employee: "Employee",
      careers: "Careers with us",
      supplier: "Supplier",
      society: "Society",
      news: "News",
      press: "Press room",
      about: "About us",
      planet: "Let’s protect the planet",
      contact: "Contact",
      accessibility: "Accessibility",
      privacy: "Privacy Policy",
      cookies: "Cookies Policy",
      terms: "Terms & Conditions"
    }
  },
  es: {
    hero1: "¡Bienvenido a nuestro mundo de confort y estilo! Explora muebles acogedores, textiles suaves e ideas inspiradoras para la decoración de tu hogar.",
    hero2: "Crea tu rincón perfecto para relajarte. Desde mantas mullidas hasta cojines decorativos, encuentra todo lo que necesitas para descansar después de un largo día.",
    hero3: "¡Siempre estamos cerca de ti! Visita nuestras tiendas o compra en línea cómodamente, y lleva confort y estilo a tu hogar dondequiera que estés.",
    menu: { about: "Sobre nosotros", shop: "Tienda", service: "Atención al cliente" },
    buttons: { signin: "Iniciar sesión", signup: "Registrarse" },
    footer: {
      customer: "Cliente",
      supermarkets: "Supermercados",
      tips: "Consejos",
      invoice: "Factura del cliente",
      employee: "Empleado",
      careers: "Carreras con nosotros",
      supplier: "Proveedor",
      society: "Sociedad",
      news: "Noticias",
      press: "Sala de prensa",
      about: "Sobre nosotros",
      planet: "Protejamos el planeta",
      contact: "Contacto",
      accessibility: "Accesibilidad",
      privacy: "Política de privacidad",
      cookies: "Política de cookies",
      terms: "Términos y condiciones"
    }
  },
  de: {
    hero1: "Willkommen in unserer Welt des Komforts und Stils! Entdecken Sie gemütliche Möbel, weiche Textilien und inspirierende Wohnideen, die Ihren Raum einzigartig machen.",
    hero2: "Gestalten Sie Ihre perfekte Ecke zum Entspannen. Von flauschigen Decken bis zu dekorativen Kissen finden Sie alles, um nach einem langen Tag abzuschalten.",
    hero3: "Wir sind immer in Ihrer Nähe! Besuchen Sie unsere Geschäfte oder kaufen Sie bequem online ein und bringen Sie Komfort und Stil in Ihr Zuhause.",
    menu: { about: "Über uns", shop: "Shop", service: "Kundenservice" },
    buttons: { signin: "Anmelden", signup: "Registrieren" },
    footer: {
      customer: "Kunde",
      supermarkets: "Supermärkte",
      tips: "Tipps",
      invoice: "Kundenrechnung",
      employee: "Mitarbeiter",
      careers: "Karriere bei uns",
      supplier: "Lieferant",
      society: "Gesellschaft",
      news: "Nachrichten",
      press: "Pressebereich",
      about: "Über uns",
      planet: "Schützen wir den Planeten",
      contact: "Kontakt",
      accessibility: "Barrierefreiheit",
      privacy: "Datenschutzrichtlinie",
      cookies: "Cookie-Richtlinie",
      terms: "Geschäftsbedingungen"
    }
  },
  fr: {
    hero1: "Bienvenue dans notre monde de confort et de style ! Découvrez des meubles confortables, des textiles doux et des idées déco inspirantes pour votre maison.",
    hero2: "Créez votre coin idéal pour la détente. Des couvertures moelleuses aux coussins décoratifs, trouvez tout ce dont vous avez besoin pour vous relaxer après une longue journée.",
    hero3: "Nous sommes toujours proches de vous ! Visitez nos magasins ou achetez en ligne facilement et apportez confort et style à votre maison où que vous soyez.",
    menu: { about: "À propos", shop: "Boutique", service: "Service client" },
    buttons: { signin: "Se connecter", signup: "S’inscrire" },
    footer: {
      customer: "Client",
      supermarkets: "Supermarchés",
      tips: "Conseils",
      invoice: "Facture client",
      employee: "Employé",
      careers: "Carrières avec nous",
      supplier: "Fournisseur",
      society: "Société",
      news: "Actualités",
      press: "Salle de presse",
      about: "À propos de nous",
      planet: "Protégeons la planète",
      contact: "Contact",
      accessibility: "Accessibilité",
      privacy: "Politique de confidentialité",
      cookies: "Politique de cookies",
      terms: "Conditions générales"
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang-btn");
  const langMenu = document.getElementById("lang-menu");

  // Переключение меню языка
  langBtn.addEventListener("click", () => langMenu.classList.toggle("show"));

  // Обработка выбора языка
  langMenu.addEventListener("click", (e) => {
    if (e.target.dataset.lang && translations[e.target.dataset.lang]) {
      const lang = e.target.dataset.lang;

      // Hero texts
      document.getElementById("hero-1-text").textContent = translations[lang].hero1;
      document.getElementById("hero-2-text").textContent = translations[lang].hero2;
      document.getElementById("hero-3-text").textContent = translations[lang].hero3;

      // Top menu
      const menu = translations[lang].menu;
      document.getElementById("menu-about").textContent = menu.about;
      document.getElementById("menu-shop").textContent = menu.shop;
      document.getElementById("menu-service").textContent = menu.service;

      // Auth buttons
      document.querySelector(".auth-buttons .auth-btn:nth-child(1)").textContent = translations[lang].buttons.signin;
      document.querySelector(".auth-buttons .auth-btn:nth-child(2)").textContent = translations[lang].buttons.signup;

      // Footer
      const footer = translations[lang].footer;
      document.getElementById("footer-customer-title").textContent = footer.customer;
      document.getElementById("footer-supermarkets").textContent = footer.supermarkets;
      document.getElementById("footer-tips").textContent = footer.tips;
      document.getElementById("footer-invoice").textContent = footer.invoice;
      document.getElementById("footer-employee-title").textContent = footer.employee;
      document.getElementById("footer-careers").textContent = footer.careers;
      document.getElementById("footer-supplier-title").textContent = footer.supplier;
      document.getElementById("footer-society-title").textContent = footer.society;
      document.getElementById("footer-news").textContent = footer.news;
      document.getElementById("footer-press").textContent = footer.press;
      document.getElementById("footer-about").textContent = footer.about;
      document.getElementById("footer-planet").textContent = footer.planet;
      document.getElementById("footer-contact-title").textContent = footer.contact;
      document.getElementById("footer-accessibility").textContent = footer.accessibility;
      document.getElementById("footer-privacy").textContent = footer.privacy;
      document.getElementById("footer-cookies").textContent = footer.cookies;
      document.getElementById("footer-terms").textContent = footer.terms;

      // Закрываем меню
      langBtn.textContent = e.target.textContent + " ▼";
      langMenu.classList.remove("show");
    }
  });
});
