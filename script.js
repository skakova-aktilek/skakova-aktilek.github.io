function showTab(tabId, clickedButton) {
  const contents = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab");

  contents.forEach((content) => content.classList.remove("active"));
  buttons.forEach((button) => button.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  clickedButton.classList.add("active");
}
