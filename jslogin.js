async function hashSHA256(text) {
  const msgUint8 = new TextEncoder().encode(text);
  const hb = await crypto.subtle.digest("SHA-256", msgUint8);
  const ha = Array.from(new Uint8Array(hb));
  return ha.map((b) => b.toString(16).padStart(2, "0")).join("");
}

const ch = "1000e519b2223ce141fc54dc33a35c603ab7e1b2b41f137217d4673202012743";

document
  .getElementById("login-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const pass = document.getElementById("pass").value.trim();
    const inputHash = await hashSHA256(pass);

    if (inputHash === ch) {
      document.getElementById("login-form").classList.add("hidden");
      document.getElementById("confirm-form").parentElement.classList.remove("hidden");
    }
  });

document.getElementById("confirm").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("confirm-form").parentElement.classList.add("hidden");
  document.getElementById("board").classList.remove("hidden");
});

document.getElementById("sayno").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("confirm-form").parentElement.classList.add("hidden");
  document.getElementById("confirm-form-v2").parentElement.classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("confirm-form").parentElement.classList.remove("hidden");
    document.getElementById("confirm-form-v2").parentElement.classList.add("hidden");
  }, 5000);
});
