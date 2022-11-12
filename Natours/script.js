// select the element with the id of "navigation-toggle"
const navigationToggle = document.querySelector("#navigation-toggle");

// select all navigation links
const navLinks = document.querySelectorAll(".navigation__link");

// add click event listener to each navLinks to close the navigation
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigationToggle.checked = false;
  });
});
