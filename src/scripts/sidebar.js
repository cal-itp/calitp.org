window.addEventListener("load", () => {
  const sidebarLinks = document.querySelectorAll(".link-sidebar");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (clicked) => {
      sidebarLinks.forEach((link) => link.classList.remove("active"));
      category = clicked.target.getAttribute("data-category");
      linkPair = document.querySelectorAll('[data-category="' + category + '"]');
      linkPair.forEach((link) => link.classList.add("active"));
    });
  });
});
