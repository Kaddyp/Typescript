//Class is very powerful, and you can use them to defining the behiviour of object in depth
class Stark {
    //default properties in property defination
    name: string = "Kalyani";
    // Static Properties
    static castle: string = "Winterfall!"
    saying: string;
    
    // constructor properties
    //which is function when the class run 
    constructor(){
        //default property
        this.saying = Stark.castle;
    }

    //Method
    hello(person:string){
        console.log('Hello, '+ person);
    }
    
}

var kaddy = new Stark();
kaddy.saying = "Winter is coming";
//console.log(Stark.castle);
kaddy.hello("Robert");