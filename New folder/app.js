
const form = document.querySelector('#createform');
const fnameInput = document.querySelector('#fname');
const mnameInput = document.querySelector('#mname');
const lnameInput = document.querySelector('#lname');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const successMessage = document.getElementById('successMessage'); // Get the success message element

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    validateForm();
});

function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });
    return result;
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email) {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(email);
}

function resetErrors() {
    const inputContainers = form.querySelectorAll('.input-group');
    inputContainers.forEach((container) => {
        container.classList.remove('error');
        container.classList.remove('success');
        const paragraph = container.querySelector('p');
        paragraph.textContent = '';
    });
}

function validateForm() {
    //first
    if(fnameInput.value.trim()==''){
        setError(fnameInput, 'Name can not be empty');
    }else if(fnameInput.value.trim().length <2){
        setError(fnameInput, 'Name must be min 2 characters');
    }else {
        setSuccess(fnameInput);
    }
      //middle
    if(mnameInput.value.trim()==''){
        setError(mnameInput, 'Name can not be empty');
    }else if(mnameInput.value.trim().length <2){
        setError(mnameInput, 'Name must be min 2 characters');
    }else {
        setSuccess(mnameInput);
    }
      //last
      if(lnameInput.value.trim()==''){
        setError(lnameInput, 'Name can not be empty');
    }else if(lnameInput.value.trim().length <2 ){
        setError(lnameInput, 'Name must be min 2 characters');
    }else {
        setSuccess(lnameInput);
    }
    //email
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Provide email address');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else {
        setError(emailInput, 'Provide valid email address');
    }

   //password
if (passwordInput.value.trim() == '') {
    setError(passwordInput, 'Password can not be empty');
} else if (passwordInput.value.trim().length < 6 || passwordInput.value.trim().length > 20) {
    setError(passwordInput, 'Password must be between 6 and 20 characters'); // Correct field
}
        //password
    if(confirmPasswordInput.value.trim()==''){
        setError(confirmPasswordInput, 'Password can not be empty');
    }else if(confirmPasswordInput.value !== passwordInput.value){
        setError(confirmPasswordInput, 'Password does not match');
    }else{
        setSuccess(confirmPasswordInput);
    }

    if (isFormValid()) {
        form.style.display = 'none'; // Hide the form
        successMessage.style.display = 'block'; // Show the success message
    }
}

// Attach the resetForm function to the Reset button
document.getElementById('resetButton').addEventListener('click', function () {
    resetForm();
});

function resetForm() {
    document.getElementById('fname').value = '';
    document.getElementById('mname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm-password').value = '';
    resetErrors();
}

// Add this to your JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#createform');
    const successMessage = document.getElementById("successMessage");
    const resetButton = document.getElementById("resetButton"); // Get the reset button element


        // Check for form validation (you can add your validation logic here)
        const fnameInput = document.getElementById("fname").value;
        const mnameInput = document.getElementById("mname").value;
        const lnameInput = document.getElementById("lname").value;
        const emailInput = document.getElementById("email").value;
        const passwordInput = document.getElementById("password").value;

        if (fnameInput.trim() === "" || lnameInput.trim() === "" || emailInput.trim() === "" || passwordInput.trim() === "") {
            alert("Please fill in all required fields.");
            return;
        }
        else
        // Store email and password in localStorage (not recommended for production)
        localStorage.setItem("userEmail", emailInput);
        localStorage.setItem("userPassword", passwordInput);

        // If the form is valid, display the success message and hide the form
        form.style.display = "none";
        successMessage.style.display = "block";

        // Hide the reset button
        resetButton.style.display = "none"; // Set the reset button's display property to "none"
        
    });

function goBackToSignUp() {
    // Hide the success message
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "none";

    // Show the signup form
    var createform= document.getElementById("createform");
    createform.style.display = "block";
}
// Add this function to your Sign Up JavaScript
function registerUser() {
    var fnameInput = document.getElementById("fname").value;
    var mnameInput = document.getElementById("mname").value;
    var lnameInput = document.getElementById("lname").value;
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;

    // Check if any required fields are empty

    // Save user registration data in local storage
    localStorage.setItem("fname",fnameInput);
    localStorage.setItem("lname", lnameInput);
    localStorage.setItem("email", emailInput);
    localStorage.setItem("password", passwordInput);

    // Add the following line to hide the "Log In" button
    document.getElementById("loginButton").style.display = "none";
}

