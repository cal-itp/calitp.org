const pills = document.querySelectorAll("button[data-bs-toggle='pill']");
pills.forEach((p) => {
  // mouse-click or Enter key will trigger "click" event and should toggle the pill's state
  p.addEventListener("click", (event) => toggleSelection(p.id));

  // arrow keys will trigger "keyup" event and should set pill to "selected" (no way to deselect using arrow key)
  p.addEventListener("keyup", (event) => selectByArrowKey(event, p));

  // mouse-click, Enter key, or arrow keys will trigger "shown.bs.tab" event and should hide the "all" tab
  p.addEventListener("shown.bs.tab", (event) => hideAllTab());
});

function toggleSelection(id) {
  const pillToToggle = document.querySelector("#" + id);
  if (!pillToToggle.classList.contains("cal-itp-selected")) {
    select(pillToToggle);
  } else {
    pillToToggle.classList.remove("cal-itp-selected");
    pillToToggle.classList.remove("active");
    hideTab(pillToToggle.id);

    showAllTab();
  }
}

function select(pill) {
  pill.classList.add("cal-itp-selected");

  const pills = document.querySelectorAll("button[data-bs-toggle='pill']");
  let pillSet = new Set(pills);
  pillSet.delete(pill);
  pillSet.forEach((pill) => pill.classList.remove("cal-itp-selected"));
}

function hideTab(pillId) {
  const selectedTab = document.querySelector("div[aria-labelledby='" + pillId + "']");
  selectedTab.classList.remove("show");
  selectedTab.classList.remove("active");
}

function selectByArrowKey(event, pill) {
  if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
    select(pill);
  }
}

function showAllTab() {
  const allTab = document.querySelector("#pills-all");
  allTab.classList.add("show");
  allTab.classList.add("active");
}

function hideAllTab() {
  const allTab = document.querySelector("#pills-all");
  allTab.classList.remove("show");
  allTab.classList.remove("active");
}
