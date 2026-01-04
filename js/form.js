document.getElementById('authForm').onsubmit = function(e) {
    e.preventDefault();

    const email = document.querySelector('.input-field input[type="email"]').value;

    const userData = {
        userEmail: email,
        isLoggedIn: true,
        loginTime: new Date().toLocaleString()
    };

    localStorage.setItem('currentUser', JSON.stringify(userData));
    window.location.href = 'index.html'; 
};