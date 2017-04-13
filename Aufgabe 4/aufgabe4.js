var Canvas;
(function (Canvas) {
    window.addEventListener("load", init);
    var crc2;
    function init(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Himmel
        crc2.fillStyle = "#87CEEB";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Wiese
        crc2.fillStyle = "#00FF7F";
        crc2.fillRect(0, 420, 1270, 420);
        drawMountain(250, 420, "#a9a9a9");
        drawMountain(100, 420, "#808080");
        drawBlume(350, 1100, "#800000");
    }
    function drawMountain(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x - 200, _y);
        crc2.lineTo(_x, _y - 300);
        crc2.lineTo(_x + 200, _y);
        crc2.closePath();
        crc2.fill();
    }
    function drawBlume(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.fillRect(0, 420, 1270, 420);
        //        crc2.moveTo(_x - 10, _y );
        //        crc2.lineTo(_x + 10, _y - 50);
        //        crc2.lineTo(_x + 20, _y - 50);
        //        crc2.lineTo(_x + 20, _y);
        //        crc2.closePath();
        //        crc2.fill();
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=aufgabe4.js.map