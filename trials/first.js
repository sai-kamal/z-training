'use strict'

let activeBox = 1;

function fn(a){
    let x = document.getElementById('c' + activeBox);
    x.style.display = 'none';
    x = document.getElementById('c' + a);
    x.style.display = 'block';
    activeBox = a;
    // let x = document.getElementById('c1');
    // x.innerHTML = '<h1> heyy you </h1> its me';
    // console.log(typeof(order));
}