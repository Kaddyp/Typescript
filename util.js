//<referance path="timesTwo.ts" />
var use = new Utility.Useful();
console.log(use.timesTwo(9));
//console.log(timesTwo(9));
//Module is very powerful ==> share code between file 
var Utility;
(function (Utility) {
    var Useful = /** @class */ (function () {
        function Useful() {
        }
        Useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return Useful;
    }());
    Utility.Useful = Useful;
})(Utility || (Utility = {}));
// function timesTwo(n:number){
//     n * 2;
// }
