/*
    3. Construir una función que sume los elementos de una
    lista de enteros recursivamente
*/

const numbers = [7,2,8,3,5,6];

const recursiveSum = (list, i) => {
    if (i <= 0)
        return 0;

    return (recursiveSum(list, i - 1) + list[i - 1]);
};

const sum = () => {
    const suma = recursiveSum(numbers, numbers.length);
    document.getElementById("logs-sum")
        .append("La suma de los numeros es: " + suma, document.createElement("br"));
};