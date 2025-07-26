const toggleBtn = document.getElementById("toggleShare");
const iconShare = document.querySelector(".icon-share");
const iconCross = document.querySelector(".icon-cross");
const appIcons = document.querySelectorAll(".app-icon");

let isOpen = false;

toggleBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  // Toggle icons
  iconShare.style.opacity = isOpen ? "0" : "1";
  iconCross.style.opacity = isOpen ? "1" : "0";

  // Animate social icons
  if (isOpen) {
    appIcons.forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.add("visible");
      }, index * 100);
    });
  } else {
    [...appIcons].reverse().forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.remove("visible");
      }, index * 100);
    });
  }
});
