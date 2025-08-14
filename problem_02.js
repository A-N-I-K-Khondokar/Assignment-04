function onlyCharacter(str) {
    let str2="";
    if (typeof (str) === 'string') {
        str2=str.split(" ").join('').toUpperCase();
        return str2;
    }
    else {
        return "invalid";
    }
}
const x=onlyCharacter(true);
console.log(x);