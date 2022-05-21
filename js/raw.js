const titleSel = document.querySelector("title");
const title = titleSel.innerText;

const home = document.querySelector(".home-link");
const service = document.querySelector(".services-link");
const portfolio = document.querySelector(".portfolio-link");
const contact = document.querySelector(".contact-link");
const about = document.querySelector(".about-link");

const homeText = "Home";
const serText = "Services";
const portText = "Portfolio";
const contText = "Contact";
const aboutText = "About";

if ((title.contains = homeText)) {
  home.style.color = "#fff";
} else if ((title.contains = serText)) {
  service.style.color = "#fff";
} else if ((title.contains = portText)) {
  service.style.color = "#fff";
} else if ((title.contains = contText)) {
  service.style.color = "#fff";
} else if ((title.contains = aboutText)) {
  service.style.color = "#fff";
}

console.log(title);
