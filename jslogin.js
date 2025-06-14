document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const pass = document.getElementById("pass").value.trim();
    const correctPass = "matkhau123"; // 👉 Mật khẩu đúng được định sẵn

    if (pass === correctPass) {
      document.getElementById("login-form").classList.add("hidden");
      document.getElementById("news-board").classList.remove("hidden");
    } else {
      alert("Sai mật khẩu!");
    }
  });