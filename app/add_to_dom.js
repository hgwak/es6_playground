export default function (tagName, text){
    const newTag = document.createElement(tagName);

    newTag.innerText = text;

    document.getElementById('root').appendChild(newTag);
}

//export default addToDom; since the default can be named whatever you want in the file you are importing to
//you can just set the default to a fat arrow or anonymouse function