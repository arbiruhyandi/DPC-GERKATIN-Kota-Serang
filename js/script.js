  // Login Javascript
  document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah reload halaman

  const username = document.querySelector('input[name="username"]').value.trim();
  const password = document.querySelector('input[name="password"]').value.trim();

  // Data login yang diizinkan
  const validUsername = "gerkatinkotaserang2014@gmail.com";
  const validPassword = "Kotaserang2024";

  if (username === validUsername && password === validPassword) {
    alert("Login berhasil!");
    sessionStorage.setItem("isLoggedIn", true); // simpan status login
    window.location.href = "edit-index.html";   // redirect ke dashboard
  } else {
    alert("Nama pengguna atau kata sandi salah!");
  }
});

  // Lupa kata sandi Javascript
document.getElementById("lupaSandi").addEventListener("click", function (e) {
  e.preventDefault(); // mencegah reload

  const email = prompt("Masukkan email Anda untuk reset kata sandi:");

  if (email) {
    // Validasi sederhana
    if (!email.includes("@") || !email.includes(".")) {
      alert("Format email tidak valid.");
    } else {
      // Simulasi proses kirim email
      alert("Tautan reset telah dikirim ke " + email + ". Silakan cek kotak masuk Anda.");
    }
  }
});