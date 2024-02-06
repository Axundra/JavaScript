if(0 == 1){ //codigo basura para tomar nota de las cosas
            //lo dejo dentro de un if para que no pierda los colores y lo entienda mejor
    let variable = 0;
    let cosas = parseInt(prompt("Ingresar numero")) // ingresar dato con prompt y convertirlo a integer
    console.log(variable);
    alert(variable);
    if((variable == 0) && (cosas + " hola" == "cosas hola")){
    }else if(cosas != "patas" || variable < 6){
    }else{}
    for(let i=0; i<=5; i++){
        variable += i;
        continue; //vuelve al inicio del ciclo sin ejecutar lo demás, por lo visto funciona para el culo dentro de un if
    }
    do{
        //se ejecuta por lo menos una vez y se ejecuta una vez más hasta que el while sea falso, funciona como while
    }while(cosas != "salir")
    while(variable != "salir"){
        break; //cierra el ciclo
    }
}

let ingreso = "";
let sesion = false;
function iniciarSesion (usuario, contraseña){
    if(usuario == "Jhon" || contraseña == "Salchichon"){
        alert("Bienvenido " + usuario)
        sesion = true;
    }else{
        alert("Usuario y/o contraseña incorrectos")
    }
}
while(ingreso != "3"){
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
            dato = prompt('Ingrese números para calcular su promedio, para hacer el calculo ingrese "x", -no ingrese texto-');
            if(dato != "x" && dato != "X"){         //se rompe el calculo al ingresar "X" porque entra en la suma de numeros
                console.log("Ingresó " + numero);
                numero = parseInt(dato);
                suma += numero;
                conteo ++;
            }

            if (isNaN(numero)){     //lo saqué de internet porque me frustraba que un string rompa todo
                alert("Ingresó un caracter inválido o un espacio vacío, vuelva a comenzar y por favor sólo utilice números")
                conteo = 0;
                suma = 0;
            }
        }
        alert("ingresó " + conteo + " números, su promedio es de: " + (suma/conteo));
    } 
    
    else if (ingreso != "3"){
        alert ("Intente de nuevo ingresando únicamente los números correspondientes a cada menú");
    }

}