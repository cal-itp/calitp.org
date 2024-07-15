window.addEventListener("load", () => {
  const triggerTabList = document.querySelectorAll("#pills-tab button");
  triggerTabList.forEach((triggerEl) => {
    const tabTrigger = new bootstrap.Tab(triggerEl);

    triggerEl.addEventListener("click", (event) => {
      event.preventDefault();
      tabTrigger.show();
    });
  });

  if (window.location.hash.startsWith("#pills")) {
    console.log(window.location.hash);
    const triggerEl = document.querySelector("button[data-bs-target='" + window.location.hash + "']");
    console.log(triggerEl);
    bootstrap.Tab.getInstance(triggerEl).show();
  }
});
