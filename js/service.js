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

/* =======================================
                COLOR CHANGE
   ======================================= */
const service = document.querySelector(".services-link");
// service.style.color = "var(--helper)";
service.classList.add("active");

const flinks = document.querySelector(".f-ser-link");
flinks.classList.add("f-links-active");

/* =======================================
                RESPONSIVE NAVBAR COMPONENT
   ======================================= */
const mobile_nav = document.querySelector(".mobile-nav-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("navActive");
});
