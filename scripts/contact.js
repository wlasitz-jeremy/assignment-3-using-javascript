// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  contactPage.textContent = "";
  const p = document.createElement("p");
  p.textContent = "Thank you for your message";
  p.style.fontSize = "24px";
  p.style.textAlign = "center";
  p.style.marginTop = "25px";
  p.style.marginBottom = "50px";
  p.style.height = "404px";
  contactPage.appendChild(p);
});
