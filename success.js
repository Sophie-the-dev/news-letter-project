const displaynewemail = document.getElementById('user-email') // getting the bow where we'll put user's email
const savedemail = localStorage.getItem('userEmail') //getting the user's input from the local storage
const dismissbtn = document.getElementById('dismiss-btn')
if(savedemail){
    displaynewemail.textContent = savedemail
    
}
dismissbtn.addEventListener('click', ()=>{
    window.location.href = 'index.html'
})