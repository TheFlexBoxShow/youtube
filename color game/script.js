document.addEventListener("mousemove", function(e) {
    let splash = document.createElement("div");
    splash.className = "splash";

    // Random size and color
    let size = Math.random() * 20 + 10;
    splash.style.width = `${size}px`;
    splash.style.height = `${size}px`;
    splash.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;

    // Position
    splash.style.left = `${e.clientX - size / 2}px`;
    splash.style.top = `${e.clientY - size / 2}px`;

    document.body.appendChild(splash);

    // Remove after animation
    setTimeout(() => {
        splash.remove();
    }, 1000);
});
