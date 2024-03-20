let
    ingreso = "",
    pass = "",
    user = "";
localStorage.setItem("sesion", false);

const
    cuentas = [
        { cuenta: 'Jhon', contrasena: 'Salchichon' },
        { cuenta: 'Gustavo', contrasena: 'fideos' },
        { cuenta: 'Ariel', contrasena: 'uwu' },
        { cuenta: 'Gnomo', contrasena: 'wo!' },
    ];
localStorage.setItem ('cuentas', JSON.stringify(cuentas))
console.log(JSON.parse(localStorage.getItem ('cuentas')));
let
    loginForm = document.getElementById("form"), //usé let porque tengo que volver a asignarles valores al cambiar la estructura HTML
    loginButt = document.getElementById("log"),
    regButt = document.getElementById("reg"),
    loginError = document.getElementById("error_txt");

//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ Variables
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ HTML
///////////////////////////////////
//imagino que esto no se hace así//
///////////////////////////////////

const
    htmlReg = `   <input type="text" name="user" id="user" class="box" placeholder="Usuario"> 
                    <input type="password" name="pass" id="pass_id" class="box" placeholder="Contraseña">
                    <input type="password" name="pass2" id="pass2_id" class="box" placeholder="Confirmar contraseña">
                    <input type="button" value="Registrarme" id="reg">
                    <input type="button" value="Vovler a inicio de sesión" id="log">`,
    //hoja de registro^

    htmlLog = `     <input type="text" name="user" id="user" class="box" placeholder="Usuario">
                    <input type="password" name="pass" id="pass_id" class="box" placeholder="Contraseña">
                    <input type="button" value="Iniciar sesión" id="log">
                    <input type="button" value="Registrarse" id="reg">`,
    //index^

    htmlErrorLog = `<p id="error_txt" style="opacity: 0;">Usuario y/o<span id="error">contraseña invalidos</span></p>`,
    //error usuario y/o contraseña incorrectos^

    htmlErrorRegClon = `<p id="error_txt">Usuario ya existente<span id="error">por favor, ingrese otro nombre de usuario</span></p>`,
    //error usuario ya existente^

    htmlErrorRegPass = `<p id="error_txt">Las contraseñas<span id="error">no coinciden</span></p>`,
    //error contraseñas diferentes^

    htmlErrorRegNan = `<p id="error_txt">Complete todos los<span id="error">campos por favor</span></p>`;
//error datos vacíos^

//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ HTML
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Funciones

function mostrarError() {       //muestra la caja de error unos segundos
    loginError.style.opacity = 1;
    setTimeout(() => {
        loginError.style.opacity = 0;
    }, 3000)
}

function checkVacio(user_check, pass_check, pass2_check) {      //checkea hay datos en blanco           //no encontré un método funcional para borrar los espacios del input
    if (user_check === "" || pass_check === "" || pass2_check === "") {
        document.getElementById('error_box').innerHTML = htmlErrorRegNan;
        mostrarError();
        return false;
    } else {
        return true;
    }
}



/* 
function recuperarPass() {//Busca el nombre de usuario y devuelve la contraseña
    while (ingreso != "1") {
        cuentas.forEach(element => {
            console.log(element.cuenta);
        });
        ingreso = prompt("Ingrese el nombre de usuario:\n1|Volver|\n\nSe muestra la lista en consola")
        const recuperar = cuentas.find(element => {
            return element.cuenta == ingreso;
        })
        console.clear();//limpia consola

        if (ingreso == "1" || ingreso == null) {//sale de la funcion
            break;
        } else if (recuperar.cuenta != undefined) {
            alert(`La contraseña del usuario ${recuperar.cuenta} es:\n\n${recuperar.contrasena}`)
            break;
        } else {
            alert('No se ha encontrado el usuario')
        }
    }
} */

function iniciarSesion(user_iniciar, pass_iniciar) {//por algun molesto motivo el forEach no funcionaba como debía y solo pasaba una vez por el array por más elementos que tuviera
    const cuentaCorrecta = cuentas.some(element => {      //busca el objeto correspondiente
        return element.cuenta === user_iniciar && element.contrasena === pass_iniciar;
    })
    if (cuentaCorrecta) {       //chequea si se encontró la cuenta
        //////////////////////////////////////////////////////////////////////////////////
        localStorage.setItem("sesion", true);
        //////////////////////////////////////////////////////////////////////////////////
    } else {                  //si no se encontró nada:
        mostrarError();
    }
}

