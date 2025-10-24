const orb = document.querySelector('.liquid-orb');

orb.addEventListener('mousemove', (e) => {
  const rect = orb.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  orb.style.setProperty('--x', `${x}px`);
  orb.style.setProperty('--y', `${y}px`);
});

orb.addEventListener('mouseleave', () => {
  orb.style.setProperty('--x', `50%`);
  orb.style.setProperty('--y', `50%`);
});
