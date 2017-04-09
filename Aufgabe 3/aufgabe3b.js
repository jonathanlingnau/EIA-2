//Aufgabe: Aufgabe 2
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 06.04.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
// Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
    var deck = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass"];
    var handCardsCounter = 0;
    document.getElementById("deck").addEventListener("click", function () {
        if (handCardsCounter < 5) {
            var index = Math.floor(Math.random() * (deck.length - 1));
            var newCardName_1 = deck.splice(index, 1)[0];
            var newCardDiv_1 = document.createElement("div");
            newCardDiv_1.innerText += newCardName_1;
            newCardDiv_1.addEventListener("click", function () {
                document.getElementById("discard").innerText = newCardName_1;
                document.getElementById("handCards").removeChild(newCardDiv_1);
                --handCardsCounter;
            });
            document.getElementById("handCards").appendChild(newCardDiv_1);
            ++handCardsCounter;
        }
    });
});
//# sourceMappingURL=aufgabe3b.js.map