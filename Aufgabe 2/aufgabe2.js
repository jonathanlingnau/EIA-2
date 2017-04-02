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
});
//# sourceMappingURL=aufgabe2.js.map