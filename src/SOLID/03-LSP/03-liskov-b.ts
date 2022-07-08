
export abstract class Vehicle{

    // getNumberOfSeats():number {
    //   throw Error('Method no implemented');
    // }
    abstract getNumberSeats(): number;
}


export class Tesla extends Vehicle {
    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberSeats() {
        return this.numberOfSeats;
    }    
}

export class Audi extends Vehicle{
    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberSeats() {
        return this.numberOfSeats;
    }  
}

export class Toyota  extends Vehicle{
    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberSeats() {
        return this.numberOfSeats;
    }  
}

export class Honda extends Vehicle {
    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberSeats() {
        return this.numberOfSeats;
    }  
}

export class Volvo extends Vehicle {
    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberSeats() {
        return this.numberOfSeats;
    }  
}

