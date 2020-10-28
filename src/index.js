import validator from './validator.js';
let nombre;
let numero_tarjeta;


document.getElementById("boton_inicio").onclick = function () {
    document.getElementById("primera_pagina").style.display = "none";
    document.getElementById("segunda_pagina").style.display = "block";
};


// document.getElementsByClassName("boton_inicio").addEventListener("click","pasar_pagina_2()",true)
//     document.getElementById("primera_pagina").style.display = "none";
//     document.getElementById("segunda_pagina").style.display = "block";




document.getElementById("boton_enviar").onclick = function () {
    nombre = document.getElementById("nombre").value
    numero_tarjeta = document.getElementById("numero_tarjeta").value
    let fecha = document.getElementById("fecha_expiracion").value
    let cvv = document.getElementById("cvv").value

    if (nombre != "" && numero_tarjeta != "" && fecha != "" && cvv != "") {
        document.getElementById("segunda_pagina").style.display = "none";
        document.getElementById("tercera_pagina").style.display = "block";

        document.getElementById("resultados_datos").innerHTML = nombre.toUpperCase()+ "<br>la tarjeta ingresada número " + validator.maskify(numero_tarjeta) + "<br>es <strong>"+validator.isValid(numero_tarjeta)

    }
    else {
        alert("Faltan ingresar datos")
    }

}
// al presionar el boton volver limpia la información almacenada y nos devuelve a la pagina 2 de ingreso de datos 
document.getElementById("volver").onclick = function () {
    document.getElementById("tercera_pagina").style.display = "none";
    document.getElementById("segunda_pagina").style.display = "block";
    document.getElementById("nombre").value="";
    document.getElementById("numero_tarjeta").value="";
    document.getElementById("fecha_expiracion").value="";
    document.getElementById("cvv").value="";
    
}
// al presionar salir nos recarga la pagina y nos devuelve  la pagina 1 (principal )
document.getElementById("salir").onclick = function () {
    document.getElementById("tercera_pagina").style.display = "none";
    document.getElementById("primera_pagina").style.display = "block";
    window.location.reload();
}
document.addEventListener.onfocusout = () => {
    let fecha = document.getElementById("fecha_expiracion").value;
    let mes = parseInt(fecha.split("/")[0]);
    let ano = parseInt(fecha.split("/")[1]);
    if (parseInt(mes) > 12) {
        alert("Fecha incorrecta");
        document.getElementById("fecha_expiracion").value = null;
    }
    if (parseInt(mes) < 1) {
        alert("Fecha incorrecta");
        document.getElementById("fecha_expiracion").value = null;
    }
    if (parseInt(ano) < 1900) {
        alert("Fecha incorrecta");
        document.getElementById("fecha_expiracion").value = null;
    }
}

// se ejecuta al escribir
document.getElementById("fecha_expiracion").addEventListener("keydown", e => {
    if (e.which != 9 && e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) && (e.which < 96 || e.which > 105)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    else {
        let valor = document.getElementById("fecha_expiracion").value
        if (valor.length == 2 && e.which != 8) {
            document.getElementById("fecha_expiracion").value = valor + "/";
        }
        
    }
})
document.getElementById("numero_tarjeta").addEventListener("keydown", e => {
    if (e.which != 9 && e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) && (e.which < 96 || e.which > 105)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
    // else {
    //     let valor = document.getElementById("numero_tarjeta").value

    // }
})


// eslint-disable-next-line no-console
console.log(validator);