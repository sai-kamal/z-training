sections = ['overview', 'reviews', 'order_online', 'photos'];
window.onload = () => {
    sections.forEach(sect => {
        let divID = '#' + sect + '_root';
        if (sect === 'overview')
            document.querySelector(divID).classList.remove('hideSection');
        else
            document.querySelector(divID).classList.add('hideSection');
    });

    // reviews related - disabling a href redirection scroll effect
    document.querySelectorAll('.pagination a').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
        })
    });
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