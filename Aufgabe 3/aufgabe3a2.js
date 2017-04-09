//Aufgabe: Aufgabe 2
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 06.04.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
document.addEventListener('DOMContentLoaded', function () {
    var i = 0;
    var n = 64;
    var x = 1;
    var c;
    var d;
    var zeile = 0;
    for (var i_1 = 0; i_1 < n; i_1++) {
        if (i_1 % 8 == 0) {
            zeile++;
        }
        if (zeile % 2 == 0) {
            if (i_1 % 2 == 0) {
                c = "#ffffff";
                d = "#000000";
            }
            else {
                c = "#000000";
                d = "#ffffff";
            }
        }
        else {
            if (i_1 % 2 == 1) {
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
        var div = document.createElement("div");
        div.textContent = x.toString();
        document.body.appendChild(div);
        var s = div.style;
        s.backgroundColor = _color;
        s.color = _fontColor;
    }
    var getDivs = document.getElementsByTagName("div");
    var divClicked = false;
    var _loop_1 = function(i_2) {
        getDivs[i_2].addEventListener("click", function () {
            if (divClicked == false) {
                getDivs[i_2].style.borderColor = "rgb(255,0,0)";
                divClicked = true;
            }
            else {
                getDivs[i_2].style.borderColor = "black";
                divClicked = false;
            }
        });
        for (var i_3 = 0; i_3 < 8; i_3++) {
            x += Number(getDivs[i_3].textContent);
            document.getElementById("sumWindow").textContent = "Dezimal: " + x.toString() + " ; " + "Hexadezimal: " + x.toString(16);
        }
    };
    for (var i_2 = 0; i_2 < 9; i_2++) {
        _loop_1(i_2);
    }
    document.addEventListener("mousemove", function (Event) {
        document.getElementById("sumWindow").style.left = (Event.clientX + 15) + "px";
        document.getElementById("sumWindow").style.top = (Event.clientY + 20) + "px";
    });
});
//# sourceMappingURL=aufgabe3a2.js.map