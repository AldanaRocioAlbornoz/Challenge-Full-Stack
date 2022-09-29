/*
    Por teclado se ingresa el valor hora de un empleado.
    Posteriormente se ingresa el nombre del empleado,
    la antigüedad y la cantidad de horas trabajadas en el mes.
    Se pide calcular el importe a cobrar teniendo en cuenta
    que al total que resulta de multiplicar el valor hora por
    la cantidad de horas trabajadas. Además, si el empleado
    tiene más de 10 años de antigüedad hay que sumarle la
    cantidad de años trabajados multiplicados por $30.
    Imprimir en pantalla el nombre, la antigüedad y el total
    a cobrar.
*/

const calculateWage = () => {
    const hourlyRate = document.getElementById("hourlyRate").value;
    const years = document.getElementById("years").value;
    const hours = document.getElementById("hours").value;
    
    let wage = hourlyRate * hours;

    if(years >= 10)
        wage += years * 30;

    return [wage, years];
};

const displayWage = () => {
    const name = document.getElementById("name").value;
    const [wage, years] = calculateWage();
    const newPara = document.createElement("p");
    newPara.innerHTML = "El empleado " + name + " con " + years + " de antigüedad debe cobrar $" + wage;
    document.getElementById("ejercicio3").append(newPara);
};