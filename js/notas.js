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
