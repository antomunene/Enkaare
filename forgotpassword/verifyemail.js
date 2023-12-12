const form=document.querySelector(".form");
const vericationForm=document.querySelector(".emailvericationdivi");
const email=document.querySelector("#email");
const verificationInputs = document.querySelectorAll('.codes');



let random=(min=10000, max =99999)=>{
    let dif= max-min;
    let rad= Math.random();
    rad=Math.floor(rad * dif);
    rad =rad +min;
    return rad
}

const randomCode=random();

const maxLength = 1;

verificationInputs.forEach((input, index) => {
  input.addEventListener('input', (event) => {
    const value = event.target.value;

    if (value.length >= maxLength) {
      if (index < verificationInputs.length - 1) {
        verificationInputs[index + 1].focus();
      } else {
        // Last input reached, you can perform any action here (e.g., submit the form)
          if(getVerificationCode() !=rcode){
            verificationInputs[0].style.border="1px solid red";
            verificationInputs[1].style.border="1px solid red";
            verificationInputs[2].style.border="1px solid red";
            verificationInputs[3].style.border="1px solid red";
            verificationInputs[4].style.border="1px solid red";
          }else{

    // Here you send the verication data to the candidate

    const emailValue=email.value.trim();
    const vercationCode=randomCode;
       
       
        const formdata = new FormData();
        
       
        formdata.append("email", emailValue);
        formdata.append("vericationCode", vercationCode);
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
   
   
  

}).catch(err =>{
   
    console.log(err);
       if(err){
     // yes();
    //  alert("Not sent.........the server is down!");
      
       }else{
    
       }
});


        document.getElementById("form").reset()
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