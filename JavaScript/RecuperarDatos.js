var forma = document.getElementById("forma"),
    txtFecha = forma["fecha"],
    salidaBoleta = document.getElementById("salidaBoleta"),
    salidaNombre = document.getElementById("salidaNombre"),
    salidaSecuencia = document.getElementById("salidaSecuencia"),
    salidaMateria = document.getElementById("salidaMateria"),
    salidaFecha = document.getElementById("salidaFecha");
   
forma.addEventListener("submit", recuperar, false);

function recuperar(){
    var boleta = forma["boleta"].value,
        nombre = forma["nombre"].value,
        secuencia = forma["secuencia"].value,
        materia = forma["materia"].value,
        fecha = new Date(txtFecha.value);
        salidaFecha.textContent = (fecha.getDate()+1)+"/0"+(fecha.getMonth()+1)+"/"+(fecha.getFullYear());
    salidaBoleta.textContent = boleta;
    salidaNombre.textContent = nombre;
    salidaSecuencia.textContent = secuencia;
    salidaMateria.textContent = materia;
    

}
