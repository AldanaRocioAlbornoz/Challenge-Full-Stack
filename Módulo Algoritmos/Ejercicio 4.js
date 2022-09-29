/*
    4. Generar un número aleatorio comprendido entre 0 y 1000. Pedir, a continuación, al
    usuario adivinar el número escogido por el ordenador. Para ello, debe introducir un
    número comprendido entre 0 y 1000. Se compara el número introducido con el
    calculado por el ordenador y se muestra en la consola "es mayor" o "es menor" en
    función del caso. Se repite la operación hasta que el usuario encuentra el número.
*/

const getRandNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const randNum = getRandNum(0, 1000);
//console.log(randNum);

const guessNumber = () => {
    let guess = document.getElementById("guess").value;
    
    if(guess < randNum) 
        return "Te quedaste corto. Tirá más";
    else if (guess > randNum)
        return "Te pasaste. Tirá menos";
    
    return "Adivinaste el numero";
};


const displayGuess = () => {
    const p = document.getElementById("display-guess");
    p.innerHTML = guessNumber();
}