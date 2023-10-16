const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".box-content");
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));
    button.classList.add("active");
    const tabId = button.getAttribute("data-id");
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add("active");
  });
});
