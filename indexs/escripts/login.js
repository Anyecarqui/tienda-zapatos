
 
const loginForm = document.getElementById("loginForm");

loginForm?.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  //traigo lo que esta guardado en el localStorage
  let users = JSON.parse(localStorage.getItem("usuarios")) 

  // Buscar que loq ue ingrese en el correo y la contraseña este guarda en el localstorage
  const buscarUser = users.find(user => user.email === email && user.password === password)

  if (buscarUser) {
    localStorage.setItem("perfilActual", JSON.stringify(buscarUser));
    window.location.href = "home.html";
  } else {
    alert("Correo o contraseña incorrectos-");
  }
});
 