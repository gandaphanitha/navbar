function toggleMenu() {
  var links = document.querySelector(".links");
  links.classList.toggle("code");
  var shoemenu = document.querySelector(".menubar").firstElementChild;
  if (links.classList.contains("code")) {
      shoemenu.classList.replace("fa-bars", "fa-close");
  } else {
      shoemenu.classList.replace("fa-close", "fa-bars");
  }
}

const menubar = document.querySelector(".menubar");
var links = document.querySelector(".links");
menubar.addEventListener('click', toggleMenu);