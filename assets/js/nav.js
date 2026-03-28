// Nav scroll effect + mobile hamburger
(function () {
  var nav = document.getElementById('nav');
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');

  // Glassmorphism shadow on scroll
  var scrolled = false;
  window.addEventListener('scroll', function () {
    var shouldBeScrolled = window.scrollY > 10;
    if (shouldBeScrolled !== scrolled) {
      scrolled = shouldBeScrolled;
      nav.classList.toggle('is-scrolled', scrolled);
    }
  }, { passive: true });

  // Mobile hamburger
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('is-active');
      mobileNav.classList.toggle('is-open');
      document.body.style.overflow = mobileNav.classList.contains('is-open') ? 'hidden' : '';
    });
  }

  // Close mobile nav on link click
  var mobileLinks = document.querySelectorAll('.mobile-nav__link');
  for (var i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', function () {
      hamburger.classList.remove('is-active');
      mobileNav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  }
})();
