/* 1. Pide un número por teclado e indica si es un número primo o no.
    Un número primo es aquel que solo puede dividirse entre 1 y sí mismo.
    Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo,
    17 si es primo.
*/

/* La función primero valida que el valor ingresado sea un num.
   Luego calcula la raiz cuadrada del num para optimización de
   tiempo. Sigue dividiendo el numero hasta llegar a la 
   raiz cuadrada. Si en algun momento el resto es 0, corta
   y sabe que el numero no es primo. Si no llega al final y
   sabe que es primo.
*/
const isPrime = () => {
    const num = parseInt(document.getElementById("num1").value);
    if(!isNaN(num)) {
        const squareRoot = Math.sqrt(num);
        for(let i = 2; i <= squareRoot; i++) {
            if (num % i === 0) 
                return false;
        }
        return true;
    } else {
        alert("No has ingresado un número válido");
    }
};

const displayResultPrime = () => {
    isPrime() ? alert("El número es primo.") : alert("El número no es primo.");
};