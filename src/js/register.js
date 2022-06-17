let signUp = document.getElementById('register')
let button = document.getElementById('btn-signUp')
let phoneNum = document.getElementById('phoneNum')
let error = document.getElementById('errorMessage')

signUp.addEventListener('submit', function(e){
    e.preventDefault();
    let username = document.getElementById('name').value
    let phoneNum = document.getElementById('phoneNum').value
    let pass = document.getElementById('password').value
    let confirmPass = document.getElementById('confirmPassword').value

    error.style.display = "none";

    let phoneValid = 1

    for(let i = 0; i < phoneNum.length; i++){
        if(phoneNum[i] < '0' || phoneNum[i] > '9'){
            phoneValid = 0
            break
        }
    }
    console.log(phoneValid)

    if(username.length < 5){
        error.innerHTML = "Username must be at least 5 characters"
        error.style.display = "block"
        return
    }
    else if(phoneValid == 0){
        error.innerHTML = "Phone Number is not valid"
        error.style.display = "block"
        return
    }
    else if(pass != confirmPass){
        error.innerHTML = "Password is not match"
        error.style.display = "block"
        return
    }

    location.replace("login.html")
})