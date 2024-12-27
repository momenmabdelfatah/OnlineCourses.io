function forgotPassword() {
    // Hide login form and show forgot password form
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('forgot-password-form').classList.add('active');
}

function registerForm() {
    // Hide login form and show register form
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('register-form').classList.add('active');
}

function backToLogin() {
    // Hide all forms and show login form
    document.getElementById('forgot-password-form').classList.remove('active');
    document.getElementById('register-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
}

// Initially, show the login form
document.getElementById('login-form').classList.add('active');
