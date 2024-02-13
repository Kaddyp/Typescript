//Inheritance is a way for object or classes to gain acess to the proprty of classes that are possessed by other objects

class Person {
    name: string;
    constructor(name:string){
        this.name = name;
    }
    dance(){
        console.log(this.name + "is dancing");
    }
}

var bran = new Person("Bran");
bran.dance();

class AwesomePerson extends Person{
    dance(){
        console.log("So Awesome!");
        super.dance();
    }
}
var roob = new AwesomePerson("Roob");
roob.dance();