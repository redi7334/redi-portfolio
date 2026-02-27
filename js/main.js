const form = document.querySelector(".contact-form");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! (We will connect this to real email later)");
  form.reset();
});