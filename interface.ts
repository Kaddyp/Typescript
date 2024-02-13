interface Stark {
    name: string;
    age?: number; //Optional name of variable
}

function printName(stark: Stark){
    console.log(stark.name);
}

printName({name:'KAddy'});
printName({name:'Joe'});