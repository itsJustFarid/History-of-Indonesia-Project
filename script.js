// Navigation menu

let MobileQueries = window.matchMedia("(max-width: 480px)");
let nav = document.getElementById("navbar");

function hideNavMenu() {
  if (nav.classList.contains("hide-nav")) {
    nav.classList.remove("hide-nav");
  } else {
    nav.classList.add("hide-nav");
  }
}

function navigations(x, y, scrollToElement, ElementId) {
  let stElement = document.getElementById(ElementId);
  if (MobileQueries.matches) {
    nav.classList.add("hide-nav");
  }
  if (scrollToElement) {
    stElement.scrollIntoView(1);
  } else {
    window.scrollTo(x, y);
  }
}

document.getElementById("introNavBtn").addEventListener("click", function () {
  navigations(0, 0, false, "");
});
document.getElementById("teamNavBtn").addEventListener("click", function () {
  navigations(null, null, true, "team");
});
document
  .getElementById("downloadNavBtn")
  .addEventListener("click", function () {
    navigations(null, null, true, "download");
  });

let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  let header = document.querySelector(".header");
  if (prevScrollPos > currentScrollPos) {
    header.style.top = "-1px";
  } else {
    header.style.top = `-${header.offsetHeight}px`;
  }
  if (!nav.classList.contains("hide-nav")) {
    nav.classList.add("hide-nav");
  }
  prevScrollPos = currentScrollPos;
};

// HOID Team informations alert

function deviceType() {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
}

let myDevice = deviceType();
const teamDetailedInfo = document.querySelector(".team-info");

if ((myDevice === "mobile") | (myDevice === "tablet")) {
  teamDetailedInfo.textContent = "Tap any card to display detailed information";
} else if (myDevice === "desktop") {
  teamDetailedInfo.textContent =
    "Hover any card to display detailed information";
}

// Prevent coming soon button

document.getElementById("coming-soon").addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
});
