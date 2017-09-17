import '../css/main.scss'

const password = document.querySelector('#field_password');
const toggleViewPwd = document.querySelector('#toggleViewPwd');
const eyeIcon = document.querySelector('.fa-eye');

//Validate for all mandatory requirements in password and show validation via DOM
const validatePwd = () => {
   const pwd_value = password.value;

    if (pwd_value.match(/\d/g)) {
     document.querySelector("#numvalidation").classList.add("gray");
    }

    if (!pwd_value.match(/\d/g)) {
      if(document.querySelector("#numvalidation").className.includes("gray")) {
        document.querySelector("#numvalidation").classList.remove("gray");
      }
     
    }

    if (pwd_value.match(/[a-z]/)) {
     document.querySelector("#lowercasevalidation").classList.add("gray");
    }

    if (!pwd_value.match(/[a-z]/)) {
     if(document.querySelector("#lowercasevalidation").className.includes("gray")) {
        document.querySelector("#lowercasevalidation").classList.remove("gray");
      }
    }

    if (pwd_value.match(/[A-Z]/)) {
     document.querySelector("#uppercasevalidation").classList.add("gray");
    } 

    if (!pwd_value.match(/[A-Z]/)) {
     if(document.querySelector("#uppercasevalidation").className.includes("gray")) {
        document.querySelector("#uppercasevalidation").classList.remove("gray");
      }
    }

    if (!pwd_value.match(/^[a-zA-Z0-9- ]*$/)) {
     document.querySelector("#splcharvalidation").classList.add("gray");
    }

    if (pwd_value.match(/^[a-zA-Z0-9- ]*$/)) {
     if(document.querySelector("#splcharvalidation").className.includes("gray")) {
        document.querySelector("#splcharvalidation").classList.remove("gray");
      }
    }

    if (pwd_value.length >= 8) {
     document.querySelector("#minlengthvalidation").classList.add("gray");
    }

    if (!pwd_value.length >= 8) {
     if(document.querySelector("#minlengthvalidation").className.includes("gray")) {
        document.querySelector("#minlengthvalidation").classList.remove("gray");
      }
    }

   

};

//Toggle the eye icon and text when showing/hiding password
const showPwd = () => {

   eyeIcon.classList.toggle('fa-eye-slash');
   const text = toggleViewPwd.innerHTML;
   if (text == "Show")
    toggleViewPwd.innerHTML = "Hide";
   else
    toggleViewPwd.innerHTML = "Show";
   if (password.type == "password")
    password.type = "text";
   else
    password.type = "password";

};


// JavaScript form validation in case HTML5 validation fails
 const validateAll = () => {
    const checkPassword = (str) =>
    {
      const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
      return re.test(str);
    };
  
   const checkEmail = (str) =>
    {
      const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
      return re.test(str);
    };


    const checkForm = (e) =>
    {
      if(field_username.value == "") {
        alert("Error: Username cannot be blank!");
        field_username.focus();
        e.preventDefault(); // equivalent to return false
        return;
      }
      /*const re = /^\w+$/;
      if(!re.test(field_username.value)) {
        alert("Error: Username must contain only letters, numbers and underscores!");
        field_username.focus();
        e.preventDefault();
        return;
      }*/
    
    if(field_email.value == "") {
        alert("Error: Email cannot be blank!");
        field_email.focus();
        e.preventDefault(); // equivalent to return false
        return;
      }
    
    if(!checkEmail(field_email.value)) {
          alert("The email you have entered is not valid!");
          field_email.focus();
          e.preventDefault();
          return;
    }
      
        if(!checkPassword(field_password.value)) {
          alert("The password you have entered is not valid!");
          field_password.focus();
          e.preventDefault();
          return;
        }
      //alert("Both username and password are VALID!");
    };

    const registrationForm = document.querySelector("#register");
    registrationForm.addEventListener('submit', checkForm, true);

   }



password.addEventListener('change', validatePwd);
toggleViewPwd.addEventListener('click', showPwd);
document.addEventListener('DOMContentLoaded', validateAll, false);