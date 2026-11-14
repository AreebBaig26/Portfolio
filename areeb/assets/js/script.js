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
<<<<<<< HEAD

/* =========================================================
   UPDATE: CERTIFICATE PREVIEW MODAL
   Looks for assets/certificates/<slug>.(jpg|jpeg|png|webp|pdf)
   and shows a friendly message if the file has not been added yet.
   ========================================================= */
(function () {
  var modal = document.getElementById('certModal');
  if (!modal) return;

  var viewer = document.getElementById('certViewer');
  var titleEl = document.getElementById('certModal-label');
  var metaEl = document.getElementById('certModalMeta');
  var openLink = document.getElementById('certOpenLink');
  var IMG_EXT = ['jpg', 'jpeg', 'png', 'webp'];
  var token = 0;

  function probeImage(url) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onload = function () { resolve(img); };
      img.onerror = function () { resolve(null); };
      img.src = url;
    });
  }

  function probePdf(url) {
    if (!window.fetch || location.protocol === 'file:') return Promise.resolve(false);
    return fetch(url, { method: 'HEAD' }).then(function (r) { return r.ok; }).catch(function () { return false; });
  }

  function showPlaceholder(slug) {
    viewer.innerHTML = '';
    var box = document.createElement('div');
    box.className = 'cert-placeholder';
    box.innerHTML = '<i class="bi bi-patch-check"></i><p>Certificate preview will be available soon.</p>';
    viewer.appendChild(box);
    if (window.console) console.info('[portfolio] Certificate file not found. Add assets/certificates/' + slug + '.jpg (or .png / .webp / .pdf)');
  }

  function load(slug, myToken) {
    var base = 'assets/certificates/' + slug;
    var chain = Promise.resolve(null);
    IMG_EXT.forEach(function (ext) {
      chain = chain.then(function (found) {
        if (found) return found;
        return probeImage(base + '.' + ext).then(function (img) {
          return img ? { type: 'img', url: base + '.' + ext } : null;
        });
      });
    });
    chain = chain.then(function (found) {
      if (found) return found;
      return probePdf(base + '.pdf').then(function (ok) {
        return ok ? { type: 'pdf', url: base + '.pdf' } : null;
      });
    });
    chain.then(function (found) {
      if (myToken !== token) return; // modal was reopened for another certificate
      if (!found) { showPlaceholder(slug); return; }
      viewer.innerHTML = '';
      if (found.type === 'img') {
        var im = document.createElement('img');
        im.src = found.url;
        im.alt = titleEl.textContent;
        viewer.appendChild(im);
      } else {
        var fr = document.createElement('iframe');
        fr.src = found.url;
        fr.title = titleEl.textContent;
        viewer.appendChild(fr);
      }
      openLink.href = found.url;
      openLink.classList.remove('d-none');
    });
  }

  modal.addEventListener('show.bs.modal', function (event) {
    var btn = event.relatedTarget;
    if (!btn) return;
    token += 1;
    var slug = btn.getAttribute('data-cert-slug');
    titleEl.textContent = btn.getAttribute('data-cert-title');
    var parts = [btn.getAttribute('data-cert-cat'), btn.getAttribute('data-cert-org'), btn.getAttribute('data-cert-dur') ? 'Duration: ' + btn.getAttribute('data-cert-dur') : '']
      .filter(function (p) { return p; });
    metaEl.textContent = parts.join('  ·  ');
    openLink.classList.add('d-none');
    openLink.removeAttribute('href');
    viewer.innerHTML = '<p class="mb-0">Loading certificate…</p>';
    load(slug, token);
  });

  modal.addEventListener('hidden.bs.modal', function () {
    token += 1;
    viewer.innerHTML = '';
  });
})();
=======
>>>>>>> aeab3796daba5a2bb548e3634d370f43f6ea17a8
