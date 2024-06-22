function registerUser(event) {
    event.preventDefault();
    
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    
    if (localStorage.getItem(username)) {
        alert('Username already exists!');
        return;
    }
    
    localStorage.setItem(username, password);
    alert('User registered successfully!');
    document.getElementById('registerForm').reset();
}

function loginUser(event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    const storedPassword = localStorage.getItem(username);
    
    if (storedPassword === password) {
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
}
