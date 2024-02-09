interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
    swim(): void;
}

class Tucan implements Bird {
    public fly() {}
    public eat() {}
    public run() {}
    public swim() {}
}
class Humminbird implements Bird {
    public fly() {}
    public eat() {}
    public run() {}
    public swim() {}
}

class Ostrich implements Bird {
    // ! aqui con fly se violeta el principio de segregacion porque estoy obligando a las demas clases a implementar metodos que no utilizan...
    // ostrich no vuela!
    public fly() {
        throw new Error("esta ave no vuela");
    }
    public eat() {}
    public run() {}
    public swim() {}
}

class Penguin implements Bird {
    public fly() {
        throw new Error("esta ave no vuela");
    }
    public eat() {}
    public run() {}
    public swim() {}
}
