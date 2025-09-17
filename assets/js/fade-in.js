document.querySelectorAll('.flavor-row.fade-in, .hero-left.fade-in').forEach(el => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  }, { threshold: 0.2 });
  observer.observe(el);
});