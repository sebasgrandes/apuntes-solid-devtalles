// ! recuerda que las clases no deben verse obligadas a implementar metodos por la implementacion, interface o padre... SI ES QUE NO LO ESTÁS UTILIZANDO O NO LO NECESITAS. no te tienen que obligar a usarlo. porque tu codigo será vulnerable a los cambios que puedas en un futuro realizar.

interface Bird {
    eat(): void;
}

// ! a esto se le llama segregar!!! -> separar
interface FlyingBird {
    fly(): void;
}
interface RunningBird {
    run(): void;
}
interface SwimmingBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
}
class Humminbird implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
}

class Ostrich implements Bird, RunningBird {
    public eat() {}
    public run() {}
}

class Penguin implements Bird, SwimmingBird {
    public eat() {}
    public swim() {}
}
