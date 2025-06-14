async function hashSHA256(text) {
    const msgUint8 = new TextEncoder().encode(text);
    const hb = await crypto.subtle.digest('SHA-256', msgUint8);
    const ha = Array.from(new Uint8Array(hb));
    return ha.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  const ch = "9bf72d8a19d77b13fa3dbe67726d5ef7967b9c46038103ed528956b18ae18001";

  document.getElementById("login-form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const pass = document.getElementById("pass").value.trim();
    const inputHash = await hashSHA256(pass);

    if (inputHash === ch) {
      document.getElementById("login-form").classList.add("hidden");
      document.getElementById("news-board").classList.remove("hidden");
    }
  });