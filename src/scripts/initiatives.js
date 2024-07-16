window.addEventListener("load", () => {
  const triggerTabList = document.querySelectorAll("#pills-tab button");
  triggerTabList.forEach((triggerEl) => {
    const tabTrigger = new bootstrap.Tab(triggerEl);

    triggerEl.addEventListener("click", (event) => {
      event.preventDefault();
      tabTrigger.show();
    });
  });

  if (window.location.hash.startsWith("#initiatives")) {
    const triggerEl = document.querySelector("button[data-bs-target='" + window.location.hash + "']");
    bootstrap.Tab.getInstance(triggerEl).show();
  }
});
