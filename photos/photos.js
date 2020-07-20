// pagination for photos
var maxPages = 2;
var curPage=1;
function photosPrevPage(){
    if(curPage>1)
    {
        // curPage = curPage -1;
        photosLoadPage(curPage -1);
    }
}

function photosNextPage(){
    if(curPage<maxPages)
    {
        // curPage = curPage +1;
        photosLoadPage(curPage+1);
    }
}
var photosPages = document.getElementsByClassName("photoPage");
function photosLoadPage(idx){
    for(let page of photosPages)
    {
        if(page.id=='p'+idx.toString())
        {
            page.classList.remove("hide");
            // console.log('p'+idx.toString())
        }
        else{
            page.classList.add("hide");
        }
    }
    curPage = idx;

}