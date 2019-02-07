import{ Person, SuperPerson } from './person';

const sky = new Person('Sky');
const superSky = new SuperPerson('Sky','running really fast');
sky.greet();
superSky.greet();

superSky.saySuperpower();