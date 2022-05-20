/* =======================================
    SCROLL TO TOP FUNCTIONALITY
   ======================================= */
const scrollView = document.querySelector(".header");
const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

function scrollTop() {
  scrollView.scrollIntoView({ behavior: "smooth" });
}

scrollElement.addEventListener("click", scrollTop);
