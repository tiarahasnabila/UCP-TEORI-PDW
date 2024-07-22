document.getElementById('loginForm').addEventListener('button', function(event) {
    event.preventDefault();
        
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
        
    // Cek login admin
    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'index.html'; // Ganti index.html dengan halaman admin yang sesuai
    } 
    // Cek login user
    else if (username === 'user' && password === 'user123') {
        window.location.href = 'student.html'; // Ganti student.html dengan halaman user yang sesuai
    } 
    else {
        alert('Username atau password salah! Silakan coba lagi.');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});
