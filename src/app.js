var submitButton = document.getElementById("button");
var form = document.getElementById("form");
var fName = document.querySelector("#fName-input");
var lName = document.getElementById("lName-input");
var email = document.getElementById("email");
var password = document.getElementById("password");

const parentFName = fName.parentElement;
const fErrorMessage = parentFName.querySelector("form .warning");
const fNameIcon = parentFName.querySelector("form i.fas");

const parentLName = lName.parentElement;
const lErrorMessage = parentLName.querySelector("form .warning");
const lNameIcon = parentLName.querySelector("form  i.fas");

const parentEmail = email.parentElement;
const EErrorMessage = parentEmail.querySelector("form .warning");
const emailIcon = parentEmail.querySelector("form  i.fas");

const parentPassword = password.parentElement;
const PErrorMessage = parentPassword.querySelector("form .warning");
const passwordIcon = parentPassword.querySelector("form  i.fas");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (fName.value.trim() == "") {
    fErrorMessage.style.display = "block";
    fNameIcon.style.display = "block";
    fName.style.border = "2px solid hsl(0, 100%, 74%)";
  } else {
    fErrorMessage.style.display = "none";
    fNameIcon.style.display = "none";
    fName.style.border = "1px solid hsl(249, 10%, 26%)";
  }

  if (lName.value.trim() == "") {
    lErrorMessage.style.display = "block";
    lNameIcon.style.display = "block";
    lName.style.border = "2px solid hsl(0, 100%, 74%)";
  } else {
    lErrorMessage.style.display = "none";
    lNameIcon.style.display = "none";
    lName.style.border = "1px solid hsl(249, 10%, 26%)";
  }

  if (email.value.trim() == "") {
    EErrorMessage.style.display = "block";
    emailIcon.style.display = "block";
    email.style.border = "2px solid hsl(0, 100%, 74%)";
  } else {
    EErrorMessage.style.display = "none";
    emailIcon.style.display = "none";
    email.style.border = "1px solid hsl(249, 10%, 26%)";
  }

  if (password.value.trim() == "") {
    PErrorMessage.style.display = "block";
    passwordIcon.style.display = "block";
    password.style.border = "2px solid hsl(0, 100%, 74%)";
  } else {
    PErrorMessage.style.display = "none";
    passwordIcon.style.display = "none";
    password.style.border = "1px solid hsl(249, 10%, 26%)";
  }
});
