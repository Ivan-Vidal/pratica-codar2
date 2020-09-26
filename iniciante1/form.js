document.querySelector("form").addEventListener("submit")
    console.log("efetuando login...")

    let email = document.getElementById("email");
    let senha = document.getElementById("senha");

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://52.91.139.190/fsapi/users/login" , true);
    xhttp.setRequestHeader("Content-type", "application/json");
    
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            document.getElementById("welcome").innerHTML = 'Bem-vindo '+ json.name;
        }
    };
    xhttp.send(JSON.stringify({
        "email": email.value,
        "password": password.value
    }));

    // não vai enviar o formulário
    event.preventDefault()
