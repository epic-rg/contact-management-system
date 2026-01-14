const token = localStorage.getItem("adminToken");

if (!token) {
  window.location.href = "./admin-login.html";
}

fetch("http://localhost:5000/api/admin/contacts", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => {
    if (res.status === 401) {
      localStorage.removeItem("adminToken");
      window.location.href = "./admin-login.html";
    }
    return res.json();
  })
  .then((data) => {
    const list = document.getElementById("messages");

    data.data.forEach((msg) => {
      const li = document.createElement("li");
      li.innerHTML = `  <span>${msg.name}</span>
                        <span>${msg.email}</span>
                        <span>${msg.message}</span>`;
      list.appendChild(li);
    });
  });

document.getElementById("logout").onclick = () => {
  localStorage.removeItem("adminToken");
  window.location.href = "./admin-login.html";
};
