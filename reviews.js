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

function ancestor(e, target) {
    if (!e) return false;
    else {
        if (e === target) return true;
        else return ancestor(e.parentNode, target);
    }
}


function toggleList(listIDName) {
    let list = document.querySelector(`#${listIDName} > .dropdown_content`);
    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
}

function changeListHead(e) {
    let head = e.innerText;
    let curHeadElem = e.parentElement.previousElementSibling;
    curHeadElem.innerText = head;
}
