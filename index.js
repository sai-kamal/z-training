var sectionList = document.getElementById("embedHere").children;

for(let sec of sectionList){
    if(sec.id == 'overview_section'){
        sec.classList.remove("hide");
    }
    else{
        sec.classList.add("hide")
    }
    
}

var tabs = document.querySelectorAll(".actionTab");

for(let tab of tabs)
{
    tab.addEventListener('click',function (event){
        let selectedSecId = event.target.title.toLowerCase()+'_section';
        for(let sec of sectionList)
        {
            if(sec.id==selectedSecId)
            {
                sec.classList.remove("hide");
            }
            else{
                sec.classList.add("hide");
            }
        }
    });
}

// var aboutSection = document.getElementById("aboutRestro");
// aboutSection.addEventListener('');


