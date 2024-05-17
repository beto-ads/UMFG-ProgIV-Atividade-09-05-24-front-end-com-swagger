var body = document.querySelector("body")
var singUpButton = document.querySelector("#singUp")
var singInButton = document.querySelector("#singIn")

document.getElementById("register").addEventListener("click", registerUser);
document.getElementById("access").addEventListener("click", loginUser);


body.onload = function(){
    body.className = "on-load";
}

singUpButton.addEventListener("click", function(){
    body.className = "sing-up"
});

singInButton.addEventListener("click", function(){
    body.className = "sing-in"
});

function registerUser(event) {
    event.preventDefault(); 

    var email = document.querySelector("#register-form input[type='text']").value;
    var password = document.querySelector("#register-form input[type='password']").value;
    var confirmPassword = document.querySelector("#register-form #confirm-password").value;

    if (password !== confirmPassword) {
        alert('Senhas imcompativeis')
        return; 
    }

    fetch('https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/v1/signup', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
            confirmedPassword: confirmPassword
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => {
        if(response.status == 200){
            alert('Sucesso no Cadastro')
            window.location.href = 'welcome.html?email=' + encodeURIComponent(email)
        } else {
            alert('Erro no Cadastro')
        }
    })
    .catch(error => console.log(error));
}

function loginUser(event) {
    event.preventDefault(); 

    var email = document.querySelector("#login-form input[type='email']").value;
    var password = document.querySelector("#login-form input[type='password']").value;

    fetch('https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/v1/signin', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => {
        if(response.status == 200){
            alert('Sucesso no login')
            window.location.href = 'welcome.html?email=' + encodeURIComponent(email)
        } else {
            alert('Erro no login')
        }
    })
    .catch(error => console.log(error));
}
