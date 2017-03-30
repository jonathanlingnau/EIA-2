document.addEventListener('DOMContentLoaded', function () {
    var i = 0;
    var n = 64;
    var x = 1;
    var c;
    var zeile = 0;
    for (var i_1 = 0; i_1 < n; i_1++) {
        if (i_1 % 8 == 0) {
            zeile++;
        }
        if (zeile % 2 == 0) {
            if (i_1 % 2 == 0) {
                c = "#ffffff";
            }
            else {
                c = "#000000";
            }
        }
        else {
            if (i_1 % 2 == 1) {
                c = "#ffffff";
            }
            else {
                c = "#000000";
            }
        }
        placeDiv(c);
    }
    function placeDiv(_color) {
        var div = document.createElement("div");
        document.body.appendChild(div);
        var s = div.style;
        s.backgroundColor = _color;
        div.className += "squares";
    }
});
//# sourceMappingURL=aufgabe2.js.map