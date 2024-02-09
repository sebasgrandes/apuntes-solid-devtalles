(() => {

    // clases
    
    type Gender = "M" | "F";

    // ! forma corta de crear las funciones
    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {}
    }

    // forma larga de crear las clases
    // class Person {
    //     public name: string;
    //     public gender: Gender;
    //     public birthdate: Date;
    //     constructor(name: string, gender: Gender, birthdate: Date) {
    //         this.name = name;
    //         this.gender = gender;
    //         this.birthdate = birthdate;
    //     }
    // }

    const sebastian = new Person(
        "Sebastian Grandes",
        "M",
        new Date("2000-11-18")
    );
    console.log({sebastian});
})();
