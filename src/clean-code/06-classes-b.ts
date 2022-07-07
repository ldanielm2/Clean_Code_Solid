(() => {
    
    //No Aplicando el principio de responsabilidad unica
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

        // constructor(name: string, gender: Gender,birthdate: Date ){
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthdate = birthdate;
        // }

        constructor({name, gender,birthdate} : PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }

    }

    //const newPerson = new Person('Daniel','M', new Date('1989-07-04'));
    //console.log({newPerson});

    interface userProps{
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;
    }

    class User extends Person{
        public email : string;
        public role: string;
        public lastAccess: Date;

        constructor({birthdate,gender,name,email,role,} : userProps){
            super({name,gender,birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
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

    class UserSettings extends User{
        public lasOpenFolder: string;
        public workingDirectory: string;
        constructor({birthdate,email,gender,name,lasOpenFolder,workingDirectory,role,}: UserSettingsProps
        ){
            super({email,role,name,gender,birthdate});
            this.lasOpenFolder = lasOpenFolder;
            this.workingDirectory= workingDirectory;
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