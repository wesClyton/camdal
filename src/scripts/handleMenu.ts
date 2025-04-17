function initializeMenuHandler() {
  const buttonMenu = document.getElementById("activeMenu");

  buttonMenu?.addEventListener("click", () => {
    const menu = document.getElementById("navbar-cta");
    const isActive = menu?.classList.contains("hidden");
    menu?.classList.toggle("hidden", !isActive);
    buttonMenu.setAttribute("aria-expanded", String(!isActive));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeMenuHandler();
});

document.addEventListener("astro:after-swap", () => {
  initializeMenuHandler();
});
