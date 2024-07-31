window.addEventListener("load", () => {
  const sidebarLinks = document.querySelectorAll(".link-sidebar");

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (clicked) => {
      sidebarLinks.forEach((link) => link.classList.remove("active"));
      // update the window.location.hash with the clicked link's anchor target
      window.location.hash = clicked.target.attributes.href.nodeValue;
    });
  });

  // watch for changes to window.location.hash value that start with #stories
  // add active class on the sidebar target anchor
  function checkStoriesHash() {
    if (window.location.hash.startsWith("#stories")) {
      sidebarLinks.forEach((link) => link.classList.remove("active"));
      linkPair = document.querySelectorAll("a[href='" + window.location.hash + "']");
      linkPair.forEach((link) => link.classList.add("active"));
    }
  }

  window.onhashchange = checkStoriesHash;

  // call the function once on page load to check for the initial hash
  checkStoriesHash();
});
