/* ---------------------Saludamos EMAIL y guardamos en cookie----------------------------*/
function saludar(usuario) {
    let email = usuario;
    document.getElementById("hola").innerHTML = `Hola ${usuario}`;

    let email_cookie = getCookie(email);
    if (!email_cookie) {
        // console.log('No esta el email guardado');
        let datos = {
                user: email,
                visit: new Date(),
                preguntas: []
            }
            //console.log(datos);
        setCookie(email, JSON.stringify(datos), 7);
        let user = getCookie(email);
        // console.log("Usuario", JSON.parse(user))
    } else {
        // console.log('ya nos has visitado')
        let data = JSON.parse(email_cookie);
        let fecha = new Date(data.visit);
        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        document.getElementById("ultiVisita").innerHTML = `La última vez que entrastes fue el ${fecha.toLocaleDateString("es-ES", options)}`;
    }
    //console.log(document.cookie)
}

(function() {
    let usuario = getCookie('usuario');
    //console.log("Usuario", usuario)
    saludar(usuario);
})()