//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ Funciones
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Event Listeners


//login
loginButt.addEventListener("click", () => {
    const user = loginForm.user.value,
        pass = loginForm.pass.value;
    iniciarSesion(user, pass)
})

//registro
regButt.addEventListener("click", () => {//crea usuario nuevo               no lo hice funcion porque no me pareció necesario
    loginError.style.opacity = 0;//oculta el error en caso de estar

    loginForm.innerHTML = htmlReg; //añade una caja de texto para confirmar contraseña

    loginButt = document.getElementById("log");
    regButt = document.getElementById("reg");           //tengo que volver a buscar todo porque usé el .innerHTML arriba
    loginError = document.getElementById("error_txt");


    regButt.addEventListener("click", () => {//click al botón "Registrarse"

        const
            formUser = document.getElementById("form").user.value,
            formPass = document.getElementById("form").pass.value,
            formPass2 = document.getElementById("form").pass2.value;        //guarda los datos

        const check = cuentas.find(element => {     //busca si el usuario ya existe
            return element.cuenta == formUser;
        })
        if (checkVacio(formUser, formPass, formPass2)) {//Chekea si hay datos vacíos
            if (check == null) {    //si se encuentra repetido el usuario en la 'base de datos' check no es null        no lo pongo dentro del anterior if para que el else tenga más coherencia
                if (formPass == formPass2) {    //chekea si las contraseñas son iguales

                    cuentas = JSON.parse(localStorage.getItem ('cuentas'));     //recupera la lista de cuentas
                    cuentas.push({ cuenta: formUser, contrasena: formPass });   //pushea la nueva cuenta
                    localStorage.setItem ('cuentas', JSON.stringify(cuentas));  //almacena la lista de cuentas actualizada

                    console.log(cuentas);/////////////////////////////////////////////////////////////////////////////
                    iniciarSesion(formUser, formPass)   //ejecuta la funcion para iniciar sesión automaticamente
                } else {        //si las contraseñas no son iguales
                    document.getElementById('error_box').innerHTML = htmlErrorRegPass;
                    mostrarError();
                }
            } else {            //si el nombre de usuario ya existe
                document.getElementById('error_box').innerHTML = htmlErrorRegClon;
                mostrarError();
            }
        }
    })

    loginButt.addEventListener("click", () => {

    })

})









while (false) {//user != "2" && user != null){       //el null es en caso de que el usuario presione ESC o el boton de 'cancelar', sin esto el while se sigue repitiendo en ambos casos
    if (sesion) {//chequea si se inició sesión
        ingreso = prompt(`///Bienvenido ${user}///\n\nPor ahora no hace anda más, pero tiene más funciones más allá de iniciar sesion.\n\nLas cuentas nuevas se almacenan en un array por lo que se puede volver e ingresar de nuevo con la cuenta creada\n\n1|Cerrar sesión(volver)`);
        if (ingreso == "1" || ingreso == null) {
            sesion = false;
            continue;
        }

    } else {//si no se inició sesión:
        user = prompt("///Bienvenido a la red social más inutil de todas uwu///\n__________________________________________________________\nElija una de las opciones del menú: \n\n1| Iniciar sesión\n2| Crear usuario\n3| Salir")
        if (user == "1") {
            user = prompt(`Ingrese el nombre de usuario:\n1| Volver\n\n(usuario: Jhon)`)
            if (user == "1" || ingreso == null) { continue; }

            pass = prompt("Ahora ingrese su contraseña:\n\n1| Volver(contraseña: Salchichon)")
            if (pass == "1" || ingreso == null) { continue; }

            iniciarSesion(user, pass);
        } else if (user == "2") {
            user = prompt("Ingrese el nombre del nuevo usuario:\n1|Volver|")
            if (user == "1" || ingreso == null) { continue; }
            pass = prompt(`Ingrese la contraseña para el usuario ${user}:\n1|Volver|`)
            if (pass == "1" || ingreso == null) { continue; }
            crearCuenta(user, pass);

        } else if (user == "3" || user == null) {
            break;
        } else {
        }
    }
}