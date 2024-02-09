(() => {
    // Aplicando el principio de responsabilidad única
    // Prioriza la composición frente a la herencia

    // todas estas clases tienen bajo acoplamiento... al añadir por ejemplo una propiedad en la 1era clase, no hay tanto problema... solo debemos añadir lo necesario en nuestra primera clase, pero en las demas no por el bajo acoplamiento

    type Gender = "M" | "F";

    interface PersonProps {
        firstName: string;
        lastName: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public firstName: string;
        public lastName: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ firstName, lastName, gender, birthdate }: PersonProps) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
    }

    // no hacemos ningun cambio aqui producto de la modificacion de mi 1era clase
    class User {
        public email: string;
        public role: string;
        private lastAccess: Date;

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
        lastFolderOpen: string;
        workingDirectory: string;
    }

    // no hacemos ningun cambio aqui producto de la modificacion de mi 1era clase
    class Settings {
        public workingDirectory: string;
        public lastFolderOpen: string;

        constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastFolderOpen = lastFolderOpen;
        }
    }

    // Nuevo User Settings
    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastFolderOpen: string;
        firstName: string;
        lastName: string;
        role: string;
        workingDirectory: string;
    }

    // aqui si hacemos algunos cambios...
    class UserSettings {
        // constructor(
        //     public person: Person,
        //     public user  : User,
        //     public settings: Settings,
        // ){}
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            firstName,
            lastName,
            gender,
            birthdate,
            email,
            role,
            workingDirectory,
            lastFolderOpen,
        }: UserSettingsProps) {
            this.person = new Person({
                lastName,
                firstName,
                gender,
                birthdate,
            });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastFolderOpen });
        }
    }

    const userSettings = new UserSettings({
        birthdate: new Date("1985-10-21"),
        email: "fernando@google.com",
        gender: "M",
        lastFolderOpen: "/home",
        firstName: "Fernando",
        lastName: "Herrera",
        role: "Admin",
        workingDirectory: "/usr/home",
    });

    console.log({
        userSettings,
        credentials: userSettings.user.checkCredentials(),
    });
})();
