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
        drawFlower(770, 550, "#FF0000");
        drawFlower(120, 600, "#FF0000");
        drawFlower(1100, 700, "#FF0000");
        drawFlower(3, 678, "#FF0000");
        drawFlower(372, 500, "hsl(300,100%,50%)");
        for (var i = 0; i < Math.round(Math.random() * 300); i++) {
            var c = void 0;
            var x = void 0;
            var y = void 0;
            c = "hsl(" + Math.round(Math.random() * 360) + "," + Math.round(Math.random() * 100) + "%," + Math.round(Math.random() * 100) + "%)";
            x = Math.round(Math.random() * 1250);
            y = Math.round(Math.random() * 350 + 420);
            drawFlower(x, y, c);
        }
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
    function drawFlower(_x, _y, _fillColor) {
        //Stiel
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 12, _y - 70);
        crc2.lineTo(_x + 17, _y - 70);
        crc2.lineTo(_x + 10, _y);
        crc2.closePath();
        crc2.fillStyle = "#008000";
        crc2.fill();
        //Blatt rechts
        crc2.beginPath();
        crc2.moveTo(_x + 15, _y - 70);
        crc2.lineTo(_x + 15, _y - 70);
        crc2.arc(_x + 35, _y - 70, 7, Math.PI * 8 / 6, Math.PI * 6 / 10);
        crc2.closePath();
        crc2.fillStyle = _fillColor;
        //          crc2.lineWidth = 1;
        crc2.lineJoin = 'round';
        crc2.fill();
        //Blatt oben
        crc2.beginPath();
        crc2.moveTo(_x + 15, _y - 70);
        crc2.lineTo(_x + 15, _y - 70);
        crc2.arc(_x + 15, _y - 92, 7, Math.PI * 5 / 6, Math.PI * 2 / 10);
        crc2.closePath();
        crc2.fillStyle = _fillColor;
        //          crc2.lineWidth = 1;
        crc2.lineJoin = 'round';
        crc2.fill();
        //Blatt links
        crc2.beginPath();
        crc2.moveTo(_x + 15, _y - 70);
        crc2.lineTo(_x + 15, _y - 70);
        crc2.arc(_x - 5, _y - 70, 7, Math.PI * 4 / 10, Math.PI * 10 / 6);
        crc2.closePath();
        crc2.fillStyle = _fillColor;
        //          crc2.lineWidth = 1;
        crc2.lineJoin = 'round';
        crc2.fill();
        //Blatt unten
        crc2.beginPath();
        crc2.moveTo(_x + 15, _y - 70);
        crc2.lineTo(_x + 15, _y - 70);
        crc2.arc(_x + 15, _y - 50, 7, Math.PI * 0 / 10, Math.PI * 7 / 6);
        crc2.closePath();
        crc2.fillStyle = _fillColor;
        //          crc2.lineWidth = 1;
        crc2.lineJoin = 'round';
        crc2.fill();
        //Mitte
        crc2.beginPath();
        crc2.moveTo(_x + 15, _y - 70);
        crc2.arc(_x + 15, _y - 70, 8, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
        crc2.fillStyle = "#FFD700";
        //          crc2.lineWidth = 1;
        crc2.lineJoin = 'round';
        crc2.fill();
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=aufgabe4.js.map