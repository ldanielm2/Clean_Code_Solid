(() => {
    
    //Aplicando el principio de responsabilidad unica
    //Priorizar a composicion frente a la herencia!

    type Gender = 'M'|'F';

    interface PersonProps{
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person{
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({name, gender,birthdate} : PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }

    }

    interface userProps{
        email: string;
        role: string;
    }

    class User {
        public email : string;
        public lastAccess: Date;
        public role: string;

        constructor({email,role} : userProps){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }


    interface SettingsProps{
        lasOpenFolder: string;
        workingDirectory: string;
    }

    class Settings{
        public lasOpenFolder: string;
        public workingDirectory: string;
        constructor({lasOpenFolder,workingDirectory,}: SettingsProps
        ){
            this.lasOpenFolder = lasOpenFolder;
            this.workingDirectory= workingDirectory;
        }
    }

    interface UserSettingsProps{
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        lasOpenFolder: string;
        workingDirectory: string;
        role: string;
    }

    class UserSettings{
        
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor(
            {
                name,gender,birthdate,
                email,role,
                lasOpenFolder,workingDirectory
            } : UserSettingsProps
        ){
            this.person = new Person({name,gender,birthdate});
            this.user = new User({email,role});
            this.settings = new Settings({lasOpenFolder,workingDirectory});
        }

    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lasOpenFolder: '/home',
        email: 'ldanielm2@hotmail.com',
        role: 'Admin',
        name: 'Daniel',
        gender: 'M',
        birthdate: new Date('1989-07-04')
    });
    console.log({userSettings});
})();