//Aufgabe: Aufgabe 2
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 06.04.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst und in Zusammenarbeit mit Leonie Storz geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
    let i = 0;
    let n = 64;
    let x = 1;
    let c;
    let d;
    let zeile = 0;
    for (let i = 0; i < n; i++) {
        if (i % 8 == 0) {
            zeile++;
        }
        if (zeile % 2 == 0) {
            if (i % 2 == 0) {
                c = "#ffffff";
                d = "#000000";
            }
            else {
                c = "#000000";
                d = "#ffffff";
            }
        }
        else {
            if (i % 2 == 1) {
                c = "#ffffff";
                d = "#000000";
            }
            else {
                c = "#000000";
                d = "#ffffff";
            }
        }
        x = x * 2;
        placeDiv(c, d);
    }
    function placeDiv(_color, _fontColor) {
        let div = document.createElement("div");
        div.textContent = x.toString();
        document.body.appendChild(div);
        let s = div.style;
        s.backgroundColor = _color;
        s.color = _fontColor;
    }
});
//# sourceMappingURL=aufgabe2.js.map