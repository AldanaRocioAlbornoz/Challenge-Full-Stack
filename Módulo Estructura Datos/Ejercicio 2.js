/*
    2. Escribir una función Reemplazar que tenga como argumentos una pila con tipo de
    elemento int y dos valores int: nuevo y viejo de forma que si el segundo valor
    aparece en algún lugar de la pila,sea reemplazado por el segundo.
*/

function Stack() {
    this.items = [];

    this.add = item => {
        return this.items.push(item);
    };

    this.remove = () => {
        if(this.items.length > 0) 
            return this.items.pop();
    };

    this.peek= () => {
        return this.items[this.items.length - 1];
    };

    this.isEmpty = () => {
        return this.items.length === 0;
    };

    this.size = () => {
        return this.items.length;
    };

    this.clear = () => {
        this.items = [];
    };
}

const stack = new Stack();
stack.add(1);
stack.add(5);
stack.add(3);
stack.add(2);
stack.add(9);
stack.add(2);

const reemplazar = (pila, nuevo, viejo) => {
    const aux = new Stack();

    while(!pila.isEmpty()) {
        if(pila.peek() === viejo) {
            pila.remove();
            aux.add(nuevo);
        } else
            aux.add(pila.remove());
    }

    while(!aux.isEmpty()) {
        pila.add(aux.remove());
    }
};

const startReplace = () => {
    const viejo = parseInt(prompt("Ingrese el numero viejo:"));
    const nuevo = parseInt(prompt("Ingrese el numero nuevo:"));
    reemplazar(stack, nuevo, viejo);
    document.getElementById("logs-stack")
        .append("Nueva pila " + stack.items, document.createElement("br"));
};
