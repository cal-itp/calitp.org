window.addEventListener("load", () => {
  const sidebarLinks = document.querySelectorAll(".link-sidebar");

  // watch for changes to window.location.hash value that start with #stories
  // add active class on the sidebar target anchor
  // else, reset the table of contents
  function checkStoriesHash() {
    if (window.location.hash.startsWith("#stories")) {
      sidebarLinks.forEach((link) => link.classList.remove("active"));
      linkPair = document.querySelectorAll("a[href='" + window.location.hash + "']");
      linkPair.forEach((link) => link.classList.add("active"));
    } else if (window.location.hash == "") {
      sidebarLinks.forEach((link) => link.classList.remove("active"));
    }
  }

  window.onhashchange = checkStoriesHash;

  // call the function once on page load to check for the initial hash
  checkStoriesHash();
});
