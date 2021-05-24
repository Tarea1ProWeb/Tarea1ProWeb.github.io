var forma = document.getElementById("forma"),
    salidaNombre = document.getElementById("salidaNombre"),
    salidaSecreto = document.getElementById("salidaSecreto"),
    salidaNavegador = document.getElementById("salidaNavegador"),
    salidaEmail = document.getElementById("salidaEmail"),
    salidaUsuario = document.getElementById("salidaUsuario"),
    salidaUrl = document.getElementById("salidaUrl"),
    salidaTelefono = document.getElementById("salidaTelefono"),
    salidaVerso = document.getElementById("salidaVerso");

forma.addEventListener("submit", recuperar, false);

function recuperar(){
    var nombre = forma["nombre"].value;
    salidaNombre.textContent = nombre;
    var secreto = forma["secreto"].value;
    salidaSecreto.textContent = secreto;
    var navegador = forma["navegador"].value;
    salidaNavegador.textContent = navegador;
    var email = forma["email"].value;
    salidaEmail.textContent = email;
    var usuario = forma["usuario"].value;
    salidaUsuario.textContent = usuario;
    var url = forma["url"].value;
    salidaUrl.textContent = url;
    var telefono = forma["telefono"].value;
    salidaTelefono.textContent = telefono;
    var verso = forma["verso"].value;
    salidaVerso.textContent = verso;

}
