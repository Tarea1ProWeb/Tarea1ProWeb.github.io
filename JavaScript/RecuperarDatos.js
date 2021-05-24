var forma = document.getElementById("forma"),
    salidaBoleta = document.getElementById("salidaBoleta"),
    salidaNombre = document.getElementById("salidaNombre");
   
forma.addEventListener("submit", recuperar, false);

function recuperar(){
    var boleta = forma["boleta"].value,
    nombre = forma["nombre"].value;
    salidaBoleta.textContent = boleta;
    salidaNombre.textContent = nombre;
    

}
