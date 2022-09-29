/* 2. Escribe una aplicación que solicite al usuario que ingrese una contraseña cualquiera.
    Después se le pedirá que ingrese nuevamente la contraseña, con 3 intentos. Cuando
    acierte ya no pedirá más la contraseña y mostrará un mensaje diciendo “Felicitaciones,
    recordás tu contraseña”. Si falla luego de 3 intentos se mostrará el mensaje “Tenes que
    ejercitar la memoria”. Los mensajes quedarán en pantalla a la espera que el usuario
    presione una tecla, luego de esto se cerrará el programa.
*/

function askAgain(logs) {
    const original = document.getElementById("pass").value;
    let p;

        for(let i = 0; i < 3; i++) {
            p = prompt("Ingrese nuevamente su contraseña:");
            logs.append(p, document.createElement("br"));
            if(p === original) {
                return true;
            }
        }

    return false;
}

const displayResultPassword = () => {
    const logs = document.getElementById("logs");
    askAgain(logs) ? logs.append("Felicitaciones, recordás tu contraseña") : logs.append("Tenes que ejercitar la memoria");
};