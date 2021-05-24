var forma = document.getElementById("forma"),
    salidaBoleta = document.getElementById("salidaBoleta"),
    salidaNombre = document.getElementById("salidaNombre"),
    salidaSecuencia = document.getElementById("salidaSecuencia"),
    salidaMateria = document.getElementById("salidaMateria");
   
forma.addEventListener("submit", recuperar, false);

function recuperar(){
    var boleta = forma["boleta"].value,
        nombre = forma["nombre"].value,
        secuencia = forma["secuencia"].value,
        materia = forma["materia"].value;
    salidaBoleta.textContent = boleta;
    salidaNombre.textContent = nombre;
    salidaSecuencia.textContent = secuencia;
    materia.textContent = materia;
    

}
