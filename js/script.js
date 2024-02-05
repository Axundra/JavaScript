if(0 == 1){ //codigo basura para tomar nota de las cosas
            //lo dejo dentro de un if para que no pierda los colores y lo entienda mejor
    let variable = 0;
    let dato = parseInt(prompt("Ingresar numero")) // ingresar dato con prompt y convertirlo a integer
    console.log(variable);
    alert(variable);
    if((variable == 0) && (dato + " hola" == "dato hola")){
    }else if(dato != "patas" || variable < 6){
    }else{}
    for(let i=0; i<=5; i++){
        variable += i;
        continue; //vuelve al inicio del ciclo sin ejecutar lo demás
    }
    do{
        //se ejecuta por lo menos una vez y se ejecuta una vez más hasta que el while sea falso, funciona como while
    }while(dato != "salir")
    while(variable != "salir"){
        break; //cierra el ciclo
    }
}