window.addEventListener("load", () => {
  const triggerTabList = document.querySelectorAll("#pills-tab button");

  triggerTabList.forEach((triggerEl) => {
    triggerEl.addEventListener("click", (event) => {
      event.preventDefault();
      // update the window.location.hash with the clicked pill's target
      window.location.hash = event.target.getAttribute("data-bs-target").replace("#", "");
    });
  });

  // watch for changes to the window.location.hash value
  function checkInitiativesHash() {
    if (window.location.hash.startsWith("#initiatives")) {
      const triggerEl = document.querySelector("button[data-bs-target='" + window.location.hash + "']");
      const tabTrigger = new bootstrap.Tab(triggerEl);
      tabTrigger.show();
    }
  }

  window.onhashchange = checkInitiativesHash;

  // call the function once on page load to check for the initial hash
  checkInitiativesHash();
});
