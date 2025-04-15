function handleScroll() {
  const header = document.getElementById("main-header");
  const menunav = document.getElementById("navbar-cta");
  const contentNav = document.getElementById("content-menu-nav");

  if (!header) return;

  if (window.scrollY > 400) {
    header.classList.remove("absolute");
    header.classList.add("bg-white", "shadow-md", "fixed");
    menunav?.classList.remove("flex-auto");
    menunav?.classList.add("flex");
    contentNav?.classList.remove("md:justify-normal");
    contentNav?.classList.add("md:justify-arround");
  } else {
    header.classList.add("absolute");
    header.classList.remove("bg-white", "shadow-md", "fixed");
    menunav?.classList.add("flex-auto");
    menunav?.classList.remove("flex");
    contentNav?.classList.remove("md:justify-arround");
    contentNav?.classList.add("md:justify-normal");
  }
}

// Adiciona o evento de scroll
document.addEventListener("scroll", handleScroll);
