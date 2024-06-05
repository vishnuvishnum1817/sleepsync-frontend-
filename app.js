// const form = document.querySelector("#form")
// const username = document.querySelector("#username")
// const email = document.querySelector("#Email")
// const password = document.querySelector("#password")
// const cpassword = document.querySelector("#cpassword") 


// form.addEventListener('submit',(e)=>{
   
//    if(! validateinputs()){
//     e.preventDefault()
//    }
   
// })

// function validateinputs(){
//     const usernameval = username.value.trim()
//     const emailval = email.value.trim();
//     const passwordval = password.value.trim()
//     const cpasswordval = cpassword.value.trim()

//     let success = true

//     if(usernameval===''){
//         success = false
//         setError(username,'username is required')
//     } 
//     else setSuccess(username)

//     if(emailval===''){
//         success = false
//         setError(email,'email is required')
//     } else if (!validateEmail(emailval)){
//         success = false
//         setError(email,'please enter a valid email')
//     } 
//     else setSuccess(email)
    
//     if(passwordval===''){
//         success = false
//         setError(password,'password is required')
//     }
//     else if (passwordval.length<8){
//         success =false
//         setError(password,'password must be altleast 8 character')
//     }
//     else setSuccess(password)

//     if(cpasswordval===''){
//         success= false
//         setError(cpassword,'confirm password is required')
//     }
//     else if(cpasswordval!==passwordval){
//         success = false
//         setError(cpassword,'password does not match')
//     }
//      else setSuccess(cpassword)

//      return success
// }

// const setError= (element,message)=>{

//     const  inputgroup = element.parentElement;
//     const  errorelement = inputgroup.querySelector('.error');
//     errorelement.innerText = message;
//      inputgroup.classList.add('error')
//      inputgroup.classList.remove('success')
// }

// const setSuccess = (element,message)=>{

//     const  inputgroup = element.parentElement;
//     const  errorelement = inputgroup.querySelector('.error');
//     errorelement.innerText = '';
//     inputgroup.classList.add('success')
//     inputgroup.classList.remove('error')
// }
// const validateEmail =(email)=>{
// return String(email)
// .toLowerCase()
// .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ )

const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#Email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
validateinputs()
})

let validateinputs=()=>{
    const usernameval = username.value.trim()
    const emailval = email.value.trim()
    const passwordval = password.value.trim()
    const cpasswordval = cpassword.value.trim()

    ///username

    if(usernameval===''){
        setError(username,'username is required')
    }
    else setSuccess(username)

    ///email

    if(emailval===''){
        setError(email,'email is required')
    }
    else if (!validateEmail(emailval)){
        setError(email,'please enter the valid email')
    }
   else setSuccess(email)

   ///password 

   if(passwordval===''){
    setError(password,'password is required')
   }
   else if (passwordval.length<8 ){
    setError(password,'password atleast 8 character')
   }
   else setSuccess(password)

   ///cpassword 

   if(cpasswordval===''){
    setError(cpassword,'cpassword is required')
   }
  else if(cpasswordval!==passwordval){
    setError(cpassword,'does not password')
  }
  else setSuccess(cpassword)

}
 
let setError=(element,message)=>{
 
 const ee = element.parentElement.querySelector('.error')
 ee.innerText = message
 
}
let setSuccess=(element,message)=>{

 const ee = element.parentElement.querySelector('.error')
 ee.innerText =''
}

let validateEmail = (email)=>{
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

}