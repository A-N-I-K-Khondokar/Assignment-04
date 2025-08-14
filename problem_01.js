function totalFine(fare) {

    if (typeof (fare) === 'number' && fare > 0) {
        return fare + (fare * 0.2) + 30;
    }
    else {
        return "invalid";
    }

}
const x = totalFine("Gorib tai ticket katinai");
console.log(x);