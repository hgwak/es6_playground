export function add(x, y){
    return x + y;
}
export function subtract(x,y){
    return x - y;
}

export const myArray = ['my', 'array']; //whenever you are doing a named export you have to have somekind of identifier
//i.e. function, const, let 

export default function(){
    console.log('I am the default calculate export')
}