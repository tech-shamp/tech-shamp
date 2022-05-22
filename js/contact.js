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
const contact = document.querySelector(".contact-link");
// contact.style.color = "var(--helper)";
contact.classList.add("active");

const flinks = document.querySelector(".f-cont-link");
flinks.classList.add("f-links-active");

/* =======================================
          RESPONSIVE NAVBAR COMPONENT
   ======================================= */
const mobile_nav = document.querySelector(".mobile-nav-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("navActive");
});

/* =======================================
        STICKY NAV STYLES
   ======================================= */
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header").style.height = "6.5rem";
    document.querySelector(".header").style.boxShadow =
      "-21.213px 21.213px 30px 0 rgba(158, 158, 158, 0.3)";
  } else {
    document.querySelector(".header").style.height = "10rem";
    document.querySelector(".header").style.boxShadow = "";
  }
}
