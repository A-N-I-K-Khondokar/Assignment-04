function onlyCharacter(str) {
    let str2 = "";
    if (typeof (str) === 'string') {
        str2 = str.split(" ").join('').toUpperCase();
        return str2;
    }
    else {
        return "Invalid";
    }
}
const x = onlyCharacter("Serv.      er : : Do        wn");
console.log(x);