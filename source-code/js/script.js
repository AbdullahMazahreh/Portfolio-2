const myTags = [
  "JavaScript",
  "CSS",
  "HTML",
  "C",
  "C++",
  "React",
  "Python",
  "Java",
  "git",
  "django",
  "Node.js",
  "OpenCV",
  "GCP",
  "MySQL",
  "jQuery",
];

var tagCloud = TagCloud(".right-side-first-page", myTags, {
  // radius in px
  radius: 250,

  // animation speed
  // slow, normal, fast
  maxSpeed: "fast",
  initSpeed: "fast",

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: true,
});

//To change the color of text randomly
var colors = ["aqua", "#da0037"];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector(".right-side-first-page").style.color = random_color;

// //////////////////////////////
// Lights ON-OFF

const lightButton = document.getElementsByClassName("lights-button");
const headerLight = document.getElementsByTagName("header");
const onOffToggle = document.getElementsByClassName("on-off");
const onOffPosition = document.getElementsByClassName(
  "lights-button-indicater"
);
const onOffColor = document.getElementsByClassName(
  "lights-button-indicater-circle"
);

function toggleLights() {
  if (headerLight[0].style.animationName == "none") {
    headerLight[0].style.animationName = "header-pulse";
  } else {
    headerLight[0].style.animationName = "none";
  }

  if (onOffPosition[0].style.justifyContent == "flex-end") {
    onOffPosition[0].style.justifyContent = "flex-start";
  } else {
    onOffPosition[0].style.justifyContent = "flex-end";
  }

  if (onOffColor[0].style.backgroundColor == "red") {
    onOffColor[0].style.backgroundColor = "aqua";
  } else {
    onOffColor[0].style.backgroundColor = "red";
  }

  if (onOffToggle[0].style.color == "red") {
    onOffToggle[0].style.color = "aqua";
    onOffToggle[0].innerHTML = "ON";
    lightButton[0].style.border = "1px solid aqua";
  } else {
    onOffToggle[0].style.color = "red";
    onOffToggle[0].innerHTML = "OFF";
    lightButton[0].style.border = "1px solid red";
  }
}
lightButton[0].addEventListener("click", toggleLights);
// ///////////////////////////////////
// Burger menu toggle

const burgerMenuClick = document.getElementsByClassName("burger-menu");
const burgerMenuRect = document.getElementsByClassName("burger-menu-content");
const burgerMenuColor = document.getElementsByClassName("burger-menu-bar");
const burgerMenuLinks = document.getElementsByClassName(
  "burger-menu-social-links"
);

function toggleMenuClick() {
  burgerMenuRect[0].style.display = "none";
}

function toggleMenu() {
  if (burgerMenuRect[0].style.display == "flex") {
    burgerMenuRect[0].style.display = "none";
  } else {
    burgerMenuRect[0].style.display = "flex";
  }
}
burgerMenuClick[0].addEventListener("click", toggleMenu);

for (i = 0; i <= 4; i++) {
  burgerMenuLinks[i].addEventListener("click", toggleMenuClick);
}
