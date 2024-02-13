//var n : number = 1;
var n : any = 1;
n = 'Robb';

var isWinter : boolean = false;
//isWinter = 123;

var count : Number = 5;
var firstName : String = "Bobby";

var names : String[] = ['kalyani', 'john', 'Dan'];
var namesArr : any[] = ['kalyani', 'john', 'Dan', 5];

//enum
enum Starks {Jon,Bran,Eddard,Catlyn};

var cat : Starks = Starks.Catlyn;

function getName() : string{
    return 'Bobby';
}

function getOnlyName() : void{
    console.log('Winter is comming');
}