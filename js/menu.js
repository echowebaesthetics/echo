
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const hamMenu = document.querySelector(".ham-menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

const offScreenMenu = document.querySelector(".off-screen-menu");

open.addEventListener("click", () => {
    hamMenu.classList.toggle("active-nav");
    open.classList.toggle("active");
    close.classList.toggle("active");
});

close.addEventListener("click", () => {
    hamMenu.classList.toggle("active-nav");
    open.classList.toggle("active");
    close.classList.toggle("active");
});