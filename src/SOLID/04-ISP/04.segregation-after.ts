interface Bird{
    eat():void;
}

interface FlyingBIrd{
    fly():void;
}
interface RunningBird{
    run():void;
}
interface SwimmingBird{
    swim():void;
}

class Tucan implements Bird,FlyingBIrd {
    public fly(){}
    public eat(){}
}

class Humminbird implements Bird,FlyingBIrd {
    public fly(){}
    public eat(){}
}

class Ostrich implements Bird,RunningBird {
    public eat(){}
    public run(){}
}

class Penguin implements Bird,SwimmingBird {
    public eat(){}
    public swim(){}
}