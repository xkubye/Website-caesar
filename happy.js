function validateLogin() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var notificationOverlay = document.getElementById('notification-overlay');
    var notification = document.getElementById('notification');
    
    var username = usernameInput.value;
    var password = passwordInput.value;

    // Gantilah 'your_default_username' dan 'your_default_password' dengan nilai default yang diinginkan.
    var defaultUsername = 'Simmo';
    var defaultPassword = 'simmo123';

    if (username === defaultUsername && password === defaultPassword) {
        // Tampilkan pemberitahuan berhasil jika login berhasil
        notification.innerHTML = 'Login berhasil! Akan diarahkan ke halaman Ulang Tahun...';
        notification.style.backgroundColor = '#00cc00';
        notificationOverlay.style.display = 'block';

        // Redirect ke halaman ulang tahun setelah 2 detik
        setTimeout(function() {
            window.location.href = 'birthday.html';
        }, 2000);
    } else {
        // Tampilkan pemberitahuan gagal jika login gagal
        notification.innerHTML = 'Nama pengguna atau kata sandi tidak valid. Silakan coba lagi.';
        notification.style.backgroundColor = '#ff6666';
        notificationOverlay.style.display = 'block';

        // Menghapus nilai input setelah percobaan login yang tidak berhasil
        usernameInput.value = '';
        passwordInput.value = '';

        // Sembunyikan pemberitahuan setelah 3 detik
        setTimeout(function() {
            notificationOverlay.style.display = 'none';
        }, 3000);
    }
}
