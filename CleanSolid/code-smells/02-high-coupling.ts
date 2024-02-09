(() => {
    // No aplicando el principio de responsabilidad única
    type Gender = "M" | "F";

    // Alto Acoplamiento

    // ! tiene un alto acoplamiento porque una clase depende de otra

    // esta clase por ejemplo tiene un bajo acoplamiento porque no depende de nadie... por ello puedo agregarle una propiedad
    class Person {
        constructor(
            public firstName: string,
            public lastName: string,
            public gender: Gender,
            public birthdate: Date
        ) {}
    }

    // esta clase por ejemplo tiene un alto acoplamiento porque depende de otra (tiene relaciones extensas con otras clases)... esto causa un problema cuando hacemos la modificacion de arriba
    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            firstName: string,
            lastName: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(firstName, lastName, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastFolderOpen: string,
            email: string,
            role: string,
            firstName: string,
            lastName: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(
                email,
                role,
                new Date(),
                firstName,
                lastName,
                gender,
                birthdate
            );
        }
    }

    const userSettings = new UserSettings(
        "/urs/home",
        "/development",
        "fernando@google.com",
        "F",
        "Fernando",
        "Herrera",
        "M",
        new Date("1985-10-21")
    );

    console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
