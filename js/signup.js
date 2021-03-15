//function to save username on localstorage
let saveUser = function () {
    let name = document.querySelector('#uname').value;
    localStorage.setItem("username", name); //save user on localstorage
}

//function to retrieve username from local storage
let getUser = function () {
    let user = localStorage.getItem("username");
    if (typeof (Storage) !== "undefined") {
        // Retrieve user from localstorage
        document.getElementById("user").innerHTML = "Congratulations " + user + "!";
    } else {
        document.getElementById("user").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

//displaying tips on input focus
let inputDes = function (input, tip) {
    let allTip, i;
    allTip = document.querySelectorAll('.tip');
    //clear all tip
    for (i = 0; i < allTip.length; i++) {
        allTip[i].innerHTML = " ";
    }
    let activeTip = document.querySelector(tip);
    let inputField = document.querySelector(input);
    //display only tip for a clicked input field
    if (inputField.attributes.required) {
        activeTip.innerHTML = "This is a required field, fill it appropiately";
    } else {
        activeTip.innerHTML = "This is not a required field, you can choose to ignore";
    }
}


// form validation
let submitBtn = document.getElementById('signupBtn');
let validateForm = function (e) {
    e.preventDefault();
    //get form to validate
    let signupForm = document.forms['myForm'];
    //get the inputs to validate
    let firstName = document.getElementById('fname');
    let userName = document.getElementById('uname');
    let emailAdd = document.getElementById('email');
    let birthday = document.getElementById('birthday');
    let password = document.getElementById('psw');
    let confirmPassword = document.getElementById('cPsw');
    //check if required input fields are properly filled
    if (firstName.value === "") { //first name
        alert("Your first name is required, input a valid value");
        firstName.style.border = '1px solid red'
        firstName.focus();
        let tip = document.getElementById('fnameTip');
        tip.innerHTML = "Your first name can contain only alphabets"
        return false;
    }
    if (userName.value === "") { //user name
        alert("Your user name is required, input a valid value");
        userName.style.border = '1px solid red'
        userName.focus();
        let tip = document.getElementById('unameTip');
        tip.innerHTML = "Your user name can contain alphabets, and numbers"
        return false;
    }
    if (emailAdd.value === "") { //email
        alert("Your email is required, input a valid email address");
        emailAdd.style.border = '1px solid red'
        emailAdd.focus();
        return false;
    }
    if (birthday.value === "") { //birthday
        alert("Your birthday is required, input a valid value");
        birthday.style.border = '1px solid red'
        birthday.focus();
        return false;
    }
    if (password.value === "" || password.value.length <= 6) { //password
        alert("Your password is poor, create a stronger password");
        password.style.border = '1px solid red'
        password.focus();
        let tip = document.getElementById('pswTip');
        tip.innerHTML = "Your password should contain atleast seven alphanumeric or special characters"
        return false;
    }
    if (confirmPassword.value !== password.value) { //confirm password
        alert("Your password did not match");
        confirmPassword.style.border = '1px solid red'
        confirmPassword.focus();
        let tip = document.getElementById('cPswTip');
        tip.innerHTML = "Repeat your password to create account"
        return false;
    } else {
        saveUser();
        signupForm.submit();
    }

};
submitBtn.addEventListener('click', validateForm);



//check password strength
let checkPswStrength = function () {
    //get the password value, password strength meter & password strength tip elements
    let passwordValue = document.getElementById('psw').value;
    let passwordMeter = document.getElementById('pswMeter');
    let passwordMeterTip = document.getElementById('pswTip');
    // let no = 0

    //conditions that will determine password strength
    //if password is less than 6
    if (passwordValue.length <= 6) {
        passwordMeter.style.width = '25%';
        passwordMeter.style.backgroundColor = 'red';
        passwordMeterTip.innerHTML = 'poor';
    }

    //if password is greater than 6
    if (passwordValue.length > 6) {
        passwordMeter.style.width = '50%';
        passwordMeter.style.backgroundColor = 'yellow';
        passwordMeterTip.innerHTML = 'fair';
    }
    //if password is greater than 6 and contain alphabets, numbers, special characters
    if (passwordValue.length > 6 && ((passwordValue.match(/[a-z]/) && passwordValue.match(/\d+/)) ||
            (passwordValue.match(/\d+/) && passwordValue.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) ||
            (passwordValue.match(/[a-z]/) && passwordValue.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)))) {
        passwordMeter.style.width = '75%';
        passwordMeter.style.backgroundColor = 'orange';
        passwordMeterTip.innerHTML = 'good';
    }
    //if password is greater than 6 and must contain atleast one  alphabet, number & special character
    if (passwordValue.length > 6 && passwordValue.match(/[a-z]/) &&
        passwordValue.match(/\d+/) &&
        passwordValue.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
        passwordMeter.style.width = '100%';
        passwordMeter.style.backgroundColor = 'green';
        passwordMeterTip.innerHTML = 'very good';
    }

}
let password = document.getElementById('psw');
password.addEventListener('keyup', checkPswStrength);


//checking if confirm password matches with password
let checkPasswordMatch = function () {
    //getting elements and values
    let confirmPswvalue = document.getElementById('cPsw').value;
    let pswValue = document.getElementById('psw').value;
    let confirmPswTip = document.getElementById('cPswTip')

    //condition to check
    if (confirmPswvalue === pswValue) {
        confirmPswTip.innerHTML = 'Password matched';
    } else {
        confirmPswTip.innerHTML = 'password does not match';
    }
}
let confirmPassword = document.getElementById('cPsw');
confirmPassword.addEventListener('keyup', checkPasswordMatch);



//toggling password visibility
let togglePasswordVisibility = function (psw, eye) {
    let password = document.getElementById(psw);
    let passwordEye = document.querySelector(eye)
    if (password.type === "password") {
        password.type = "text";
        passwordEye.style.color = "#0389f7";
    } else {
        password.type = "password";
        passwordEye.style.color = "#ffff";
    }
};
