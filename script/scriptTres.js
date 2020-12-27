function validarForm() {
    let x = document.forms["nuevosPreguntas"].elements;
    let canSend = true;
    for (var i = 0; i < x.length; i++) {
        if (x[i].value.length == 0) canSend = false;
    }

    if (canSend) {
        document.getElementById('btnSalir').disabled = false;
        //creamos una promesa para hacer el tiempo de espero de 5 segundos y activar el boton grabar
        let firstPromise = new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve(document.getElementById('btnGrabar').disabled = false)
            }, 1000);
        });

    } else {
        document.getElementById('btnSalir').disabled = 'disabled';
        document.getElementById('btnGrabar').disabled = 'disabled';
    }
}


function guardarPregunta() {
    let email = getCookie('usuario')
    let usuario = JSON.parse(getCookie(email))
    console.log(usuario)
        //pasamos los valores del form a JSON
    let pregunta = {
        pregunta: nuevosPreguntas.question.value,
        respuesta: nuevosPreguntas.trueFalse.value,
        puntuacion: nuevosPreguntas.puntuacion.value,
        estado: "ok"
    }
    usuario.preguntas.push(pregunta)
    crearTabla(usuario.preguntas)
    setCookie(email, JSON.stringify(usuario), 7)
    usuario = getCookie(email)
    console.log(usuario)
}

function crearTabla(json) {
    var columna = [];
    for (var i = 0; i < json.length; i++) {
        for (var key in json[i]) {
            if (columna.indexOf(key) === -1) {
                columna.push(key);
            }
        }
    }
    // Crear tabla.
    var table = document.createElement("table");
    // Crear headers de la tabla
    var tr = table.insertRow(-1); // table row.
    for (var i = 0; i < columna.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = columna[i];
        tr.appendChild(th);
    }
    //Añadir datos json en forma de fila
    for (var i = 0; i < json.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < columna.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = json[i][columna[j]];
        }
    }
    // Añadimos la tabla al elemento contenedor
    var elementShowData = document.getElementById('showTable');
    elementShowData.innerHTML = "";
    elementShowData.appendChild(table);
    document.getElementById('btnSalir').disabled = 'disabled';
    document.getElementById('btnGrabar').disabled = 'disabled';
}