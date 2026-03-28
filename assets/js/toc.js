// Table of contents scroll-spy
(function () {
  var toc = document.getElementById('toc');
  if (!toc) return;

  var links = toc.querySelectorAll('a');
  if (!links.length) return;

  var headings = [];
  for (var i = 0; i < links.length; i++) {
    var id = links[i].getAttribute('href');
    if (id && id.charAt(0) === '#') {
      var el = document.getElementById(id.slice(1));
      if (el) headings.push({ link: links[i], el: el });
    }
  }

  function update() {
    var scrollTop = window.scrollY + 100;
    var active = null;

    for (var i = 0; i < headings.length; i++) {
      if (headings[i].el.offsetTop <= scrollTop) {
        active = headings[i];
      }
    }

    for (var j = 0; j < headings.length; j++) {
      headings[j].link.classList.toggle('is-active', headings[j] === active);
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
