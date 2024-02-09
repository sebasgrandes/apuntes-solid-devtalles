(() => {
    // ! Principio de responsabilidad única

    // debemos priorizar la composicion frente a la herencia

    // todo esto es mucho mas facil de leer

    type Gender = "M" | "F";

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    // esta clase si cumple con el pru
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
    }

    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;
        constructor({ email, role }: UserProps) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    // asi priorizamos la composicion en vez de la herencia
    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;
        constructor({
            name,
            email,
            lastOpenFolder,
            workingDirectory,
            role,
            gender,
            birthdate,
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }
    }

    // lo puedo utilizar exactamente igual
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
