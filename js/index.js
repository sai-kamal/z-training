sections = ['overview', 'reviews', 'order_online', 'photos'];
window.onload = () => {
    hideNavTabs();
    // REVIEWS
    reviewsOnload();
};

// hide restroConnect section when it becomes sticky
window.onscroll = () => {
    let threshold = document.querySelector("#about_restaurant").offsetTop;
    if (Math.round(document.body.scrollTop) > threshold || Math.round(document.documentElement.scrollTop) > threshold) {
        document.querySelector(".restroConnect").classList.add("hideSection");
    } else {
        document.querySelector(".restroConnect").classList.remove("hideSection");
    }
};

//--------------navigation javascript functions--------------------------
document.querySelectorAll('.actionTab').forEach(item => {
    let tabName = item.firstElementChild.innerText.toLowerCase();
    tabName = tabName.replace(' ', '_');
    item.addEventListener('click', event => {
        event.preventDefault();
        sectionNav(event, tabName);
    })
});

function sectionNav(event, tabName) {
    sections.forEach(sect => {
        let divID = '#' + sect + '_root';
        if(sect === tabName)
            document.querySelector(divID).classList.remove('hideSection');
        else
            document.querySelector(divID).classList.add('hideSection');
    });
}