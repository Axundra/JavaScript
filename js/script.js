let ingreso = "";
let sesion = false;
alert("La mayotía del programa se muestra en pantalla pero hay algunas cosas que se muestran en consola.")
while(ingreso != "3" && ingreso != null){       //el null es en caso de que el usuario presione ESC o el boton de 'cancelar', sin esto el while se sigue repitiendo en ambos casos
    
    function iniciarSesion (usuario, contraseña){       //no sabía qué funcion hacerle a mi código así que hice una redundante
    if(usuario == "Jhon" || contraseña == "Salchichon"){
        alert("Bienvenido " + usuario)
        sesion = true;
    }else{
        alert("Usuario y/o contraseña incorrectos")
    }
}
if (sesion){
        ingreso = prompt("Ingrese el programa a ejecutar escribiendo el número correspondiente:   1| Cerrar sesión|   2| Calcular promedio|   3| Salir|");
        if (ingreso == "1"){
            sesion = false;
            continue;
        }
    }else{
        ingreso = prompt("Ingrese el programa a ejecutar escribiendo el número correspondiente:   1| Iniciar sesion|   2| Calcular promedio|   3| Salir|");
    }

    if (ingreso == "1"){            //intenté hacerlo con un switch(){ } pero por alguna razon se ejecutaban todos los case();
        let user = prompt("Usuario:                                1| Volver al menú|   2| Salir|                (usuario:Jhon)")
        if (user == "1"){        //haría una función con esto pero no me deja usar el continue; dentro de una funcion
            continue;
        }if(user == "2"){
            break;
        }

        let pass    = prompt("Contraseña:                          1| Volver al menú|   2| Salir|                (contraseña:Salchichon)")
        if (pass == "1"){
            continue;
        }if(pass == "2"){
            break;
        }
        iniciarSesion(user, pass)
    }
    
    else if (ingreso == "2"){
        let conteo = 0;
        let suma = 0;
        let numero = 0;
        let dato = "";

        while(dato != "x" && dato != "X"){
            dato = prompt('Ingrese números para calcular el promedio entre todos ellos, para hacer el calculo ingrese "x"');
            if(dato != "x" && dato != "X"){         //se rompe el calculo al ingresar "X" porque entra en la suma de numeros
                console.log("Ingresó el número " + numero);
                numero = parseInt(dato);
                suma += numero;
                conteo ++;
                console.log("Promedio actual: " + (suma/conteo));
            }

            if (isNaN(numero)){     //lo saqué de internet porque me frustraba que un string rompa todo
                alert("Ingresó un caracter inválido o un espacio vacío, vuelva a comenzar y por favor sólo utilice números")
                conteo = 0;
                suma = 0;
                console.clear();
            }
        }
        alert("ingresó " + conteo + " números, su promedio es de: " + (suma/conteo));
        console.clear();
    } 
    
    else if (ingreso != "3" && ingreso != null){
        console.log(ingreso);
        alert ("Intente de nuevo ingresando únicamente los números correspondientes a cada menú");
    }

}