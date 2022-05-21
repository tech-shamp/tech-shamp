/* =======================================
    Creating A Portfolio Tabbed Component
   ======================================= */

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_click = e.target;

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_click.classList.add("p-btn-active");
  console.log(p_btn_click);

  const btn_num = p_btn_click.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) =>
    curElem.classList.remove("p-image-not-active"),
  );
});

/* =======================================
    SWIPER ANIMATION
   ======================================= */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* =======================================
    SCROLL TO TOP FUNCTIONALITY
   ======================================= */
const scrollView = document.querySelector(".section-hero");
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
const home = document.querySelector(".home-link");
// home.style.color = "var(--helper)";
home.classList.add("active");

const flinks = document.querySelector(".f-home-link");
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
        COUNTER ANIMATION VIEWPORT
   ======================================= */
const secForSticky = document.querySelector(".section-hero");
const stickyNav = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
  },
);

stickyNav.observe(secForSticky);

// VIEWPORT ANIMATION
const WorkData = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    // COUNTER SECTION
    const counterNum = document.querySelectorAll(".counter-numbers");
    const speed = 200;

    counterNum.forEach((curElem) => {
      const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        const initialNum = parseInt(curElem.innerText);
        const incrementNum = Math.trunc(targetNumber / speed);

        if (initialNum < targetNumber) {
          curElem.innerText = `${initialNum + incrementNum}+`;
          setTimeout(updateNumber, 10);
        }
      };

      updateNumber();
    });
    observer.unobserve(WorkData);
  },
  { root: null, threshold: 0 },
);

workObserver.observe(WorkData);
