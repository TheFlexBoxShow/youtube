const container = document.getElementById("vibe-container");

const moods = [
  { emoji: "😄", color: "#00c9a7" },
  { emoji: "😐", color: "#6c757d" },
  { emoji: "😢", color: "#3f51b5" },
  { emoji: "😡", color: "#dc3545" },
  { emoji: "🤯", color: "#6610f2" }
];

container.addEventListener("click", (e) => {
  const ripple = document.createElement("div");
  ripple.className = "ripple";

  const mood = moods[Math.floor(Math.random() * moods.length)];
  ripple.innerText = mood.emoji;
  ripple.style.left = `${e.clientX - 40}px`;
  ripple.style.top = `${e.clientY - 40}px`;
  ripple.style.background = `${mood.color}55`;

  container.appendChild(ripple);

  container.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, ${mood.color}, #0f0f0f)`;

  setTimeout(() => {
    ripple.remove();
  }, 1200);
});
