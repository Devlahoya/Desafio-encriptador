var historial = [];

function encriptarTexto(texto) {
    texto = texto.toLowerCase(); // Convertir a minúsculas
    texto = texto.replace(/[áäâà]/g, "a");
    texto = texto.replace(/[éëêè]/g, "e");
    texto = texto.replace(/[íïîì]/g, "i");
    texto = texto.replace(/[óöôò]/g, "o");
    texto = texto.replace(/[úüûù]/g, "u");
    texto = texto.replace(/[^a-z!¡?¿1234567890"ñ\s]/g, ""); // Eliminar caracteres especiales
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
}

function desencriptarTexto(texto) {
    texto = texto.replace(/ufat/g, "u");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/enter/g, "e");
    return texto;
}

function encriptar() {
    var texto = document.getElementById("textoInput").value;
    if (texto !=""){
        var textoEncriptado = encriptarTexto(texto);
        historial.push({ accion: "Encriptado", texto: textoEncriptado });
        actualizarHistorial();
        document.getElementById("textoResultado").innerText = textoEncriptado;
        document.getElementById("imagenResultado").style.display = "none";
        document.getElementById("respuesta").style.display = "block";
    }
    else{
        alert("Error, el campo no puede ir vacio");
    }
    
}

function desencriptar() {
    var texto = document.getElementById("textoInput").value;
    if (texto !=""){
    var textoDesencriptado = desencriptarTexto(texto);
    historial.push({ accion: "Desencriptado", texto: textoDesencriptado });
    actualizarHistorial();
    document.getElementById("textoResultado").innerText = textoDesencriptado;
    document.getElementById("imagenResultado").style.display = "none";
    document.getElementById("respuesta").style.display = "block";
}
else{
    alert("Error, el campo no puede ir vacio");
}

}

function resetear() {
    historial = [];
    document.getElementById("respuesta").style.display = "none";
    document.getElementById("imagenResultado").style.display = "block";
    document.getElementById("textoInput").value="";
    actualizarHistorial();
}

function actualizarHistorial() {
    var historialHTML = "";
    historial.forEach(function (item, index) {
        historialHTML += "<div>" + item.accion + ": " + item.texto + "</div>";
    });
    document.getElementById("historial").innerHTML = historialHTML;
}

function copiarTexto() {
    var textoCopiar = document.getElementById("textoResultado").innerText;
    navigator.clipboard.writeText(textoCopiar)
        .then(function() {
            alert("Texto copiado al portapapeles.");
        })
        .catch(function(error) {
            console.error("Error al copiar el texto: ", error);
        });
}
