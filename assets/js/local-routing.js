(function () {
  var OFFICIAL_HOST = "www.automatiza.com.ec";

  var routeMap = {
    "/": "index.html",
    "/about-us-2/": "nosotros.html",
    "/tienda/": "productos.html",
    "/servicios/": "servicios.html",
    "/contact/": "contacto.html",
    "/blog/": "blog.html",
    "/galeria/": "galeria.html",
    "/distribucion/": "distribuidores.html",
    "/categoria-producto/puertas-corredizas/": "puertas-corredizas.html",
    "/categoria-producto/utomatiza-puertas-batientes-doble-hoja/": "puertas-batientes.html",
    "/categoria-producto/automatiza-puertas-seccionales-y-basculantes/": "puertas-seccionales-basculantes.html",
    "/categoria-producto/motores/automatiza-para-puertas-enrollables/": "puertas-enrollables.html",
    "/categoria-producto/automatiza-con-accesorios-de-seguridad/": "accesorios-seguridad.html",
    "/producto/electronica-starg8/": "central-electronica-mando.html",
    "/categoria-producto/automatiza-sistemas-de-mando/": "controles-remoto.html",
    "/categoria-producto/automatiza-alimentacion-solar/": "alimentacion-solar.html",
    "/categoria-producto/automatiza-con-barreras-vehiculares/": "barreras-vehiculares.html",
    "/producto/lectoras-de-proximidad/": "lectoras-proximidad.html",
    "/producto/biometricos/": "biometricos.html",
    "/producto/teclados-para-uso-exerios/": "teclados.html",
    "/producto/tarjetas-magneticas/": "tarjetas-magneticas.html",
    "/producto/citofonos/": "citofonos.html"
  };

  var pageContentMap = {
    "index.html": {
      title: "Inicio",
      subtitle: "Bienvenido a Automatiza Control de Accesos",
      description: "Soluciones para accesos vehiculares y peatonales, automatización y seguridad."
    },
    "nosotros.html": {
      title: "Nosotros",
      subtitle: "Conoce nuestra empresa",
      description: "Somos especialistas en automatización de accesos, instalación, soporte técnico y asesoría personalizada."
    },
    "productos.html": {
      title: "Productos",
      subtitle: "Catálogo de productos",
      description: "Explora motores, barreras vehiculares, controles de acceso, accesorios y más soluciones para tu proyecto."
    },
    "servicios.html": {
      title: "Servicios",
      subtitle: "Servicios de instalación y mantenimiento",
      description: "Ofrecemos instalación, mantenimiento preventivo/correctivo y soporte técnico para tus equipos."
    },
    "contacto.html": {
      title: "Contacto",
      subtitle: "Estamos para ayudarte",
      description: "Comunícate con nosotros para cotizaciones, soporte técnico o información de productos y servicios."
    },
    "blog.html": {
      title: "Blog",
      subtitle: "Noticias y recomendaciones",
      description: "Publicamos novedades, consejos de uso y buenas prácticas sobre automatización y control de accesos."
    },
    "galeria.html": {
      title: "Galería",
      subtitle: "Proyectos y trabajos realizados",
      description: "Revisa imágenes de instalaciones y proyectos ejecutados por nuestro equipo."
    },
    "distribuidores.html": {
      title: "Distribuidores",
      subtitle: "Red de distribución",
      description: "Consulta información para distribuidores y cobertura de atención en diferentes zonas."
    },
    "puertas-corredizas.html": {
      title: "Puertas corredizas",
      subtitle: "Motores para puertas corredizas",
      description: "Soluciones para automatizar puertas corredizas residenciales y comerciales."
    },
    "puertas-batientes.html": {
      title: "Puertas batientes",
      subtitle: "Motores para doble hoja",
      description: "Equipos para puertas batientes con apertura suave y segura."
    },
    "puertas-seccionales-basculantes.html": {
      title: "Puertas seccionales y basculantes",
      subtitle: "Automatización de alto desempeño",
      description: "Opciones para seccionales y basculantes con instalación profesional."
    },
    "puertas-enrollables.html": {
      title: "Puertas enrollables",
      subtitle: "Automatización compacta y confiable",
      description: "Motores para puertas enrollables en negocios, bodegas y garajes."
    },
    "accesorios-seguridad.html": {
      title: "Accesorios de seguridad",
      subtitle: "Complementos para tus sistemas",
      description: "Fotoceldas, lámparas y sensores para mejorar seguridad y desempeño."
    },
    "central-electronica-mando.html": {
      title: "Central electrónica de mando",
      subtitle: "Control inteligente",
      description: "Central de control para gestionar automatismos con precisión."
    },
    "controles-remoto.html": {
      title: "Controles remoto",
      subtitle: "Sistemas de mando",
      description: "Controles y receptores para apertura remota confiable."
    },
    "alimentacion-solar.html": {
      title: "Alimentación solar",
      subtitle: "Energía eficiente",
      description: "Kits solares para automatizaciones con autonomía energética."
    },
    "barreras-vehiculares.html": {
      title: "Barreras vehiculares",
      subtitle: "Control de accesos vehiculares",
      description: "Barreras para parqueaderos, condominios y empresas."
    },
    "lectoras-proximidad.html": {
      title: "Lectoras de proximidad",
      subtitle: "Acceso peatonal",
      description: "Sistemas de lectura para control seguro y rápido."
    },
    "biometricos.html": {
      title: "Biométricos",
      subtitle: "Control por huella",
      description: "Dispositivos biométricos para accesos peatonales."
    },
    "teclados.html": {
      title: "Teclados",
      subtitle: "Acceso por clave",
      description: "Teclados de acceso para ambientes residenciales y comerciales."
    },
    "tarjetas-magneticas.html": {
      title: "Tarjetas magnéticas",
      subtitle: "Credenciales de acceso",
      description: "Tarjetas y soluciones de identificación para usuarios."
    },
    "citofonos.html": {
      title: "Citófonos",
      subtitle: "Comunicación y seguridad",
      description: "Equipos de citofonía para control de ingreso y comunicación."
    }
  };

  function getContactEmail() {
    if (window.SITE_CONFIG && window.SITE_CONFIG.contact && window.SITE_CONFIG.contact.email) {
      return window.SITE_CONFIG.contact.email;
    }

    return "xawy77@hotmail.com";
  }

  function ensureHiddenInput(form, name, value) {
    var input = form.querySelector('input[name="' + name + '"]');

    if (!input) {
      input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      form.appendChild(input);
    }

    input.value = value;
  }

  function configureContactForms() {
    var email = getContactEmail();
    var forms = document.querySelectorAll("#site-contact-form, form.wpcf7-form");

    forms.forEach(function (form) {
      form.setAttribute("action", "https://formsubmit.co/" + email);
      form.setAttribute("method", "POST");

      ensureHiddenInput(form, "_captcha", "false");
      ensureHiddenInput(form, "_template", "table");
      ensureHiddenInput(form, "_subject", "Nuevo mensaje desde tu sitio web");
      ensureHiddenInput(form, "_next", window.location.href);

      form.addEventListener("submit", function () {
        var submitButton = form.querySelector('button[type="submit"], input[type="submit"]');

        if (submitButton) {
          submitButton.disabled = true;

          if (submitButton.tagName.toLowerCase() === "button") {
            submitButton.textContent = "Enviando...";
          } else {
            submitButton.value = "Enviando...";
          }
        }
      });
    });
  }

  var productDetailPages = {
    "puertas-corredizas.html": "./assets/img/Dynamos-300x300.jpg",
    "puertas-batientes.html": "./assets/img/modus-300x300.jpg",
    "puertas-seccionales-basculantes.html": "./assets/img/KING-GATES-LINEAR-300x300.jpg",
    "puertas-enrollables.html": "./assets/img/logo.png",
    "accesorios-seguridad.html": "./assets/img/instalación.jpg",
    "central-electronica-mando.html": "./assets/img/logo.png",
    "controles-remoto.html": "./assets/img/logo.png",
    "alimentacion-solar.html": "./assets/img/logo.png",
    "barreras-vehiculares.html": "./assets/img/open-300x300.jpg",
    "lectoras-proximidad.html": "./assets/img/logo.png",
    "biometricos.html": "./assets/img/logo.png",
    "teclados.html": "./assets/img/logo.png",
    "tarjetas-magneticas.html": "./assets/img/logo.png",
    "citofonos.html": "./assets/img/logo.png"
  };

  function normalizePath(pathname) {
    if (!pathname) {
      return "/";
    }

    if (pathname !== "/" && pathname.charAt(pathname.length - 1) !== "/") {
      return pathname + "/";
    }

    return pathname;
  }

  function getCurrentPageName() {
    var pathname = window.location.pathname || "";
    var parts = pathname.split("/").filter(Boolean);

    if (parts.length === 0) {
      return "index.html";
    }

    var last = parts[parts.length - 1];

    if (last.toLowerCase().indexOf(".html") !== -1) {
      return last.toLowerCase();
    }

    return "index.html";
  }

  function toLocalUrl(rawUrl) {
    if (!rawUrl || typeof rawUrl !== "string") {
      return null;
    }

    if (rawUrl.charAt(0) === "#") {
      return rawUrl;
    }

    var parsed;

    try {
      parsed = new URL(rawUrl, window.location.href);
    } catch (error) {
      return null;
    }

    if (parsed.hostname !== OFFICIAL_HOST) {
      return null;
    }

    var normalizedPath = normalizePath(parsed.pathname);

    if (routeMap[normalizedPath]) {
      return "./" + routeMap[normalizedPath] + (parsed.hash || "");
    }

    if (normalizedPath.indexOf("/categoria-producto/") === 0 || normalizedPath.indexOf("/producto/") === 0) {
      return "./productos.html";
    }

    if (normalizedPath.indexOf("/carrito/") === 0 || normalizedPath.indexOf("/checkout/") === 0) {
      return "./productos.html";
    }

    return "./index.html" + (parsed.hash || "");
  }

  function rewriteLinks() {
    var anchors = document.querySelectorAll("a[href]");

    anchors.forEach(function (anchor) {
      var local = toLocalUrl(anchor.getAttribute("href"));
      if (local) {
        anchor.setAttribute("href", local);
      }
    });

    var forms = document.querySelectorAll("form[action]");

    forms.forEach(function (form) {
      var localAction = toLocalUrl(form.getAttribute("action"));
      if (localAction) {
        form.setAttribute("action", localAction);
      }
    });
  }

  function clearActiveMenuState() {
    var menuItems = document.querySelectorAll("li");

    menuItems.forEach(function (item) {
      item.classList.remove("active", "current-menu-item", "current_page_item");
    });
  }

  function setActiveMenuForPage(pageName) {
    clearActiveMenuState();

    var links = document.querySelectorAll("a[href]");

    links.forEach(function (link) {
      var href = (link.getAttribute("href") || "").toLowerCase();
      var normalized = href.replace(/^\.\//, "");

      if (normalized === pageName || (pageName === "index.html" && (normalized === "" || normalized === "#"))) {
        var parent = link.closest("li");
        if (parent) {
          parent.classList.add("active", "current-menu-item", "current_page_item");
        }
      }
    });
  }

  function buildNosotrosPageHtml() {
    return (
      '<section class="container" style="padding:110px 15px 20px;">' +
      '<div class="row">' +
      '<div class="col-md-12">' +
      '<h1 style="margin-bottom:12px;">Nosotros</h1>' +
      '<h3 style="margin-top:0; margin-bottom:18px; font-weight:400;">Conoce nuestra empresa</h3>' +
      '<p style="font-size:18px; line-height:1.7; max-width:950px;">Somos un equipo especializado en automatización y control de accesos. Acompañamos a nuestros clientes desde la asesoría técnica hasta la instalación y el mantenimiento, con soluciones seguras, modernas y adaptadas a cada necesidad.</p>' +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="container" style="padding:10px 15px 10px;">' +
      '<div class="row">' +
      '<div class="col-md-6">' +
      '<div style="background:#f7f7f7; padding:24px; margin-bottom:20px; border-radius:6px;">' +
      '<h3 style="margin-top:0; margin-bottom:12px;">Misión</h3>' +
      '<p style="margin-bottom:0; line-height:1.7;">Brindar soluciones de automatización confiables para accesos residenciales, comerciales e industriales, ofreciendo atención cercana y soporte técnico oportuno.</p>' +
      "</div>" +
      "</div>" +
      '<div class="col-md-6">' +
      '<div style="background:#f7f7f7; padding:24px; margin-bottom:20px; border-radius:6px;">' +
      '<h3 style="margin-top:0; margin-bottom:12px;">Visión</h3>' +
      '<p style="margin-bottom:0; line-height:1.7;">Consolidarnos como referencia en control de accesos en el país, destacando por innovación, calidad de servicio y relaciones duraderas con nuestros clientes.</p>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="container" style="padding:10px 15px 50px;">' +
      '<div class="row">' +
      '<div class="col-md-12">' +
      '<h3 style="margin-top:0; margin-bottom:16px;">Nuestros valores</h3>' +
      '<ul style="padding-left:20px; line-height:1.9; font-size:16px;">' +
      "<li>Compromiso con la seguridad de cada instalación.</li>" +
      "<li>Responsabilidad y cumplimiento en cada proyecto.</li>" +
      "<li>Atención personalizada y acompañamiento técnico.</li>" +
      "<li>Mejora continua en productos, procesos y servicio.</li>" +
      "</ul>" +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  function buildProductosPageHtml() {
    return (
      '<section class="container" style="padding:110px 15px 20px;">' +
      '<div class="row">' +
      '<div class="col-md-12">' +
      '<h1 style="margin-bottom:12px;">Productos</h1>' +
      '<h3 style="margin-top:0; margin-bottom:18px; font-weight:400;">Catálogo de soluciones en automatización</h3>' +
      '<p style="font-size:18px; line-height:1.7; max-width:950px;">Encuentra equipos y accesorios para accesos vehiculares y peatonales. Selecciona la categoría que más se ajuste a tu proyecto.</p>' +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="container" style="padding:10px 15px 50px;">' +
      '<div class="row">' +
      '<div class="col-md-3">' +
      '<div style="background:#f7f7f7; padding:20px; border-radius:6px; margin-bottom:20px;">' +
      '<h4 style="margin-top:0; margin-bottom:15px;">Categorías</h4>' +
      '<ul style="list-style:none; padding-left:0; margin:0; line-height:2;">' +
      '<li><strong>Motores</strong></li>' +
      '<li><a href="./puertas-corredizas.html">Puertas corredizas</a></li>' +
      '<li><a href="./puertas-batientes.html">Puertas batientes</a></li>' +
      '<li><a href="./puertas-seccionales-basculantes.html">Seccionales y basculantes</a></li>' +
      '<li><a href="./puertas-enrollables.html">Puertas enrollables</a></li>' +
      '<li style="margin-top:6px;"><strong>Accesorios</strong></li>' +
      '<li><a href="./accesorios-seguridad.html">Accesorios de seguridad</a></li>' +
      '<li><a href="./central-electronica-mando.html">Central electrónica</a></li>' +
      '<li><a href="./controles-remoto.html">Controles remoto</a></li>' +
      '<li><a href="./alimentacion-solar.html">Alimentación solar</a></li>' +
      "</ul>" +
      "</div>" +
      "</div>" +
      '<div class="col-md-9">' +
      '<div class="row">' +
      '<div class="col-md-4 col-sm-6">' +
      '<div style="background:#f7f7f7; padding:16px; border-radius:6px; margin-bottom:20px; min-height:340px;">' +
      '<img src="./assets/img/Dynamos-300x300.jpg" alt="Motor Dynamos" style="width:100%; height:180px; object-fit:cover; border-radius:4px; margin-bottom:12px;" />' +
      '<h4 style="margin-top:0;">Motor Dynamos</h4>' +
      '<p style="line-height:1.6;">Motor para puertas corredizas con alto rendimiento.</p>' +
      '<a href="./puertas-corredizas.html" class="btn btn-default">Ver más</a>' +
      "</div>" +
      "</div>" +
      '<div class="col-md-4 col-sm-6">' +
      '<div style="background:#f7f7f7; padding:16px; border-radius:6px; margin-bottom:20px; min-height:340px;">' +
      '<img src="./assets/img/modus-300x300.jpg" alt="Brazos Modus" style="width:100%; height:180px; object-fit:cover; border-radius:4px; margin-bottom:12px;" />' +
      '<h4 style="margin-top:0;">Brazos Modus</h4>' +
      '<p style="line-height:1.6;">Automatización para puertas batientes de doble hoja.</p>' +
      '<a href="./puertas-batientes.html" class="btn btn-default">Ver más</a>' +
      "</div>" +
      "</div>" +
      '<div class="col-md-4 col-sm-6">' +
      '<div style="background:#f7f7f7; padding:16px; border-radius:6px; margin-bottom:20px; min-height:340px;">' +
      '<img src="./assets/img/KING-GATES-LINEAR-300x300.jpg" alt="Linear" style="width:100%; height:180px; object-fit:cover; border-radius:4px; margin-bottom:12px;" />' +
      '<h4 style="margin-top:0;">Linear</h4>' +
      '<p style="line-height:1.6;">Equipo robusto para automatización de accesos exigentes.</p>' +
      '<a href="./puertas-seccionales-basculantes.html" class="btn btn-default">Ver más</a>' +
      "</div>" +
      "</div>" +
      '<div class="col-md-4 col-sm-6">' +
      '<div style="background:#f7f7f7; padding:16px; border-radius:6px; margin-bottom:20px; min-height:340px;">' +
      '<img src="./assets/img/open-300x300.jpg" alt="Barrera Open" style="width:100%; height:180px; object-fit:cover; border-radius:4px; margin-bottom:12px;" />' +
      '<h4 style="margin-top:0;">Barrera Open</h4>' +
      '<p style="line-height:1.6;">Control de ingreso vehicular para conjuntos y empresas.</p>' +
      '<a href="./barreras-vehiculares.html" class="btn btn-default">Ver más</a>' +
      "</div>" +
      "</div>" +
      '<div class="col-md-4 col-sm-6">' +
      '<div style="background:#f7f7f7; padding:16px; border-radius:6px; margin-bottom:20px; min-height:340px;">' +
      '<img src="./assets/img/instalación.jpg" alt="Instalación técnica" style="width:100%; height:180px; object-fit:cover; border-radius:4px; margin-bottom:12px;" />' +
      '<h4 style="margin-top:0;">Accesorios de seguridad</h4>' +
      '<p style="line-height:1.6;">Fotoceldas, lámparas y receptores para mayor protección.</p>' +
      '<a href="./accesorios-seguridad.html" class="btn btn-default">Ver más</a>' +
      "</div>" +
      "</div>" +
      '<div class="col-md-4 col-sm-6">' +
      '<div style="background:#f7f7f7; padding:16px; border-radius:6px; margin-bottom:20px; min-height:340px;">' +
      '<img src="./assets/img/logo.png" alt="Kit solar" style="width:100%; height:180px; object-fit:contain; background:#fff; border-radius:4px; margin-bottom:12px;" />' +
      '<h4 style="margin-top:0;">Alimentación solar</h4>' +
      '<p style="line-height:1.6;">Alternativa de energía eficiente para sistemas automatizados.</p>' +
      '<a href="./alimentacion-solar.html" class="btn btn-default">Ver más</a>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="row" style="margin-top:10px;">' +
      '<div class="col-md-12">' +
      '<div style="background:#f7f7f7; padding:24px; border-radius:6px;">' +
      '<h3 style="margin-top:0;">¿Necesitas una cotización?</h3>' +
      '<p style="margin-bottom:14px; line-height:1.7;">Te ayudamos a elegir la mejor solución para tu proyecto de automatización y control de accesos.</p>' +
      '<a href="./contacto.html" class="btn btn-default">Ir a Contacto</a>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  function buildProductDetailPageHtml(pageName, config) {
    var imageSrc = productDetailPages[pageName] || "./assets/img/logo.png";

    return (
      '<section class="container" style="padding:110px 15px 25px;">' +
      '<div class="row">' +
      '<div class="col-md-12">' +
      '<h1 style="margin-bottom:10px;">' + config.title + "</h1>" +
      '<h3 style="margin-top:0; margin-bottom:16px; font-weight:400;">' + config.subtitle + "</h3>" +
      '<p style="font-size:18px; line-height:1.7; max-width:920px;">' + config.description + "</p>" +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="container" style="padding:10px 15px 50px;">' +
      '<div class="row">' +
      '<div class="col-md-5">' +
      '<div style="background:#f7f7f7; padding:16px; border-radius:6px; margin-bottom:20px;">' +
      '<img src="' + imageSrc + '" alt="' + config.title + '" style="width:100%; height:320px; object-fit:cover; border-radius:4px;" />' +
      "</div>" +
      "</div>" +
      '<div class="col-md-7">' +
      '<div style="background:#f7f7f7; padding:24px; border-radius:6px; margin-bottom:20px;">' +
      '<h3 style="margin-top:0;">¿Qué incluye?</h3>' +
      '<ul style="padding-left:20px; line-height:1.9; font-size:16px;">' +
      "<li>Asesoría para seleccionar la mejor opción.</li>" +
      "<li>Equipos confiables con instalación profesional.</li>" +
      "<li>Soporte técnico y mantenimiento.</li>" +
      "</ul>" +
      '<a href="./contacto.html" class="btn btn-default">Solicitar cotización</a> ' +
      '<a href="./productos.html" class="btn btn-link">Volver a Productos</a>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  function buildContactoPageHtml() {
    var email = getContactEmail();

    return (
      '<section class="container" style="padding:110px 15px 25px;">' +
      '<div class="row">' +
      '<div class="col-md-12">' +
      '<h1 style="margin-bottom:10px;">Contáctanos</h1>' +
      '<h3 style="margin-top:0; margin-bottom:16px; font-weight:400;">Estamos listos para ayudarte</h3>' +
      '<p style="font-size:18px; line-height:1.7; max-width:920px;">Envíanos tu consulta, cotización o comentario. Te responderemos a la brevedad.</p>' +
      "</div>" +
      "</div>" +
      "</section>" +
      '<section class="container" style="padding:10px 15px 50px;">' +
      '<div class="row">' +
      '<div class="col-md-5">' +
      '<div style="background:#ffffff; border:1px solid #d9d9d9; border-radius:8px; padding:24px; margin-bottom:20px;">' +
      '<h3 style="margin-top:0; margin-bottom:14px;">Información de contacto</h3>' +
      '<p style="line-height:1.8; margin:0 0 8px;"><strong>Email:</strong> ' + email + "</p>" +
      '<p style="line-height:1.8; margin:0 0 8px;"><strong>Celular:</strong> 0995212914</p>' +
      '<p style="line-height:1.8; margin:0;"><strong>Dirección:</strong> Av. 12 de Octubre N14-124 y Pasaje Alejandro Andrade Frente a Casa de la Cultura Agora</p>' +
      "</div>" +
      "</div>" +
      '<div class="col-md-7">' +
      '<form id="site-contact-form" action="https://formsubmit.co/' + email + '" method="POST" style="background:#ffffff; border:1px solid #d9d9d9; border-radius:8px; padding:24px;">' +
      '<input type="hidden" name="_captcha" value="false" />' +
      '<input type="hidden" name="_subject" value="Nuevo mensaje desde tu sitio web" />' +
      '<input type="hidden" name="_template" value="table" />' +
      '<div class="form-group" style="margin-bottom:12px;">' +
      '<input class="form-control" type="text" name="Nombre" placeholder="Tu nombre" required />' +
      "</div>" +
      '<div class="form-group" style="margin-bottom:12px;">' +
      '<input class="form-control" type="email" name="Email" placeholder="Tu correo" required />' +
      "</div>" +
      '<div class="form-group" style="margin-bottom:12px;">' +
      '<input class="form-control" type="text" name="Telefono" placeholder="Tu celular" />' +
      "</div>" +
      '<div class="form-group" style="margin-bottom:12px;">' +
      '<input class="form-control" type="text" name="Asunto" placeholder="Asunto" required />' +
      "</div>" +
      '<div class="form-group" style="margin-bottom:16px;">' +
      '<textarea class="form-control" name="Mensaje" rows="6" placeholder="Escribe tu mensaje" required></textarea>' +
      "</div>" +
      '<button type="submit" class="btn btn-default" style="width:100%;">Enviar mensaje</button>' +
      "</form>" +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  function injectPageContent(pageName) {
    if (pageName === "index.html") {
      return;
    }

    var config = pageContentMap[pageName];

    if (!config) {
      return;
    }

    document.title = config.title + " - Automatiza";

    var entryContent = document.querySelector(".entry-content-page");

    if (!entryContent) {
      return;
    }

    if (pageName === "nosotros.html") {
      entryContent.innerHTML = buildNosotrosPageHtml();
      return;
    }

    if (pageName === "productos.html") {
      entryContent.innerHTML = buildProductosPageHtml();
      return;
    }

    if (pageName === "contacto.html") {
      entryContent.innerHTML = buildContactoPageHtml();
      return;
    }

    if (productDetailPages[pageName]) {
      entryContent.innerHTML = buildProductDetailPageHtml(pageName, config);
      return;
    }

    entryContent.innerHTML =
      '<section class="container" style="padding:110px 15px 40px;">' +
      '<div class="row">' +
      '<div class="col-md-12">' +
      '<h1 style="margin-bottom:12px;">' + config.title + "</h1>" +
      '<h3 style="margin-top:0; margin-bottom:18px; font-weight:400;">' + config.subtitle + "</h3>" +
      '<p style="font-size:18px; line-height:1.7; max-width:900px;">' + config.description + "</p>" +
      "</div>" +
      "</div>" +
      "</section>";
  }

  function setupPage() {
    var currentPage = getCurrentPageName();
    injectPageContent(currentPage);
    setActiveMenuForPage(currentPage);
    configureContactForms();
  }

  document.addEventListener("click", function (event) {
    var anchor = event.target.closest("a[href]");

    if (!anchor) {
      return;
    }

    var local = toLocalUrl(anchor.getAttribute("href"));

    if (!local) {
      return;
    }

    event.preventDefault();
    window.location.href = local;
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      rewriteLinks();
      setupPage();
    });
  } else {
    rewriteLinks();
    setupPage();
  }
})();
