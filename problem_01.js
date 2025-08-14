function totalFine(fare) {

    if (typeof (fare) === 'number' && fare > 0) {
        return fare + (fare * 0.2) + 30;
    }
    else {
        return "Invalid";
    }
}
const x = totalFine("-552");
console.log(x);