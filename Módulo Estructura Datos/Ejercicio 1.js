/*
    1)Implementar una función que recibe una lista de enteros L y un número entero n de forma
    que modifique la lista mediante el borrado de todos los elementos de la lista que tengan este
    valor
*/

let originalList = [1,2,3,4,5,3,6,3,7];

const deleteNumber = () => {
    const value = parseInt(document.getElementById("num3").value);
    originalList = originalList.filter(item => item !== value);

    return originalList;
};

const displayLists = () => {
    const newList = deleteNumber();
    document.getElementById("logs-list")
        .append("Nueva lista " + newList, document.createElement("br"));
};