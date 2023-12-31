// ======================== Js Code ======================== //

// ======================== Typing Animation ======================== //
var typed = new Typed(".typing", {
  strings: ["Front End", "Web Developer","UI Developer"],
  typeSpeed: 60,
  BackSpeed: 60,
  loop: true,
});
// ======================== Aside ======================== //

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  allSection = document.querySelectorAll(".section");
for (let e = 0; e < navList.length; e++) {
  navList[e].querySelector("a").addEventListener("click", function () {
    removeBackSection();
    for (let e = 0; e < navList.length; e++)
      navList[e].querySelector("a").classList.contains("active") &&
        addBackSection(e),
        navList[e].querySelector("a").classList.remove("active");
    this.classList.add("active"),
      showSection(this),
      window.innerWidth < 1200 && asideSectionTogglerBtn(),
      stopProgAnimate();
  });
}
function removeBackSection() {
  for (let e = 0; e < allSection.length; e++)
    allSection[e].classList.remove("back-section");
}
function addBackSection(e) {
  allSection[e].classList.add("back-section");
}
function showSection(e) {
  for (let e = 0; e < allSection.length; e++)
    allSection[e].classList.remove("active");
  const t = e.getAttribute("href").split("#")[1];
  document.querySelector("#" + t).classList.add("active");
}
function updateNav(e) {
  for (let t = 0; t < navList.length; t++) {
    navList[t].querySelector("a").classList.remove("active");
    e.getAttribute("href").split("#")[1] ===
      navList[t].querySelector("a").getAttribute("href").split("#")[1] &&
      navList[t].querySelector("a").classList.add("active");
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const e = this.getAttribute("data-section-index");
  showSection(this), updateNav(this), removeBackSection(), addBackSection(e);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
function asideSectionTogglerBtn() {
  aside.classList.toggle("open"), navTogglerBtn.classList.toggle("open");
  for (let e = 0; e < allSection.length; e++)
    allSection[e].classList.toggle("open");
}
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

// ======================== Progress Skills Animation ======================== //

let skillsLink = document.querySelector(".sk"),
  progress = document.querySelectorAll(".progress-bar");
function openProgAnimat() {
  progress.forEach((e) => {
    e.style.width = e.dataset.width;
  });
}
function stopProgAnimate() {
  progress.forEach((e) => {
    e.style.width = "0";
  });
}
skillsLink.addEventListener("click", () => {
  openProgAnimat();
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup(".project__content", {
  selectors: {
    target: ".project__card",
  },
  animation: {
    duration: 300,
  },
});
/* Link active featured */
const linkList = document.querySelectorAll(".list__item");

function activeFeatured() {
  linkList.forEach((e) => e.classList.remove("active-list"));
  this.classList.add("active-list");
}

linkList.forEach((e) => e.addEventListener("click", activeFeatured));

// ======================== Jquery Code ======================== //

$(window).on("load", function () {
  $(".loader").fadeOut("2000"), $(".content").fadeIn("2000");
});
