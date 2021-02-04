"use sctrict";

const htmlP = document.getElementById("bjr");
const txt = htmlP.dataset.label;
let i = 0;
function showLetters() {
  let timeOut;
  if (i < txt.length) {
    htmlP.innerHTML += `<span>${txt[i]}</span>`;
    timeOut = setTimeout(showLetters, 400);
    i++;
  } else {
    clearTimeout(timeOut);
    console.log("end");
  }
}
showLetters();




const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");
let idx = 0;
const run = function () {
  idx++;
  if (idx >= img.length - 1) {
    idx = 0;
  }
  imgs.style.transform = `translateX(${-idx * 473}px)`;
};
setInterval(run, 2000);
