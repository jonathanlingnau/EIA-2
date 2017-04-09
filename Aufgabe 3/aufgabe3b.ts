//Aufgabe: Aufgabe 2
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 06.04.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst und in Zusammenarbeit mit Leonie Storz geschrieben habe.
// Er wurde nicht kopiert und auch nicht diktiert.

document.addEventListener('DOMContentLoaded', function () {  
    let deck : string[] = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass",
                        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass",
                        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass",
                        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass"];
    
    
    let handCardsCounter : number = 0;
    
    document.getElementById("deck").addEventListener("click", function () : void { 
        if (handCardsCounter < 5) {
            let index : number = Math.floor(Math.random() * (deck.length - 1));
            let newCardName : string = deck.splice(index, 1)[0];
            let newCardDiv = document.createElement("div");
            newCardDiv.innerText += newCardName;
            newCardDiv.addEventListener("click", function () : void {
                document.getElementById("discard").innerText = newCardName;
                document.getElementById("handCards").removeChild(newCardDiv);
                --handCardsCounter;    
            });
            
            document.getElementById("handCards").appendChild(newCardDiv);
            
            ++handCardsCounter;
        }
    });
});
