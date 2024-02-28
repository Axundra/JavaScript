let variable = 0;
let cosas = parseInt(prompt("Ingresar numero")); // ingresar dato con prompt y convertirlo a integer
console.log(variable);
alert(variable);
if (variable == 0 && cosas + " hola" == "cosas hola") {
} else if (cosas != "patas" || variable < 6) {
} else {
}
for (let i = 0; i <= 5; i++) {
    variable += i;
    continue; //vuelve al inicio del ciclo sin ejecutar lo demás, por lo visto funciona para el culo dentro de un if
}
do {
    //se ejecuta por lo menos una vez y se ejecuta una vez más hasta que el while sea falso, funciona como while
} while (cosas != "salir");
while (variable != "salir") {
    break; //cierra el ciclo
}
function libro(a, b, c) { //funcion que crea propiedades.. creo
    this.a = a;
    this.b = b;
    this.c = c;
}
console.log("a" in libro); //imprimiría la propiedad de a

const array = [variable, 1, "sexo"]; //crea array
array[4] = cosas; //agrega un valor o un elemento nuevo correspondiente al numero
array.push(1, 2, 3, "patas"); //agrega elementos al array al final
array.unshift(-2, -1, 0); //agrega elementos al array al inicio
array.pop(); //borra el último elemento del array y retorna su valor
array.shift(); //borra el primer elemento del array y retorna su valor
array.splice(0, 1, 11); //borra elementos correspondientes al numero
array.join(","); //junta todos los valores del array en un string, lo que va dentro de los '' son separadores
const array3 = array.concat(array3); //concatena arrays dentro de otro agregando los elementos de uno al otro
array.indexOf("sexo"); //muestra la posicion del elemento
array.includes("pezones"); //true o false si existe ese elemento

for (const elementos of array) {                //recorre cada elemento del array
}
array.forEach((elemento) => {                   //igual que el anterior xd
    console.log(elemento);
});
const encuentra = array.find((elemento) => {    //encuenta y retorna el primer elemento que cumpla la condicion
    return elemento.valor < 100;
});
const filtra    = array.filter((elemento) => {  //filtra y retorna los elementos que cumplan la condicion
    return elemento.valor > 1000 && elemento.valor < 2000;
});
const hay       = array.some((elemento) => {    //devuelve booleano si se encuentra el elemento
    return elemento == "sexo";
});
const mapeo     = array.map((elemento) => {
    return {
        id: elemento.id,
        cantidad: elemento.cantidad *10,
    };
});
const total = array.reduce((acumulado, elemento) => {
    return elemento.cantidad + acumulado;
}, 0); //valor inicial del acumulado

Math.ceil(4.1);//parriba
Math.round(4.5);//del .5 parriba            <-redondeos
Math.floor(4.9);//pabajo
Math.min(1, 2, 3);
Math.max(1, 2, 3);
Math.random()*10;

fecha = new Date();//hoy
fecha2 = new Date(2024, 3, 15);//ese día
console.log(fecha.getFullYear());
console.log(fecha.getMonth()+1);//+1 por que arranca de 0
console.log(fecha.getDate());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toTimeString());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getTime());//creo que muestra la cantidad de milisegundos entre esa fecha y la actual

document.getElementById(ID);                        //devuelve el primero que encuentra
document.getElementsByClassName(clase);             //devuelve una lista de las clases        puede ser (clase[2])
document.querySelector(section.clase);              //devuelve el contenido de un <section> con la clase "clase", para ID se usa # en lugar de .
document.querySelectorAll("div#id")
console.log(clase.innerHTML);                       //imprime en lista los elementos de esa clase     puede ser (class.innerHTML[2])
clase.innerHTML[2] = "sexo";                        //se pueden pasar propiedades como <strong> innerText pasa puro texto
claseDeHTML.className = "box";                      //modifica la clase de un elemento en HTML

const parrafo = document.createElement("p");
parrafo.innerText = "soy un parrafo";
document.body.append(parrafo);

const otroID = document.getElementById("ID");
otroID.append(parrafo);

console.log(`texto ${variable} más texto $${variable}`);        //concateneacion de variables, tambien se puede en rutas como ../img/${array[2]}

parrafo.addEventListener("click",() => {})
parrafo.onclick = () => {}







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