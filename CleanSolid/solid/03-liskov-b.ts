// ! la clase abstracta se usa para ser heredadas de otros (es decir, para las demás extiendan de esta). obligandolos a tener sus métodos, etc.

export abstract class Vehicle {
    // getNumberOfSeats(): number {
    //     throw Error("Method not implemented");
    // }

    // método abstracto... un método que se obliga a tener
    abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {
    constructor(private numberOfSeats: number) {
        // a pesar de que mis clases abstractas se usan para herencia... no para crear instancias... de todas maneras tienen un constructor que tengo que llamar
        super();
    }

    // esto lo borro, en los demás también
    // getNumberOfTeslaSeats() {
    //     return this.numberOfSeats;
    // }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Volvo extends Vehicle {
    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}
