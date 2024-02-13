//Class is very powerful
var Stark = /** @class */ (function () {
    // constructor properties
    //which is function when the class run 
    function Stark() {
        //default properties in property defination
        this.name = "Kalyani";
        //default property
        this.saying = Stark.castle;
    }
    //Method
    Stark.prototype.hello = function (person) {
        console.log('Hello, ' + person);
    };
    // Static Properties
    Stark.castle = "Winterfall!";
    return Stark;
}());
var kaddy = new Stark();
kaddy.saying = "Winter is coming";
//console.log(Stark.castle);
kaddy.hello("Robert");
