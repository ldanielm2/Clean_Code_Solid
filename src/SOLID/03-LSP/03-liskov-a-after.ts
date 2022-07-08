import { Tesla, Audi, Toyota, Honda, Volvo, Vehicle } from './03-liskov-b';


(() => {
    
    //principio de sustitucion: deberias tener clases o metodos que puedan recibir como argumento subclases del mismo en vez de hacer cambios
    const printCarSeats = ( cars: Vehicle[] ) => {
        
        cars.forEach( car => {console.log(car.constructor.name, car.getNumberSeats() )})

        // for (const car of cars) {
         
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberSeats() )
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberSeats() )
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberSeats() )
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberSeats() )
        //         continue;
        //     }    

        //     if( car instanceof Volvo ) {
        //         console.log( 'Volvo', car.getNumberSeats() )
        //         continue;
        //     }  
        // }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(7),
    ];


    printCarSeats( cars );

})();