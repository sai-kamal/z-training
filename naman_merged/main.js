'use strict'
function showOverviewMain(){
    let cur = document.getElementsByClassName("overviewForMain");
    cur[0].style.display = "block";
    let notCur = document.getElementsByClassName("reviewsForMain");
    notCur[0].style.display = "none";
    notCur = document.getElementsByClassName("orderonlineForMain");
    notCur[0].style.display = "none";
    notCur = document.getElementsByClassName("photoForMain");
    notCur[0].style.display = "none";
}

window.onscroll = function() {hiddingMiddle()};

function hiddingMiddle() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("middleHeaderHide").style.display = "none";
    
  } else {
    document.getElementById("middleHeaderHide").style.display = "block";
  }
 }

function showReviewsMain(){
    let cur = document.getElementsByClassName("reviewsForMain");
    cur[0].style.display = "block";
    let notCur = document.getElementsByClassName("overviewForMain");
    notCur[0].style.display = "none";
    notCur = document.getElementsByClassName("orderonlineForMain");
    notCur[0].style.display = "none";
    notCur = document.getElementsByClassName("photoForMain");
    notCur[0].style.display = "none";
}
function showOrderonlineMain(){
    let cur = document.getElementsByClassName("orderonlineForMain");
    cur[0].style.display = "block";
    let notCur = document.getElementsByClassName("reviewsForMain");
    notCur[0].style.display = "none";
    notCur = document.getElementsByClassName("overviewForMain");
    notCur[0].style.display = "none";
    notCur = document.getElementsByClassName("photoForMain");
    notCur[0].style.display = "none";
}

function showPhotoMain(){
    let cur = document.getElementsByClassName("photoForMain");
    cur[0].style.display = "block";
    let notCur = document.getElementsByClassName("reviewsForMain");
    notCur[0].style.display = "none";
    notCur = document.getElementsByClassName("overviewForMain");
    notCur[0].style.display = "none";
    notCur = document.getElementsByClassName("orderonlineForMain");
    notCur[0].style.display = "none";
    
}
showOverviewMain();
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
