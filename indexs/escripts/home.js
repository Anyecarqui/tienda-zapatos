console.log("hola")
const tacones = [
    {
        id:"1",
        Title: "Tacones negros",
        price: "60.000",
        poster: "https://images.unsplash.com/photo-1523464771852-de9293765f7a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        id: "2",
        Title: "Tacones Palo Rosa",
        price: "60.000",
        poster:"https://images.unsplash.com/photo-1534653299134-96a171b61581?q=80&w=1350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        id:"3",
        Title: "Tacones Plateados",
        price: "74.000",
        poster: "https://media.istockphoto.com/id/184967562/es/foto/zapatos-de-tacones-altos.jpg?s=1024x1024&w=is&k=20&c=djio6yloB49AmtX6-k-pOeN4gz-w7wuAtowVS9lVkJ4=",
    },

    {
        id:"4",
        Title:"Tacones Rosados",
        price:"80.000",
        poster: "https://media.istockphoto.com/id/1489218334/es/foto/moda.webp?b=1&s=612x612&w=0&k=20&c=pdazrHq7fIw2TEoT2SpCY8BkP7ryHIfokkYTgPtsWgA=",
    },

    {
        id:"5",
        Title:"Tacones Bota",
        price:"120.000",
        poster:"https://images.unsplash.com/photo-1638953173691-671b6c2692fa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        id:"6",
        Title:"Tacones Blancos",
        price:"67.000",
        poster:"https://images.unsplash.com/photo-1662138679794-110b0cba27b9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

document.addEventListener("DOMContentLoaded", function () {

localStorage.setItem("tacones", JSON.stringify(tacones));

const tacon = JSON.parse(localStorage.getItem("tacones"));


function displaytacon() {

const mostrarTacon = document.getElementById("displaytacon");
mostrarTacon.innerHTML = "" ;
console.table(tacon)

tacon.forEach(Element =>{
 const {Title, poster, id, price} = Element
   const card = document.createElement("div");
   card.className="card"
   card.innerHTML = `
   <img id="imgCard" src=${poster} alt=${Title}/>
   <h2>${Title}</h2> 
   <p>${price}</p>
   
   <button id=${id} type="button">favo</button>
   `;
mostrarTacon.appendChild(card);

document.getElementById(id).addEventListener('click', function () {
    localStorage.setItem("detalle", JSON.stringify(Element));
    window.location.href = "../indexs/favoritos.html"; 
})

})

function favorits() {
    
}
}




if (window.location.pathname.endsWith("home.html")) {
    displaytacon()   
} 

})

