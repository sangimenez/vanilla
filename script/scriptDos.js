/* ---------------------Saludamos EMAIL y guardamos en cookie----------------------------*/
function saludar(usuario) {
    let email = usuario;
    document.getElementById("hola").innerHTML = `Hola ${usuario}`;

    let email_cookie = getCookie(email);
    if (!email_cookie) {
        console.info("Primera visita, email no guardado");
        let datos = {
            user: email,
            visit: new Date(),
            preguntas: []
        }
        setCookie(email, JSON.stringify(datos), 7);
        let user = getCookie(email);
    } else {
        console.info('Email ya registrado');
        let data = JSON.parse(email_cookie);
        let fecha = new Date(data.visit);
        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        document.getElementById("ultiVisita").innerHTML = `La última vez que entrastes fue el ${fecha.toLocaleDateString("es-ES", options)}`;
    }
}

(function() {
    let usuario = getCookie('usuario');
    saludar(usuario);
})()