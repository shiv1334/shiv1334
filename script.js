var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
  var dop = new Date();
  document.getElementById("tp").innerHTML = dop.toLocaleDateString();
}
let tag = document.getElementById("tag");
let ul = document.getElementById("menu");
function OPEN() {
  if (ul.classList.contains("ul1")) {
    ul.classList.replace("ul1", "ul");
  } else {
    ul.classList.replace("ul", "ul1");
  }
}
// to stop closing window
// window.addEventListener('beforeunload', function (e) {
//     e.preventDefault();
//     e.returnValue = '';

// });
let t = document.getElementById("t");
window.addEventListener("wheel", (e) => {
  if (e.deltaY < 0) {
    t.style.display = "none";
  } else {
    t.style.display = "inline";
  }
});
// for slider
let flag = 0;
function change(x) {
  flag = flag + x;
  slideshow(flag);
}
slideshow(flag);
function slideshow(num) {
  let slides = document.getElementsByClassName("slide");
  if (num == slides.length) {
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  for (let y of slides) {
    y.style.display = "none";
  }
  slides[num].style.display = "block";
}
// function ck() {
//     let next = document.getElementById('next');
//     next.click()
// }
setInterval(() => {
  let next = document.getElementById("next");
  next.click();
}, 5000);
