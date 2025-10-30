const btn = document.querySelector(".real-glass-btn");

btn.addEventListener("mousemove", (e) => {
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rotateX = ((y - rect.height / 2) / 8) * -1;
  const rotateY = (x - rect.width / 2) / 8;
  btn.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

btn.addEventListener("mouseleave", () => {
  btn.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
});
