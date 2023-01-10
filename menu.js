document.addEventListener("DOMContentLoaded", function () {
  function showMenu() {
    const menu = document.querySelector("section.menu");
    menu.style.height = "100%";
  }

  document.getElementById("menu-button").addEventListener("click", showMenu);
});
