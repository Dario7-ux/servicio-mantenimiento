(function () {
  var config = window.SITE_CONFIG;

  if (!config) {
    return;
  }

  function setText(id, value) {
    var element = document.getElementById(id);
    if (element && typeof value === "string") {
      element.textContent = value;
    }
  }

  function setHref(id, value, prefix) {
    var element = document.getElementById(id);
    if (element && typeof value === "string") {
      element.setAttribute("href", (prefix || "") + value);
    }
  }

  setText("site-address", config.contact && config.contact.address);
  setText("site-phone-text", config.contact && config.contact.phone);
  setText("site-email-text", config.contact && config.contact.email);
  setText("footer-call-phone", config.contact && config.contact.phone);

  if (config.contact && config.contact.address) {
    setText(
      "footer-contact-address",
      "Dirección: " + config.contact.address
    );
  }

  if (config.contact && config.contact.phone) {
    setText("footer-contact-cell", "Cel: " + config.contact.phone);
  }

  setHref("site-phone-link", config.contact && config.contact.phone, "tel:");
  setHref("site-email-link", config.contact && config.contact.email, "mailto:");
  setHref("footer-contact-email-link", config.contact && config.contact.email, "mailto:");
  setText("footer-contact-email-link", config.contact && config.contact.email);

  setHref("site-facebook-link", config.social && config.social.facebook);
  setHref("site-twitter-link", config.social && config.social.twitter);
  setHref("site-instagram-link", config.social && config.social.instagram);
  setHref("site-youtube-link", config.social && config.social.youtube);

  if (
    window.njt_wa &&
    window.njt_wa.accounts &&
    window.njt_wa.accounts.length > 0 &&
    config.contact &&
    config.contact.whatsappIntl
  ) {
    window.njt_wa.accounts[0].number = config.contact.whatsappIntl;
    window.njt_wa.accounts[0].title = config.contact.phone || config.contact.whatsappIntl;
  }

  if (config.contact && config.contact.whatsappIntl) {
    var whatsappDigits = String(config.contact.whatsappIntl).replace(/\D/g, "");
    var popupLink = document.querySelector(".wa__popup_content_item a[href*='api.whatsapp.com/send']");
    var popupDuty = document.querySelector(".wa__popup_txt .wa__member_duty");

    if (popupLink && whatsappDigits) {
      popupLink.setAttribute(
        "href",
        "https://api.whatsapp.com/send?phone=" +
          whatsappDigits +
          "&text=Hola!%20Deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos"
      );
    }

    if (popupDuty) {
      popupDuty.textContent = config.contact.phone || config.contact.whatsappIntl;
    }
  }

  (function forceSliderEveryFiveSeconds() {
    var sliderSelector = "#rev_slider_1_1";
    var intervalMs = 5000;
    var intervalId;

    function startAutoAdvance() {
      if (intervalId) {
        return;
      }

      intervalId = window.setInterval(function () {
        var sliderElement = document.querySelector(sliderSelector);
        if (!sliderElement || typeof window.jQuery === "undefined") {
          return;
        }

        var sliderApi = window.jQuery(sliderSelector);
        if (!sliderApi || typeof sliderApi.revnext !== "function") {
          return;
        }

        sliderApi.revnext();
      }, intervalMs);
    }

    function stopAutoAdvance() {
      if (!intervalId) {
        return;
      }

      window.clearInterval(intervalId);
      intervalId = null;
    }

    startAutoAdvance();

    var sliderContainer = document.querySelector(sliderSelector);
    if (sliderContainer) {
      sliderContainer.addEventListener("mouseenter", stopAutoAdvance);
      sliderContainer.addEventListener("mouseleave", startAutoAdvance);
    }
  })();
})();
