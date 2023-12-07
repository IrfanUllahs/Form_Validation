let username=document.querySelector('#username')
let email=document.querySelector('#email')
let password1=document.querySelector('#password1')
let password2=document.querySelector('#password2')
let button=document.querySelector('#button')
let form=document.querySelector('#form')
button.addEventListener('click',function(e){
    if(username.value.trim()===''){
        error(username,'Enter a correct name');
    }
    else{
        success(username);
    }
    if(email.value.trim()==='')
    {
        error(email,'Email is required')
    }else if(!validateEmail(email.value)){
        error(email,'Enter correct Email')
    }else{
        success(email)
    }
    if(password1.value===''){
        error(password1,'Password is required')
    }else if(password1.value.length<8){
        error(password1,'Passowrd must be greater than 8')
    }
    else{
        success(password1)
    }
    if(password2.value===''){
        error(password2,'Password should be entered')
    }else if(password2.value!==password1.value){
        error(password2,'Both passowrd should be same')
    }else{
        success(password2)
    }
    
});
function error(target,msg){
    if(target.classList.contains("success")){
       
        target.classList.remove('success')
    }
   else{
    target.classList.add('errorinput')
    let  parentEle=target.parentNode
     let errorDisplay=parentEle.querySelector('.error')
     errorDisplay.innerHTML=msg;
   }
    
   
}
function success(target){
    target.classList.add('success')
    let  parentEle=target.parentNode
    let errorDisplay=parentEle.querySelector('.error')
    errorDisplay.innerHTML='';
}

function validateEmail(email){
    
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValidEmail = emailRegex.test(email.toLowerCase());

if (isValidEmail) {
  return true
} else {
  return false
}
}
