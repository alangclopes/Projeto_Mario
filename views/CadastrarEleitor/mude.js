function ViewPassword(){
    const passwordInput = document.getElementById('Senha');
    const toggleButton = document.getElementById('toggleSenha');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.classList.remove("fa-eye-slash")
        toggleButton.classList.add("fa-eye")
    } else {
        passwordInput.type = 'password';
        toggleButton.classList.remove("fa-eye")
        toggleButton.classList.add("fa-eye-slash")
    }
}