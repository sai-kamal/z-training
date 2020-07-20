// 'use strict'
let overviewMenuIndex = 1;
function overviewRightCopy(){
    alert("Address copied to the clipboard");
}
function overviewShowMenu(){
    let checkNode = document.querySelector(".check");
    checkNode.classList.add('hide');
    let overviewPhoto = document.querySelector(".overview_photo");
    overviewPhoto.classList.remove('hide');
    overviewShowSlide(overviewMenuIndex);

}
function overviewShowMain(){
    let checkNode = document.querySelector(".check");
    checkNode.classList.remove('hide');
    let overviewPhoto = document.querySelector(".overview_photo");
    overviewPhoto.classList.add('hide');

}

function overviewChangeSlide(n) {
    overviewShowSlide(overviewMenuIndex += n);
}
function overviewShowSlide(n) {
  let i;
  let slides = document.getElementsByClassName("overviewMenuPhoto");
  if (n > slides.length) {overviewMenuIndex = 1}
  if (n < 1) {overviewMenuIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[overviewMenuIndex-1].style.display = "block";
}
