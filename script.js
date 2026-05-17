function showTab(tabName) {
  const tabContents = document.querySelectorAll(".tab-content");
  const tabButtons = document.querySelectorAll(".tab");

  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(tabName).classList.add("active");
  event.target.classList.add("active");
}
