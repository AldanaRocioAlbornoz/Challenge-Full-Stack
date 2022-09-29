/*
    5. Pedir al usuario que ingrese un número repetidamente hasta que ingrese un -1 y en ese
    caso se terminará el programa.
    Al terminar, mostrará lo siguiente:
    a. – mayor número introducido
    b. – menor número introducido
    c. – suma de todos los números
    d. – suma de los números
*/

const arrayNums = [];

const addToArray = () => {
    let num = parseInt(prompt("Ingrese un número: "));
    while(num >= 0) {
        arrayNums.push(num);
        num = prompt("Ingrese un número: ");
    }

    const logs = document.getElementById("logs2");
    logs.append("a. El mayor número ingresado es: " + Math.max(...arrayNums), document.createElement("br"));
    logs.append("b. El menor número ingresado es: " + Math.min(...arrayNums), document.createElement("br"));
    
    let sum = 0;
    for(const value of arrayNums) {
        sum += parseInt(value);
    }

    logs.append("c. La suma de todos los numeros es: " + sum);
};