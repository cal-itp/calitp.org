window.addEventListener("load", () => {
  const sidebarLinks = document.querySelectorAll(".link-sidebar");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (clicked) => {
      sidebarLinks.forEach((link) => link.classList.remove("active"));
      findPairAndAddActive(clicked.target.attributes.href.nodeValue);
    });
  });

  // if a user enters page with an anchor tag hash
  function checkStoriesHash() {
    if (window.location.hash.startsWith("#stories")) {
      findPairAndAddActive(window.location.hash);
    }
  }

  // find link pair and add active class to both links
  function findPairAndAddActive(hash) {
    linkPair = document.querySelectorAll("a[href='" + hash + "']");
    linkPair.forEach((link) => link.classList.add("active"));
  }

  // call the function once on page load to check for the initial hash
  checkStoriesHash();
});
