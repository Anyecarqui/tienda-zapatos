const register = document.getElementById("register");

//------------Manipulación del Formulario de Registro de Usuario------------------------------//
register?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // creo el objeto
  const user = {
    name,
    email,
    password,
  };

  // crear un arrays
  let users = JSON.parse(localStorage.getItem("usuarios")) || [];
  //  JSON.parse(localStorage.getItem("usuarios")) ?  users = JSON.parse(localStorage.getItem("usuarios")) : users = [];
  // validar si el correo esta rgistrado

  const userExists = users.some((user) => user.email === email);

  if (!userExists) {
    users.push(user);
    // enviar al localStorage
    localStorage.setItem("usuarios", JSON.stringify(users));
    alert("Registrado exitosamente, Puedes iniciar sesión");
    register.reset();
    window.location.href="../indexs/login.html"
  } else {
    alert("Este correo ya se encuentra registrado");
  }
});


//-----------------Iniciar sesión--------------//

