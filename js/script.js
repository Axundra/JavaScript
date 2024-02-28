let ingreso = "";
let sesion = false;
let pass = "";
let user = "";
const cuentas = [
    {cuenta: 'Jhon', contrasena: 'Salchichon'},
    {cuenta: 'Gustavo', contrasena: 'fideos'},
    {cuenta: 'Ariel', contrasena: 'uwu'},
    {cuenta: 'Milei', contrasena: 'VIVA LA LIBERTAD CARAJO >:v'},
    {cuenta: 'Gorda', contrasena: 'negra'},
    {cuenta: 'Gnomo', contrasena: 'wo!'},
];

/////////////////////////////////////////////////////////////Funciones

function crearCuenta (user_crear, pass_crear){//crea usuario nuevo
    const check = cuentas.find(element =>{//busca si el usuario ya existe
        return element.cuenta == user_crear;
    })
    if (check == null){//checkea si se encontró algo
        cuentas.push({cuenta: user_crear, contrasena: pass_crear})
        iniciarSesion(user_crear, pass_crear)//ejecuta la funcion para iniciar sesión automaticamente
    }else{
        alert('El usuario ya existe, por favor intente con otro nombre:')//para evitar problemas con el código
    }
}

function recuperarPass (){//Busca el nombre de usuario y devuelve la contraseña
    while(ingreso != "1"){
        cuentas.forEach(element => {
            console.log(element.cuenta);
        });
        ingreso = prompt ("Ingrese el nombre de usuario:\n1|Volver|\n\nSe muestra la lista en consola")
        const recuperar = cuentas.find(element => {
            return element.cuenta == ingreso;
        })
        console.clear();//limpia consola

        if(ingreso == "1" || ingreso == null){//sale de la funcion
            break;
        }else if (recuperar.cuenta != undefined){
            alert(`La contraseña del usuario ${recuperar.cuenta} es:\n\n${recuperar.contrasena}`)
            break;
        }else{
            alert('No se ha encontrado el usuario')
        }
    }
}

function iniciarSesion (user_iniciar, pass_iniciar){//por algun molesto motivo el forEach no funcionaba como debía y solo pasaba una vez por el array por más elementos que tuviera
    const cuentaCorrecta = cuentas.some(element => {      //busca el objeto correspondiente
        return element.cuenta == user_iniciar && element.contrasena == pass_iniciar;
    })
    if (cuentaCorrecta){       //chequea si se encontró el objeto
        sesion = true;
    }else{                  //si no se encontró nada:
        let opcion = prompt("Usuario y/o contraseña no coinciden con la base de datos\nDesea crear un usuario nuevo con los datos ingresados?\n\n1| Sí\n2| No, volver a intentar\n3| Olvidé la contraseña");
        if (opcion == "1"){
            crearCuenta(user_iniciar, pass_iniciar);
        }else if (opcion == "2" || ingreso == null){
            return;
        }else if (opcion == "3"){
            recuperarPass();
        }else{
            iniciarSesion(user_iniciar, pass_iniciar);
        }
    }
}
/////////////////////////////////////////////////////////////Funciones


while(user != "2" && user != null){       //el null es en caso de que el usuario presione ESC o el boton de 'cancelar', sin esto el while se sigue repitiendo en ambos casos
    if (sesion){//chequea si se inició sesión
        ingreso = prompt(`///Bienvenido ${user}///\n\nPor ahora no hace anda más, pero tiene más funciones más allá de iniciar sesion.\n\nLas cuentas nuevas se almacenan en un array por lo que se puede volver e ingresar de nuevo con la cuenta creada\n\n1|Cerrar sesión(volver)`);
        if (ingreso == "1" || ingreso == null){
            sesion = false;
            continue;
        }

    }else{//si no se inició sesión:
        user = prompt("///Bienvenido a la red social más inutil de todas uwu///\n__________________________________________________________\nElija una de las opciones del menú: \n\n1| Iniciar sesión\n2| Crear usuario\n3| Salir")
        if (user == "1"){
            user = prompt(`Ingrese el nombre de usuario:\n1| Volver\n\n(usuario: Jhon)`)
            if (user == "1" || ingreso == null){continue;}

            pass = prompt("Ahora ingrese su contraseña:\n\n1| Volver(contraseña: Salchichon)")
            if (pass == "1" || ingreso == null){continue;}

            iniciarSesion(user, pass);
        }else if (user == "2"){
            user = prompt("Ingrese el nombre del nuevo usuario:\n1|Volver|")
            if (user == "1" || ingreso == null){continue;}
            pass = prompt(`Ingrese la contraseña para el usuario ${user}:\n1|Volver|`)
            if (pass == "1" || ingreso == null){continue;}
            crearCuenta(user, pass);

        }else if (user == "3" || user == null){
            break;
        }else{
        }
    }
}