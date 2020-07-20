function modalClose(){
    var modal = document.getElementsByClassName("modal");
    for( let box of modal){
        box.style.display = "none";
    }
}

function login(){
    var loginModal = document.getElementById("loginModalBox");
    var signupModal = document.getElementById("signupModalBox");
    signupModal.style.display = "none";
    loginModal.style.display = "block";

}

function signup(){
    var loginModal = document.getElementById("loginModalBox");
    var signupModal = document.getElementById("signupModalBox");
    loginModal.style.display = "none";
    signupModal.style.display = "block";
}
