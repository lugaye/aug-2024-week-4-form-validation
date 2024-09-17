

function validateForm(){
    let valid = true;

    // clear error messages
    document.getElementById('nameError').innerHTML = ''
    document.getElementById('emailError').innerHTML = ''
    document.getElementById('passwordError').innerHTML = ''
    document.getElementById('ageError').innerHTML = ''

    // validate name
    let name = document.getElementById('name').value;
    if(name === ""){
        document.getElementById('nameError').innerHTML = 'Error! Name is required.'
        valid = false;
    }

    //validate email
    let email = document.getElementById('email').value;
    if(email === ""){
        document.getElementById('emailError').innerHTML = 'Error! Email is required.'
        valid = false;
    }

    //validate password
    let password = document.getElementById('password').value;
    if(password === ""){
        document.getElementById('passwordError').innerHTML = 'Error! Password is required.'
        valid = false;
    } else if(password.length < 6){
        document.getElementById('passwordError').innerHTML = 'Error! Password must be atleast 6 characters long.'
        valid = false;
    }

    //validate age
    let age = document.getElementById('age').value;
    if(age === ""){
        document.getElementById('ageError').innerHTML = 'Error! Age is required.'
        valid = false;
    } else if(isNaN(age) || age < 18){
        document.getElementById('ageError').innerHTML = 'Error! Age must be a number not less than 18.'
        valid = false;
    }

    //if all validations pass, form should be submitted.
    return valid
}