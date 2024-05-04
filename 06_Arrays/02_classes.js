// Indtroduction to Classes in javascript

/*
Notest
~ Reference Type: data types created by programmer not defined by language itself.
~ arrays are reference type. 



*/ 

class Player{
    constructor(name, type){
        this.name = name,
        this.type = type    
    }

    introduce(){
        console.log(`Hi my name is ${this.name}, and I'm ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type)

    }

    play(){
        console.log(`Weee, i'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('vivek', 'healer');
const wizard2  = new Wizard('alia', 'Dark magic')

