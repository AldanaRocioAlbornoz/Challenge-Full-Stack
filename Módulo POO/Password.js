class Password {
    #longitud;
    #contraseña;
    #UPPERCASE = /[A-Z]/g;
    #LOWERCASE = /[a-z]/g;
    #NUMERIC = /[0-9]/g;

    //Constructor
    //Funciona tanto como defecto como si le pasamos la long
    constructor(constraseña, longitud = 8) {
        this.#contraseña = constraseña;
        this.#longitud = longitud;
    }

    //Getters
    get longitud() {
        return this.#longitud;
    }

    get contraseña() {
        return this.#contraseña;
    }

    //Setters
    set longitud(long) {
        this.#longitud = long;
    }

    set contraseña(contra) {
        this.#contraseña = contra;
    }

    esFuerte() {
        const str = this.#contraseña;

        if((str.match(this.#UPPERCASE) && str.match(this.#UPPERCASE).length >= 2)
            && (str.match(this.#LOWERCASE) && str.match(this.#LOWERCASE).length >= 1)
            && (str.match(this.#NUMERIC) && str.match(this.#NUMERIC).length >= 3)
        ) {
            return true;
        }
        return false;
    }

    generarPassword() {
        const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let newPass = "";
        let randomNumber;
        for (let i = 0; i <= this.#longitud; i++) {
            randomNumber = Math.floor(Math.random() * chars.length);
            newPass += chars.substring(randomNumber, randomNumber +1);
        }
        return newPass;
    }


}

const pass = new Password();

pass.longitud = 16;
pass.contraseña = pass.generarPassword();

console.log(pass.contraseña);
console.log(pass.esFuerte());