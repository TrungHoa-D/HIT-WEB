const email= document.getElementById("email");
const password= document.getElementById("password");
const button= document.getElementById("SignIn");
button.addEventListener("click", () =>{
    alert("Email: "+email.value+'\n'+"Password: "+password.value);
    console.log(email.value);
    console.log(password.value);
    event.preventDefault();
});