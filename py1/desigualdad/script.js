document.getElementById('loginForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Previene el envío del formulario  

    const username = document.getElementById('username').value;  
    const password = document.getElementById('password').value;  
    const message = document.getElementById('message');  

     
    if (username === "cet" && password === "cet") {
        
        message.textContent = "Inicio de sesión exitoso!";
        message.style.color = "green";
        window.location.href = "inicio.html"

        
    } else {
    
        message.textContent = "Usuario o contraseña incorrectos.";
        message.style.color = "red";
    }
});
