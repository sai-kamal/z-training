'use strict'


function openPage(evt, cityName) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("sc-dTLGrV");
for (i = 0; i < tabcontent.length; i++) {
   tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("gmWmay");
for (i = 0; i < tablinks.length; i++) {
   tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " active";
// alert("clicked " + cityName);
}


// -------------------------------------
// ----------OVERVIEW-------------------
// ------------------------------------


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



// -------------------------------------
// ----------REVIEWS--------------------
// ------------------------------------

//hides dropdowns when user clicks not on lists.
document.onclick = function (e) {
    let list = document.querySelector(`#filter_dropdown > .dropdown_content`);
    if (!ancestor(e.target, document.getElementById('filter_dropdown'))) {
        list.style.display = "none";
    }
    list = document.querySelector(`#sort_dropdown > .dropdown_content`);
    if (!ancestor(e.target, document.getElementById('sort_dropdown'))) {
        list.style.display = "none";
    }
}

// helper function to hide dropdowns.
function ancestor(e, target) {
    if (!e) return false;
    else {
        if (e === target) return true;
        else return ancestor(e.parentNode, target);
    }
}

// ---------------toggle dropdown list-----------------
function toggleList(listIDName) {
    let list = document.querySelector(`#${listIDName} > .dropdown_content`);
    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
}

//makes chosen option as the visible option in dropdown
function changeListHead(e) {
    let head = e.innerText;
    let curHeadElem = e.parentElement.previousElementSibling;
    curHeadElem.innerText = head;
}

// ---------------Pagination------------------
var curPage = 2;
var list = [1, 2, 3, 4];
var curList = [];
var reviewsPerPage = 2;
var totalPages = Math.ceil(list.length/2);
loadReviews();

//loads next page of reviews
function reviewsNextPage() {
    curPage = Math.min(totalPages, curPage+1);
    loadReviews();
}

//loads prev page of reviews
function reviewsPrevPage() {
    curPage = Math.max(1, curPage-1);
    loadReviews();
}

// loads the exact num page
function reviewsNumPage(num) {
    // alert("reviews");
    curPage = num;
    loadReviews();
}

function HideReviews() {
    for (revNum of list) {
        let elem = document.getElementById('review_' + revNum);
        elem.style.display = "none";
    }
}

function loadReviews() {
    HideReviews();
    
    let start = (curPage - 1) * reviewsPerPage;
    curList = list.slice(start, start+reviewsPerPage);
    for(revNum of curList) {
        let elem = document.getElementById('review_' + revNum);
        elem.style.display = "block";
    }
    checkPageButtons();
}

function checkPageButtons() {
    let prevButton = document.getElementById("reviewPrevPageButton");
    let nextButton = document.getElementById("reviewNextPageButton");
    
    if(curPage === 1) prevButton.style.visibility= "hidden";
    else prevButton.style.visibility = "visible";
    if(curPage === totalPages ) nextButton.style.visibility= "hidden";
    else nextButton.style.visibility = "visible";
}