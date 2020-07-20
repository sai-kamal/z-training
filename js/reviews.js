//reviews onload all calls
function reviewsOnload() {
    //disabling a href redirection scroll effect
    disableHrefRedirect();
    //attach event listeners to comment buttons
    commentBtnAddEventListener();
    //attach event listeners to comment submit buttons
    submitCommentAddEventListener();
}

function hideNavTabs() {
    sections.forEach(sect => {
        let divID = '#' + sect + '_root';
        if (sect === 'overview')
            document.querySelector(divID).classList.remove('hideSection');
        else
            document.querySelector(divID).classList.add('hideSection');
    });
}

function disableHrefRedirect() {
    document.querySelectorAll('.pagination a').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
        })
    });
}

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
let curPage = 1;
let list = [1, 2, 3, 4];
let curList = [];
let reviewsPerPage = 2;
let totalPages = Math.ceil(list.length/2);
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

//------------------Comments in Reviews-------------------
//comments button section toggle
let numReviews = 4;
function commentBtnAddEventListener() {
    for (let i = 1; i <= numReviews; i++) {
        let elem = document.querySelector(`#review_${i} .cta .commentBtn`);
        let commentsDiv = document.querySelector(`#review_${i} .comments_section`);
        commentsDiv.classList.add('hideSection');
        elem.addEventListener("click", () => {
            if(commentsDiv.classList.contains('hideSection'))
                commentsDiv.classList.remove('hideSection');
            else
                commentsDiv.classList.add('hideSection');
        });
    }
}

//enter should submit the review
function submitCommentAddEventListener() {
    for (let i = 1; i <= numReviews; i++) {
        let elem = document.querySelector(`#review_${i} .comments_section .write_comment_btn`);
        elem.addEventListener("click", () => {
            let commentTextArea = document.querySelector(`#review_${i} .comments_section .write_comment_input textarea`);
            let text = commentTextArea.value;
            if(text === '') return;
            //create the comment and place it inside that particular review
            let childCommentElem = createCommentElem(text);
            let parent = document.querySelector(`#review_${i} .comments_section .comments_list`);
            parent.appendChild(childCommentElem);
            commentTextArea.value = "";
        });
    }
}

function createCommentElem(text) {
    let element = `<div class="comment_container">
                <div class="user_icon">
                    <img alt="image"
                        src="https://b.zmtcdn.com/data/pictures/chains/5/312995/aa4fc3fc70d8e32772a724d6cbc55ab0_featured_v2.jpg?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A"
                        loading="lazy">
                </div>
                <div class="user_comment">
                    <div class="comment_username">
                        <a href="#"><span>Biryani by Kilo</span></a>
                        <div class="comment_user_tag">Management</div>
                    </div>
                    <div class="comment_content">
                        <p>${text}</p>
                    </div>
                </div>
            </div>`
    var template = document.createElement('template');
    element = element.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = element;
    return template.content.firstChild;
}