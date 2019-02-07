import {addToDom} from './helpers';

export class Person{
    constructor(name){
        this.name = name;
    }

    speak(text){
        addToDom(`${this.name} Says ${text}`);
    }

    greet(){
        this.speak(`Hello, my name is ${this.name}`);
    }
}
export class SuperPerson extends Person{
    constructor(name, superpower){
        super(name);//have to pass in super with the same parameter it was expecting in the parent class
        this.superpower=superpower;
    }

    saySuperpower(){
        this.speak(`My superpower is ${this.superpower}`);
    }
}