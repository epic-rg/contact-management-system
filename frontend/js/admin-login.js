document.getElementById("admin-login-form").addEventListener("submit", async e => {
  e.preventDefault();

  const form = e.target;

  const res = await fetch("https://contact-management-system-2-fupt.onrender.com/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: form.username.value,
      password: form.password.value,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    alert("Invalid credentials");
    return;
  }

  localStorage.setItem("adminToken", data.token);
  window.location.href = "./admin-dashboard.html";
});