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

  // if a user enters page with an anchor tag hash
  function checkStoriesHash() {
    if (window.location.hash.startsWith("#stories")) {
      linkPair = document.querySelectorAll("a[href='" + window.location.hash + "']");
      linkPair.forEach((link) => link.classList.add("active"));
    }
  }

  // call the function once on page load to check for the initial hash
  checkStoriesHash();
});
