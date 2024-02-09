(() => {
    // ! Objetos como propiedades

    // No aplicando el principio de responsabilidad única (sigue sin aplicar este principio)

    // lo que hicimos aqui fue una refactorizacion pero de una manera un poco mas facil de leer... lo cual no quiere decir que sea sencillo... parece que esta clase solo sirvio para darnos a entender como funcionan los objetos como propiedades en typescript.

    type Gender = "M" | "F";

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public role: string;
        constructor({ email, role, name, gender, birthdate }: UserProps) {
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserSettingsProps) {
            super({ email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: "/usr/home",
        lastOpenFolder: "/usr/open",
        email: "sebastiangrandesc@gmail.com",
        role: "admin",
        name: "Sebastian Grandes",
        gender: "M",
        birthdate: new Date("2000-11-18"),
    });

    console.log(userSettings);
})();
