
const password1= document.querySelector("#password");
const password2= document.querySelector("#password2");
const passwordInput=document.querySelectorAll(".inneremailinput");
const constraint=document.querySelector(".guidelance");
const passwordDntMatch=document.querySelector(".warnmessage");
const form=document.querySelector(".form");
const loader=document.querySelector(".loader")


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
 
    // Check if password1 is empty
    if (password1.value.trim() === "") {
        passwordInput[0].style.border="1px solid red";
    } else if (password1.value.trim() !== password2.value.trim()) {
      
        passwordInput[0].style.border="1px solid red";
        passwordInput[1].style.border="1px solid red";
        passwordDntMatch.innerHTML="Passwords do not match!"
    } else {
        const password=password1.value.trim()

        //add this loader after you have sent the request to the server 
        //and remove after the response
        loader.classList.add('addedloader');


        

  //#Danities send the password to the backend here 

  //Once the password change is succes respond with success , close the current page and open login.htmlpage

        
    }
}

form.addEventListener("submit",(e)=>{

    e.preventDefault()
    console.log("Yessssss")
    checkPasswords();
})

function getrid(){
    passwordInput[0].style.border="1px solid hsla(0,0%,0%,0.3)";
        passwordInput[1].style.border="1px solid hsla(0,0%,0%,0.3)";
        passwordDntMatch.innerHTML=""
}