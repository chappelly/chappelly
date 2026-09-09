// Chappelly site script. No dependencies.
(function () {
  "use strict";

  // Keep the footer year current.
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Mobile navigation toggle.
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) {
    return;
  }

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Close the menu after choosing a link.
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      setOpen(false);
    }
  });

  // Close on Escape.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Reset state if the viewport grows past the mobile breakpoint.
  var mq = window.matchMedia("(min-width: 641px)");
  function onChange(e) {
    if (e.matches) {
      setOpen(false);
    }
  }
  if (mq.addEventListener) {
    mq.addEventListener("change", onChange);
  } else if (mq.addListener) {
    mq.addListener(onChange);
  }
})();
