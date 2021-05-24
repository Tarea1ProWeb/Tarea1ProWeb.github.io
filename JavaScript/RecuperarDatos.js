var forma = document.getElementById("forma"),
    salidaNombre = document.getElementById("salidaNombre");
   
forma.addEventListener("submit", recuperar, false);

function recuperar(){
    var nombre = forma["nombre"].value;
    salidaNombre.textContent = nombre;
    

}
