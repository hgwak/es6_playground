// console.log('App working: open app/index.js to start exploring ES6');

// const h1 = document.createElement('h1');

// h1.innerText = 'Look we Really do Know Core JS now'

// document.getElementById('root').appendChild(h1);

import addToDom from './add_to_dom';
import calcDefault, {add, myArray} from './calculate';//looks like destructuring but acts different
        //must look like destructuring to properly call the named export
        //from comes from the calculate js . indicates same folder
        //you can add multiple named exports to the same import line if they come from the same file
        //since calcDefault of that file is the default you don't have to add it in the curly brace and 
        //and you can name it whatever you want
        calcDefault();
addToDom('h1',`2+8 = ${add(2,8)}`);//template literals es6
//if we have a file that has export without a default those are NAMED exports
//named exports are imported by using {} call by their original definition name
//export default does not HAVE to have a name, it's n ame is irrelevant
//when we export default, no curly brackets
//there is a disctinction between with curly brackets and no curly brackets

