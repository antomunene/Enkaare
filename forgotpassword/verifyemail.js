const form=document.querySelector(".form");
const vericationForm=document.querySelectorAll(".emailvericationdivi");
const email=document.querySelector("#email");
const verificationInputs = document.querySelectorAll('.codes');
const vbloader=document.getElementsByClassName("bloader");
const loader =document.getElementsByClassName("loader");
const alerti =document.querySelector(".warnmessage");
const emailInput=document.querySelector(".inneremailinput");



let random=(min=10000, max =99999)=>{
    let dif= max-min;
    let rad= Math.random();
    rad=Math.floor(rad * dif);
    rad =rad +min;
    return rad
}

const randomCode=random();


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const emailValue=email.value.trim();
    const vericationCode=randomCode;
       
       
        const formdata = new FormData();
        
       
        formdata.append("email", emailValue);
        formdata.append("vericationCode", vericationCode);
        //formdata.append("dbvalues", dbvalues);
       
      
        const options ={

            method: 'POST',
            headers:{
              "Access-Control-Allow-Credentials":true,
              "Access-Control-Allow-Origin": "https://enkaare.com",
              "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, authorization",
              "Access-Control-Allow-Methods": "POST",
              withCredentials:true
      
          },
       
            body: formdata,
           
        };
       // https://1ed2-105-231-144-76.ngrok.io/api'

       //https://half-geode-roundworm.glitch.me/api
        
        let fetchVerifyEmail= fetch('https://dented-amusement.glitch.me/verifyemail',options).catch(err =>{

        console.log(err)
          
    
    });

    loader[0].classList.add("addedloader");
   
fetchVerifyEmail.then(res => res.json()).then(d =>{

    const{codeSent,emailDoesntExist}=d;

    //Here is where you work with the response that's come from the backend

    if(codeSent){
        //email verication code success
        //Here  you display code verication form 
        vericationForm.classList.add("addedcodep");

    }else if(emailDoesntExist){
        //alert the user email doesn't exist
        
        alerti.innerHTML="Email does not exist!"
        emailInput.style.border="1px solid red"
    }
   
   
  

}).catch(err =>{
   
    console.log(err);
       if(err){
     // yes();
    //  alert("Not sent.........the server is down!");
      
       }else{
    
       }
});
    
})

const maxLength = 1;

verificationInputs.forEach((input, index) => {
  input.addEventListener('input', (event) => {
    const value = event.target.value;

    if (value.length >= maxLength) {
      if (index < verificationInputs.length - 1) {
        verificationInputs[index + 1].focus();
      } else {
        // Last input reached, you can perform any action here (e.g., submit the form)
          if(getVerificationCode() !=randomCode){
            verificationInputs[0].style.border="1px solid red";
            verificationInputs[1].style.border="1px solid red";
            verificationInputs[2].style.border="1px solid red";
            verificationInputs[3].style.border="1px solid red";
            verificationInputs[4].style.border="1px solid red";
          }else{

            //#Danties

    // Here email has been verified the next step would be moving 
    //to reset passwordpage

    


      
          }
        
       
      }
    }
  });

  input.addEventListener('keydown', (event) => {
    const BACKSPACE_KEY_CODE = 8;

    if (event.keyCode === BACKSPACE_KEY_CODE && index > 0 && input.value.length === 0) {
      verificationInputs[index - 1].focus();
    }
  });
});



function getVerificationCode() {
    let code = '';
    verificationInputs.forEach((input) => {
      code += input.value;
    });
    return code;
  }





let change =()=>{
    verificationInputs[0].style.border="1px solid  hsl(188,47%,20%)";
    verificationInputs[1].style.border="1px solid  hsl(188,47%,20%)";
    verificationInputs[2].style.border="1px solid  hsl(188,47%,20%)";
    verificationInputs[3].style.border="1px solid  hsl(188,47%,20%)";
    verificationInputs[4].style.border="1px solid  hsl(188,47%,20%)";
    
   
}

let oninpuEmail=()=>{
    alerti.innerHTML=""
    emailInput.style.border="1px solid hsla(0,0%,0%,0.3)";

    let emilL=document.querySelectorAll(".emaillabel");
    if(email.value != ""){
        emilL[0].classList.add("addedlabel");

    }else{
        emilL[0].classList.remove("addedlabel");
    }

    

}
