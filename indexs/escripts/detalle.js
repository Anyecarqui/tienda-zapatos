document.addEventListener("DOMContentLoaded", function () {
    const divDetalle = document.getElementById("divDetalle");
    const tacoactual = JSON.parse(localStorage.getItem("detalle"));
   
    
    const {Title, poster, id, price} = tacoactual;
    const tacos = document.createElement("div");
    tacos.className="tacos";
    tacos.innerHTML = `
    <img id="imgTaco" src=${poster} alt=${Title}/>
    <h2>${Title}</h2> 
    <p>${price}</p>
    
    `;
 divDetalle.appendChild(tacos);

}) 