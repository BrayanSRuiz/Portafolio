const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toogleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toogleMenu);
closeMenuBtn.addEventListener("click", toogleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const menuLink = document.querySelector(`.menu a[href ='#${id}']`);

    if (entry.isIntersecting) {
      document.querySelector(".menu a.selected").classList.remove("selected")
      menuLink.classList.add("selected");
    }
  });
  },
  {rootMargin: "-30% 0px -70% 0px"}
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);

  if (target) {
    observer.observe(target);
  }
});
