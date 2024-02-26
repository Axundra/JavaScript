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

        if(ingreso == "1"){//sale de la funcion
            break;
        }else if (recuperar != undefined){
            alert(`La contraseña del usuario ${recuperar.cuenta} es:\n\n${recuperar.contrasena}`)
            break;
        }else{
            alert('No se ha encontrado el usuario')
        }
    }
}

function iniciarSesion (user_iniciar, pass_iniciar){//por algun molesto motivo el forEach no funcionaba como debía y solo pasaba una vez por el array por más elementos que tuviera
    const cuentaCorrecta = cuentas.filter(element => {      //busca el objeto correspondiente
        return element.cuenta == user_iniciar && element.contrasena == pass_iniciar;
    })
    if (cuentaCorrecta[0] != null){       //chequea si se encontró el objeto
        sesion = true;
    }else{                  //si no se encontró nada:
        let opcion = prompt("Usuario y/o contraseña no coinciden con la base de datos\nDesea crear un usuario nuevo con los datos ingresados?\n\n1| Sí|   2| No, volver a intentar|   3| Olvidé la contraseña");
        if (opcion == "1"){
            crearCuenta(user_iniciar, pass_iniciar);
        }else if (opcion == "2"){
            return false;
        }else if (opcion == "3"){
            recuperarPass();
        }
    }
}
/////////////////////////////////////////////////////////////Funciones


while(user != "2" && user != null){       //el null es en caso de que el usuario presione ESC o el boton de 'cancelar', sin esto el while se sigue repitiendo en ambos casos
    if (sesion){//chequea si se inició sesión
        console.log(cuentas);
        ingreso = prompt(`Bienvenido ${user}\n\nPor ahora no hace anda más\n\n1|Cerrar sesión`);
        if (ingreso == "1"){
            sesion = false;
            continue;
        }

    }else{//si no se inició sesión:
        user = prompt("///Bienvenido a la red social más inutil de todas uwu///\n__________________________________________________________\nIngrese nombre de usuario para iniciar sesión o elija una de las opciones del menú: \n\n1| Crear usuario|   2| Salir\n(usuario: Jhon)")
        if (user == "1"){
            user = prompt("Ingrese el nombre del nuevo usuario:\n1|Volver|")
            if (user == "1"){//reinicia el bucle si ingresa 1
                continue;
            }//no usé else if porque o se reinicia el bucle o continua

            pass = prompt(`Ingrese la contraseña para el usuario ${user}\n1|Volver|`)
            if (pass == "1"){//reinicia el bucle si ingresa 1
                continue;
            }
            crearCuenta(user, pass);

        }else if (user == "2" || user == null){
            break;
        }else{
            pass = prompt("Ahora ingrese su contraseña\n(contraseña: Salchichon)")
            iniciarSesion(user, pass);
        }
    }
}




/* 
        case "2":
        let conteo = 0;
        let suma = 0;
        let numero = 0;
        let dato = "";

        while(dato != "x" && dato != "X"){
            dato = prompt('Ingrese números para calcular el promedio entre todos ellos.\nPara hacer el calculo ingrese "x"');
            if(dato != "x" && dato != "X"){         //se rompe el calculo al ingresar "X" porque entra en la suma de numeros
                numero = parseInt(dato);
                suma += numero;
                conteo ++;
                console.log("Ingresó el número " + numero);
                console.log("Promedio actual: " + (suma/conteo));
            }
            if(numero == null){
                break;
            }if (isNaN(numero)){     //al isNaN lo saqué de internet porque me frustraba que un string rompa todo
                alert("Ingresó un caracter inválido o un espacio vacío.\nVuelva a comenzar y por favor sólo utilice números")
                conteo = 0;
                suma = 0;
                console.clear();
            }
        }
        if(conteo == 1){
            alert("Sólo ha ingresado un número ("+numero+").\nIngrese más de uno para calcular sus promedios")
        }else{
            alert("ingresó " + conteo + " números.\n\nSu promedio es de: " + (suma/conteo));
            console.clear();
        }break;
    }
    
    if (ingreso != "1" && ingreso != "2" && ingreso != "3" && ingreso != null){//esto quedaba más simple si usaba if en lugar del switch porque acá ponía un else if
        alert ("Intente de nuevo ingresando únicamente los números correspondientes a cada menú");
    }
 */