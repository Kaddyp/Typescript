//var n : number = 1;
var n = 1;
n = 'Robb';
var isWinter = false;
//isWinter = 123;
var count = 5;
var firstName = "Bobby";
var names = ['kalyani', 'john', 'Dan'];
var namesArr = ['kalyani', 'john', 'Dan', 5];
//enum
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Catlyn;
function getName() {
    return 'Bobby';
}
function getOnlyName() {
    console.log('Winter is comming');
}
