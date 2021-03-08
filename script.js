const toggleBtn = document.querySelector(".toggle");
const toggleIcon = toggleBtn.querySelector("i");
const navigation = document.querySelector(".navigation ul");

toggleBtn.addEventListener("click", () => {
  if (toggleIcon.classList.contains("fa-chevron-right")) {
    toggleIcon.classList.remove("fa-chevron-right");
    toggleIcon.classList.add("fa-chevron-left");
  } else {
    toggleIcon.classList.remove("fa-chevron-left");
    toggleIcon.classList.add("fa-chevron-right");
  }

  navigation.classList.toggle("toggle-active");
  toggleBtn.classList.toggle("toggle-btn-active");
});
