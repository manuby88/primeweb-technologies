// Mobile menu
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }
})();

// Contact form (Netlify Forms)
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('form-status');
  var button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.className = 'form-status';
    status.textContent = 'Sending…';
    button.disabled = true;

    // Netlify expects a URL-encoded body
    var body = new URLSearchParams(new FormData(form)).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Request failed');
        form.reset();
        status.className = 'form-status ok';
        status.textContent = 'Thank you! Your message has been sent. We will reply shortly.';
      })
      .catch(function () {
        status.className = 'form-status err';
        status.textContent = 'Sorry, something went wrong. Please WhatsApp us on +256 706 003 669 or email primeweb243@gmail.com.';
      })
      .finally(function () {
        button.disabled = false;
      });
  });
})();

// Location cards switch the map
(function () {
  var cards = document.querySelectorAll('.loc-card');
  var frame = document.getElementById('map-frame');
  var open = document.getElementById('map-open');
  if (!cards.length || !frame) return;
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      cards.forEach(function (c) { c.classList.remove('active'); });
      card.classList.add('active');
      frame.src = card.getAttribute('data-embed');
      if (open) open.href = card.getAttribute('data-link');
    });
  });
})();
