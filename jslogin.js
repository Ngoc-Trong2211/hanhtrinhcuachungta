document.getElementById("login-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const pass = document.getElementById("pass").value.trim();

    const response = await fetch("login.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `pass=${encodeURIComponent(pass)}`
    });

    const result = await response.text();
    if (result.trim() === "success") {
      document.getElementById("login-form").classList.add("hidden");
      document.getElementById("news-board").classList.remove("hidden");
    } else {
      alert("Sai mật khẩu!");
    }
  });