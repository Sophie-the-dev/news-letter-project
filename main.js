const emailform = document.getElementById('email-form') // form itself
const emailinput = document.getElementById('email-input') //user's email input
const button = document.getElementById('btn') //submit button
const errormessage = document.getElementById('error-message') // error message
emailform.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(!emailinput.validity.valid || emailinput.value === ''){
        showerror()
    }else{
        localStorage.setItem('userEmail', emailinput.value); //saving user's input to use it in success message
        window.location.href ='success.html'
    }
})

function showerror(){
    errormessage.style.display ='block'
    emailinput.classList.add('invalid-input')
    emailinput.addEventListener('input', ()=>{
        errormessage.style.display = 'none'
        emailinput.classList.remove('invalid-input')
    })
}