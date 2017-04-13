document.addEventListener('DOMContentLoaded', function () {
    var i = 0;
    var n = 64;
    var x = 1;
    var c;
    var d;
    var zeile = 0;
    var divSelected;
    var sum = 0;
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
        placeDiv(c, d, i_1, x);
    }
    function placeDiv(_color, _fontColor, _id, value) {
        divSelected.push(false);
        var div = document.createElement("div");
        div.textContent = value.toString();
        document.body.appendChild(div);
        var s = div.style;
        s.backgroundColor = _color;
        s.color = _fontColor;
        //        div.addEventListener("click", function () : void {
        //            if (divSelected[_id]){
        //                sum-=value;
        //                divSelected[_id]= false;
        //                div.style.borderColor = "black";
        //            }
        //            
        //            else {
        //                sum+=value;
        //                divSelected[_id]=true;
        //                div.style.borderColor = "rgb(255,0,0)";
        //            }
        //            document.getElementById("sumWindow").innerText = sum.toString();
        //            
        //            }); 
    }
    //    document.addEventListener("mousemove", function (Event) {
    //        document.getElementById("sumWindow").style.left = (Event.clientX + 10) + "px";
    //        document.getElementById("sumWindow").style.top = (Event.clientY + 10) + "px";
    //    });
    //    
});
//# sourceMappingURL=aufgabe3A.js.map