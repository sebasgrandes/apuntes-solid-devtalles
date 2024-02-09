import { Tesla, Audi, Toyota, Honda, Volvo, Vehicle } from "./03-liskov-b";

// aqui se infringe el principio open and close y el de liskov

// ! 1. se infringe el de liskov porque tengo que entrar acá (a esta funcion) para recien poder aceptar el Volvo... ESTO SE ARREGLA GRACIAS AL MÉTODO GETNUMBEROFSEATS QUE HEREDAN TODAS LAS CLASES (es decir, a la clase abstracta)
(() => {
    const printCarSeats = (cars: Vehicle[]) => {
        cars.forEach((car) => {
            console.log(car.constructor.name, car.getNumberOfSeats());
        });

        // ! 2. esto viola el principio de open and close... por los demasiados if dentro del for

        // for (const car of cars) {
        //     if (car instanceof Tesla) {
        //         console.log("Tesla", car.getNumberOfSeats());
        //         continue;
        //     }
        //     if (car instanceof Audi) {
        //         console.log("Audi", car.getNumberOfSeats());
        //         continue;
        //     }
        //     if (car instanceof Toyota) {
        //         console.log("Toyota", car.getNumberOfSeats());
        //         continue;
        //     }
        //     if (car instanceof Honda) {
        //         console.log("Honda", car.getNumberOfSeats());
        //         continue;
        //     }
        //     if (car instanceof Volvo) {
        //         console.log("Volvo", car.getNumberOfSeats());
        //         continue;
        //     }
        // }
    };

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(2),
    ];

    printCarSeats(cars);
})();
