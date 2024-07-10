
let formulaire = document.getElementById('mon_formulaire');
let myregex = /^[a-zA-Z]+$/;   
let myregexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 

let minLength = 3;
let maxLength = 15;  
let minpassword=8; 

formulaire.addEventListener('submit', function(e) {
    // validation pour inputs
    let myinput = document.getElementById('mon_input');
    let myerror = document.getElementById('error');

    if (myinput.value.trim() === "") {
        myerror.innerHTML = "Le nom est requis";
        myerror.style.color = 'red';
        e.preventDefault();
    } else if (!myregex.test(myinput.value)) {
        myerror.innerHTML = "Le nom ne doit comporter que des lettres";
        myerror.style.color = 'red';
        e.preventDefault();
    } else if (myinput.value.length < minLength || myinput.value.length > maxLength) {
        myerror.innerHTML = `Le nom doit comporter entre ${minLength} et ${maxLength} lettres`;
        myerror.style.color = 'red';
        e.preventDefault();
    } else {
        myerror.innerHTML = ""; // Clear the error message if validation passes
    }
    // validation pour mot de pass

    let passwordInput = document.getElementById('password_input');
    let passwordError = document.getElementById('error_password');
    if (passwordInput.value.trim() === "") {
        passwordError.innerHTML = "Le mot de passe est requis";
        passwordError.style.color = 'red';
        e.preventDefault();
    } else  if(passwordInput.value.length < minpassword){
        passwordError.innerHTML ="le mot de pass doit comporter au moins 8 caratere";
        passwordError.style.color = 'red';
        e.preventDefault();

    }

    // validation pour email
    let emailInput = document.getElementById('email_input');
    let emailError = document.getElementById('error_email');
    if(emailInput.value.trim() === ""){
        emailError.innerHTML ="le email est recquis" ;
        emailError.style.color = 'red';
    } else if(!myregexemail.test(emailInput.value)){
        emailError.innerHTML="saisissez bien le email";
        emailError.style.color = 'red';


    }
});
