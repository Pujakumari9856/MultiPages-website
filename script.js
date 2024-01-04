var navLinks=document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right="0";
}
function hideMenu(){
    navLinks.style.right="-200px";
}
let signUpBtn = document.getElementById("signUpBtn");
let signInBtn = document.getElementById("signInBtn");
let nameInputField = document.getElementById("nameInputField");
let title = document.getElementById("title");

signInBtn.onclick=function(){
    nameInputField.style.maxHeight="0";
    title.innerHTML="Sign In";
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
}

signUpBtn.onclick=function(){
    nameInputField.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
}
