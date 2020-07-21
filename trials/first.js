'use strict'

let activeBox = 1;
let activeInd = 1;
// x[activeInd].style.backgroundImage = "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));"
let txt = localStorage.getItem('first.json');
if(txt != null ) console.log(txt.name);
else console.log("coundn't load JSON");

function fn(a){
    let x = document.getElementById('c' + activeBox);
    let y = document.getElementById('TabLink__' + (activeBox-1));
    let z = document.getElementById('TabLin__' + (activeBox-1));
    x.style.display = 'none';
    y.style.border = 'none';
    if(z==null)
    {
        console.log("null hai");
        return;
    }
    z.classList.remove("cutCLq");
    z.classList.add("gmWmay");
    x = document.getElementById('c' + a);
    y = document.getElementById('TabLink__' + (a-1));
    z = document.getElementById('TabLin__' + (a-1));
    
    x.style.display = 'block';
    y.style = "border-bottom:2px solid red; color: red;"
    z.classList.remove("gmWmay");
    z.classList.add("cutCLq");
    activeBox = a;
}

// let prevScrollpos = document.getElementById('topPics');

window.onscroll = function() {
    // pre = prevScrollpos.getBoundingClientRect().y;
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 400) {
        document.getElementById('hideShowBar').style.display = 'none';
    } else {
        document.getElementById('hideShowBar').style.display = 'block';
    }
}
let cart_item = 0;
let total_cost  = 0;
function addFn(item_name = "default name", cost = 100){
    if(confirm("Item added =" + item_name + "\n item cost = " + cost))
    {
        cart_item++;
        total_cost += cost;
    }
    
    alert("total item in your cart is : " + cart_item + "\n Total purchase worth Rs:" + total_cost);
}



function scroller(index){
    console.log("function called");
    let x = document.querySelectorAll(".leftNavMenu");
    x[activeInd].style.backgroundImage = 'none';
    x[activeInd].style.border = 'none';
    x[index].style = "border-right:2px solid red";
    x[index].style.backgroundImage = "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,0.1))";
    activeInd = index;
}

