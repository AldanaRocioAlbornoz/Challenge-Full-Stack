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

    }


}

const pass = new Password("123asdAA");
console.log(pass.esFuerte());