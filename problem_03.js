function bestTeam(player1, player2) {

    if (typeof (player1) === "object" && typeof (player2) === "object") {
        const x = player1.foul + player1.cardY + player1.cardR;
        const y = player2.foul + player2.cardY + player2.cardR;
        if (x < y) {
            return player1.name;
        } else if (x > y) {
            return player2.name;
        } else if (x === y) {
            return "Tie"
        }
        else {
            return "Invalid"
        }
    }
    else {
        return "Invalid"
    }

}
const x = bestTeam(
{ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France");
console.log(x);

