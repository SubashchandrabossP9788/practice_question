var sidenavclose = document.querySelector(".sidenavclose");
var navbar = document.querySelector(".navbar");

function showNavbar() {
  navbar.style.left = "0px";
  sidenavclose.style.left = "250px";
}
function closenavbar() {
  sidenavclose.style.left = "-100%";
  navbar.style.left = "-60%";
}