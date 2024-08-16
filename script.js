// Navigation menu

let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  let header = document.querySelector(".header");
  if (prevScrollPos > currentScrollPos) {
    header.style.top = "-1px";
  } else {
    header.style.top = `-${header.offsetHeight}px`;
  }
  prevScrollPos = currentScrollPos;
};

// HOID Team informations alert

function deviceType() {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
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

// document.getElementById("coming-soon").addEventListener("click", function (e) {
//  e.preventDefault();
//  e.stopPropagation();
//  return false;
// });

// Close Dialog button function

$(document).ready(function (p) {
  $("body").css("overflow", "hidden");
  $(".event-container").hide(0, function (p) {
    $(".event-container").fadeIn("slow");
  });
});


document.getElementById("close-event").addEventListener("click", function (e) {
  document.getElementById("audio-event").pause();
  $(".event-container").fadeOut("slow", function (p) {
    $("body").css("overflow", "scroll");
  });
})