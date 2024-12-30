// Buton ve form elemanlarını seçiyoruz
const protectedBtn = document.getElementById('protectedBtn');
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Doğru kullanıcı adı ve şifre
const correctUsername = "contact@solver.com.tr";
const correctPassword = "Slvr2025";

// Butona tıklandığında giriş formunu göster
protectedBtn.addEventListener('click', function() {
    protectedBtn.style.display = "none"; // Butonu gizle
    loginForm.classList.remove('hidden'); // Giriş formunu göster
});

// Giriş formundaki "Giriş Yap" butonuna tıklandığında
loginBtn.addEventListener('click', function() {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Kullanıcı adı ve şifre doğrulaması
    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        alert("Giriş başarılı! Şimdi yönlendiriliyorsunuz.");
        window.location.href = "https://docs.google.com/spreadsheets/d/1uWgm5gE4un-JdsG8BxcNAdXLoC1ZYVPW/export?format=xlsx"; // Gerçek Google Sheets linki
    } else {
        alert("Kullanıcı adı veya şifre hatalı. Lütfen tekrar deneyin.");
    }
});
