function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // Username dan password yang sudah ditentukan
    let validUser = "apan8";
    let validPass = "kerenbanget";

    if (user === validUser && pass === validPass) {
        alert("Login Berhasil!");
        window.location.href = "sukses.html";  // Pindah halaman
        return false;
    } else {
        alert("Login Gagal! Username atau password salah.");
        return false; // Tetap di halaman login
    }
}
