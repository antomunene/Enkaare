
const password1= document.querySelector("#password");
const password2= document.querySelector("#password2");
const passwordInput=document.querySelectorAll(".inneremailinput");
const constraint=document.querySelector(".guidelance");
const passwordDntMatch=document.querySelector(".warnmessage");


function checkpassConstraint(){
    checkPassword(password1.value.trim());

}
function checkPassword(password) {
    // Password must contain at least one number, one uppercase and lowercase letter, and be at least 8 characters long
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (passwordRegex.test(password)) {
        constraint.style.color="green";
        password2.disabled=false;
    } else {
        constraint.style.color="red";
        password2.disabled=true;
    }
}

function checkPasswords() {
    // Get the values of the password inputs
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    // Check if password1 is empty
    if (password1 === "") {
        passwordInput[0].style.border="1px solid red";
    } else if (password1 !== password2) {
        passwordInput[0].style.border="1px solid red";
        passwordInput[1].style.border="1px solid red";
        passwordDntMatch.innerHTML="Passwords do not match!"
    } else {
        console.log("Passwords match successfully.");
    }
}