const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu")

const hamburgerToggle = () => {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
};

btn.addEventListener("click", hamburgerToggle);
