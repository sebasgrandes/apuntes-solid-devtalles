(() => {
    // Herencia - Problemática

    // ! cuando se usa la herencia en clases, mediante el "extends", casi siempre se infringe el principio de responsabilidad unica -> la cual es que cada clase debe tener una unica responsabilidad

    type Gender = "M" | "F";

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {}
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lasOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        "/usr/home",
        "/usr/open",
        "sebastiangrandesc@gmail.com",
        "admin",
        "Sebastian Grandes",
        "M",
        new Date("2000-11-18")
    );

    console.log(userSettings);
})();
