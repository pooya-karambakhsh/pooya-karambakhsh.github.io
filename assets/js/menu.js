document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    // Toggle menu on hamburger click
    menuToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.toggle('active');
      menuToggle.classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (
        nav.classList.contains('active') &&
        !nav.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        nav.classList.remove('active');
        menuToggle.classList.remove('open');
      }
    });

    // Optional: close menu when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.classList.remove('open');
      });
    });
  }
});
