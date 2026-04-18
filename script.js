function validateForm() {
    // values from the form
    const fullName = document.getElementById('fullName').value;
    const birthDate = document.getElementById('birthDate').value;
    const email = document.getElementById('email').value;
    const userName = document.getElementById('userName').value;
    const passWord = document.getElementById('passWord').value;
    const confirmPass = document.getElementById('confirmPass').value;

    const errorSpans = document.querySelectorAll('span');
    for (let i = 0; i < errorSpans.length; i++) {
        errorSpans[i].innerHTML = "";
    }

    let isValid = true;

    // name qualifications
    if (fullName.trim().length < 2) {
        document.getElementById('nameError').innerHTML = " Must be at least 2 characters.";
        isValid = false;
    }

    // birthdate age check
    if (!birthDate) {
        document.getElementById('dateError').innerHTML = " Please enter your birthdate.";
        isValid = false;
    } else {
        const bday = new Date(birthDate);
        const today = new Date();
        const cutoff = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());
        if (bday > cutoff) {
            document.getElementById('dateError').innerHTML = " You must be at least 13 years old.";
            isValid = false;
        }
    }

    // gender check
    const maleChecked = document.getElementById('male').checked;
    const femaleChecked = document.getElementById('female').checked;
    if (!maleChecked && !femaleChecked) {
        document.getElementById('sexError').innerHTML = " Please select your sex.";
        isValid = false;
    }

    // email qualifications check
    const atPos = email.indexOf("@");
    const dotPos = email.lastIndexOf(".");
    if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= email.length) {
        document.getElementById('emailError').innerHTML = " Invalid email format.";
        isValid = false;
    }

    // username length and type check
    const userRegex = /^[a-zA-Z0-9]{8,20}$/;
    if (!userRegex.test(userName)) {
        document.getElementById('userError').innerHTML = " 8-20 characters, no symbols.";
        isValid = false;
    }

    // password qualifications check
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
    if (!passRegex.test(passWord)) {
        document.getElementById('passError').innerHTML = " 10+ chars, need uppercase, lowercase, and digit.";
        isValid = false;
    }

    // password confirming check
    if (confirmPass !== passWord || confirmPass === "") {
        document.getElementById('confirmError').innerHTML = " Passwords do not match.";
        isValid = false;
    }

    const interest = document.getElementById('interest').value;
    if (interest === "") {
        document.getElementById('interestError').innerHTML = " Please select an interest.";
        isValid = false;
    }

    // checks the checkbox 
    const locations = document.getElementsByName('location');
    let locationSelected = false;
    for (let j = 0; j < locations.length; j++) {
        if (locations[j].checked) {
            locationSelected = true;
        }
    }
    if (!locationSelected) {
        document.getElementById('locationError').innerHTML = " Choose at least one location.";
        isValid = false;
    }

    // third question check 
    const discovery = document.getElementById('discovery').value;
    if (discovery.trim() === "") {
        document.getElementById('discoveryError').innerHTML = " Please let us know how you found us.";
        isValid = false;
    }

    // success message
    if (isValid) {
        document.getElementById('successMessage').innerHTML = "Success! Thank you for joining Mangrove Matters Davao!";
    }

    return isValid;
}