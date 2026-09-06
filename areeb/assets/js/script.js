/* =========================================================
   MIRZA AREEB BAIG — PORTFOLIO SCRIPT
   Vanilla JavaScript — no frameworks
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Current year in footer ---------- */
  var yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Navbar background on scroll ---------- */
  var nav = document.getElementById('mainNav');
  function handleNavScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  handleNavScroll();
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  /* ---------- Back to top button ---------- */
  var backToTop = document.getElementById('backToTop');
  function handleBackToTop() {
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }
  handleBackToTop();
  window.addEventListener('scroll', handleBackToTop, { passive: true });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Close mobile navbar after selecting a section ---------- */
  var navMenu = document.getElementById('navMenu');
  var navLinks = document.querySelectorAll('.nav-scroll');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navMenu.classList.contains('show')) {
        var bsCollapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
        bsCollapse.hide();
      }
    });
  });

  /* ---------- Active navbar link on scroll (scrollspy-lite) ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var navAnchors = document.querySelectorAll('.nav-link[href^="#"]');

  function setActiveLink() {
    var scrollPos = window.scrollY + 120;
    var currentId = '';

    sections.forEach(function (section) {
      if (scrollPos >= section.offsetTop) {
        currentId = section.getAttribute('id');
      }
    });

    navAnchors.forEach(function (anchor) {
      anchor.classList.remove('active');
      if (anchor.getAttribute('href') === '#' + currentId) {
        anchor.classList.add('active');
      }
    });
  }
  setActiveLink();
  window.addEventListener('scroll', setActiveLink, { passive: true });

  /* ---------- Scroll reveal animation ---------- */
  var revealEls = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: reveal everything immediately if IntersectionObserver is unsupported
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---------- Contact form (mailto — no backend on GitHub Pages) ---------- */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('cf-name').value.trim();
      var email = document.getElementById('cf-email').value.trim();
      var message = document.getElementById('cf-message').value.trim();

      var subject = encodeURIComponent('Portfolio inquiry from ' + name);
      var body = encodeURIComponent(
        message + '\n\n— ' + name + ' (' + email + ')'
      );

      window.location.href =
        'mailto:areebbaig26@gmail.com?subject=' + subject + '&body=' + body;
    });
  }

});
