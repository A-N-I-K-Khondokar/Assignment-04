//problem-01
function totalFine(fare) {

    if (typeof (fare) === 'number' && fare > 0) {
        return fare + (fare * 0.2) + 30;
    }
    else {
        return "Invalid";
    }
}

//problem-02
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

//problem-03
function bestTeam(player1, player2) {

    if (typeof (player1) === "object" && typeof (player2) === "object" && !(Array.isArray(player1)) && !(Array.isArray(player2))) {
        const x = player1.foul + player1.cardY + player1.cardR;
        const y = player2.foul + player2.cardY + player2.cardR;
        if (x < y) {
            return player1.name;
        } else if (x > y) {
            return player2.name;
        } else if (x === y) {
            return "Tie";
        }
    }
    else {
        return "Invalid"
    }
}
//problem-04
function isSame(arr1, arr2) {

    if (Array.isArray(arr1) && Array.isArray(arr2)) {

        if (arr1.length !== arr2.length) return false;

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }
    else {
        return "Invalid"
    }
}
//problem-05
function resultReport(marks) {
    if (Array.isArray(marks)) {
        let obj = {
            finalScore: 0,
            pass: 0,
            fail: 0,
        }
        let passCount = 0;
        let failCount = 0;
        let sum = 0;

        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
            if (marks[i] >= 40) {
                passCount++;
            } else {
                failCount++;
            }
        }
        if (marks.length === 0) {
            obj.finalScore = 0;
        } else {
            obj.finalScore = Math.round(sum / marks.length);
        }
        obj.pass = passCount;
        obj.fail = failCount;
        return obj;
    } else {
        return "Invalid";
    }
}
