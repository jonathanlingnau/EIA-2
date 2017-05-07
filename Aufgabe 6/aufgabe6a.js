//Aufgabe: Aufgabe 6a
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 06.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst und in zusammenarbeit mit Leonie Storz geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Canvas;
(function (Canvas) {
    window.addEventListener("load", init);
    var crc2;
    var canvas;
    var ImageData;
    var bees = [];
    var n = 10;
    var elem = document.getElementsByTagName("canvas")[0];
    elem.addEventListener("click", addBee);
    elem.addEventListener("touchstart", addBee);
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Himmel
        crc2.fillStyle = "#87CEEB";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        drawMountain(420, 480, "#808080");
        //Wiese
        crc2.fillStyle = "#00FF7F";
        crc2.fillRect(0, 420, 1270, 420);
        drawSun(970, 100);
        drawMountain(250, 420, "#a9a9a9");
        drawCloud(180, 240);
        drawMountain(100, 420, "#696969");
        drawCloud(850, 100);
        for (var i = 0; i < Math.round(Math.random() * 3); i++) {
            var x = void 0;
            var y = void 0;
            x = Math.round(Math.random() * 1000 + 30);
            y = Math.round(Math.random() * 300);
            drawCloud(x, y);
        }
        for (var i = 0; i < Math.round(Math.random() * 3); i++) {
            var c = void 0;
            var x = void 0;
            var y = void 0;
            c = "#006400";
            x = Math.round(Math.random() * 850 + 10);
            y = Math.round(Math.random() * 250 + 470);
            drawBush(x, y, c);
        }
        for (var i = 0; i < Math.round(Math.random() * 300); i++) {
            var c = void 0;
            var x = void 0;
            var y = void 0;
            c = "hsl(" + Math.round(Math.random() * 360) + "," + "100%," + "50%)";
            x = Math.round(Math.random() * 1250);
            y = Math.round(Math.random() * 340 + 420);
            if (i % 2 == 0) {
                drawFlower(x, y, c);
            }
            else
                drawTulip(x, y, c);
        }
        drawTree(1100, 580);
        drawBienenkorb(910, 515);
        ImageData = crc2.getImageData(0, 0, 1270, 720);
        //  Biene
        for (var i = 0; i < n; i++) {
            var b = { x: 900, y: 550, color: "#FFFF00" };
            //x[i] = 900;
            //y[i] = 550;
            bees[i] = b;
        }
        window.setTimeout(animate, 20);
    }
    function animate() {
        console.log("Animate called");
        crc2.putImageData(ImageData, 0, 0);
        for (var i = 0; i < n; i++) {
            var b = bees[i];
            b.x += Math.random() * 4 - 3;
            b.y += Math.random() * 4 - 2;
            b.color = "#FFFF00";
            if (b.x < 0) {
                b.x = canvas.width;
            }
            if (b.y < 0) {
                b.y = canvas.height;
            }
            if (b.x > canvas.width) {
                b.x = 0;
            }
            if (b.y > canvas.height) {
                b.y = 0;
            }
            drawBee(b);
        }
        window.setTimeout(animate, 20);
    }
    function addBee() {
        var b = { x: 900, y: 550, color: "#FFFF00" };
        if (n % 2 == 0) {
            b.color = "#FFD700";
        }
        n++;
    }
    function drawBienenkorb(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#A0522D";
        crc2.arc(_x, _y, 26, 0, 2 * Math.PI);
        crc2.moveTo(_x, _y - 10);
        crc2.arc(_x + 23, _y, 10, 0, 2 * Math.PI);
        crc2.moveTo(_x, _y);
        crc2.arc(_x + 23, _y + 20, 10, 0, 2 * Math.PI);
        crc2.moveTo(_x, _y + 4);
        crc2.arc(_x + 23, _y + 41, 10, 0, 2 * Math.PI);
        crc2.arc(_x - 25, _y + 41, 10, 0, 2 * Math.PI);
        crc2.arc(_x - 25, _y + 20, 10, 0, 2 * Math.PI);
        crc2.arc(_x - 25, _y, 10, 0, 2 * Math.PI);
        crc2.fillRect(_x - 26, _y + 6, 51, 45);
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(_x - 5, _y + 33, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawBee(_b) {
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.fillStyle = "#000000";
        crc2.arc(_b.x, _b.y, 7, 0, 2 * Math.PI);
        crc2.arc(_b.x - 8, _b.y - 3, 4, 0, 2 * Math.PI);
        crc2.moveTo(_b.x, _b.y);
        crc2.lineTo(_b.x + 13, _b.y + 3);
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = " #FFFF00";
        crc2.rect(_b.x - 6, _b.y - 4, 2.5, 9);
        crc2.rect(_b.x - 2, _b.y - 6, 2.5, 13);
        crc2.rect(_b.x + 2, _b.y - 4, 2.5, 10);
        crc2.stroke;
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#aFEEEE";
        crc2.arc(_b.x - 4, _b.y - 15, 10, 0, 1.5);
        crc2.moveTo(_b.x, _b.y);
        crc2.arc(_b.x - 1, _b.y - 10, 10, 0, 1.5);
        crc2.closePath();
        crc2.fill();
    }
    function drawMountain(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x - 200, _y);
        crc2.lineTo(_x, _y - 300);
        crc2.lineTo(_x + 200, _y);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x, _y - 300);
        crc2.lineTo(_x + 45, _y - 233);
        crc2.lineTo(_x + 25, _y - 215);
        crc2.lineTo(_x + 3, _y - 233);
        crc2.lineTo(_x - 12, _y - 215);
        crc2.lineTo(_x - 28, _y - 233);
        crc2.lineTo(_x - 40, _y - 215);
        crc2.lineTo(_x - 46, _y - 233);
        crc2.closePath();
        crc2.fillStyle = "#FFFaFa";
        crc2.fill();
    }
    function drawBush(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _fillColor;
        crc2.moveTo(_x + 250, _y);
        crc2.lineTo(_x, _y);
        crc2.arc(_x + 15, _y - 20, 45, Math.PI * 4.3 / 5, Math.PI * 2 / 50);
        crc2.arc(_x + 35, _y - 60, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        crc2.arc(_x + 80, _y - 90, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        crc2.arc(_x + 130, _y - 95, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        crc2.arc(_x + 170, _y - 70, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        crc2.arc(_x + 215, _y - 30, 45, Math.PI * 4 / 5, Math.PI * 10 / 50);
        crc2.closePath();
        crc2.fill();
    }
    function drawTree(_x, _y) {
        //Stamm
        crc2.fillStyle = "#8B4513";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 200);
        crc2.lineTo(_x + 50, _y - 200);
        crc2.lineTo(_x + 50, _y);
        crc2.closePath();
        crc2.fill();
        //Blätter
        crc2.beginPath();
        crc2.fillStyle = "#006400";
        crc2.strokeStyle = "#006400";
        crc2.moveTo(_x - 55, _y - 270);
        crc2.arc(_x - 65, _y - 280, 45, Math.PI * 4.3 / 5, Math.PI * 2 / 50);
        crc2.arc(_x - 45, _y - 320, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        crc2.arc(_x - 5, _y - 350, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        crc2.arc(_x + 50, _y - 355, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        crc2.arc(_x + 90, _y - 330, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        crc2.arc(_x + 125, _y - 290, 45, Math.PI * 4 / 5, Math.PI * 10 / 50);
        crc2.arc(_x + 120, _y - 250, 45, Math.PI * 4 / 7, Math.PI * 10 / 20);
        crc2.arc(_x + 82, _y - 230, 45, Math.PI * 8 / 5, Math.PI * 18 / 20);
        crc2.arc(_x + 30, _y - 225, 50, Math.PI * 8 / 5, Math.PI * 18 / 20);
        crc2.arc(_x - 15, _y - 225, 43, Math.PI * 8 / 5, Math.PI * 18 / 20);
        crc2.arc(_x - 58, _y - 245, 50, Math.PI * 8 / 5, Math.PI * 24 / 20);
        crc2.closePath();
        crc2.fill();
    }
    function drawFlower(_x, _y, _fillColor) {
        //Stiel
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 8, _y - 70);
        crc2.lineTo(_x + 13, _y - 70);
        crc2.lineTo(_x + 6, _y);
        crc2.closePath();
        crc2.fillStyle = "#008000";
        crc2.fill();
        //Blatt rechts
        crc2.beginPath();
        crc2.moveTo(_x + 10, _y - 70);
        crc2.lineTo(_x + 10, _y - 70);
        crc2.arc(_x + 29, _y - 70, 12, Math.PI * 8 / 6, Math.PI * 6 / 10);
        crc2.closePath();
        crc2.fillStyle = _fillColor;
        //          crc2.lineWidth = 1;
        crc2.lineJoin = "round";
        crc2.fill();
        //Blatt oben
        crc2.beginPath();
        crc2.moveTo(_x + 15, _y - 70);
        crc2.lineTo(_x + 3, _y - 70);
        crc2.arc(_x + 11, _y - 88, 12, Math.PI * 5 / 6, Math.PI * 2 / 10);
        crc2.closePath();
        crc2.fillStyle = _fillColor;
        //          crc2.lineWidth = 1;
        crc2.lineJoin = "round";
        crc2.fill();
        //Blatt links
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y - 75);
        crc2.lineTo(_x + 15, _y - 70);
        crc2.arc(_x - 8, _y - 70, 12, Math.PI * 4 / 10, Math.PI * 10 / 6);
        crc2.closePath();
        crc2.fillStyle = _fillColor;
        //          crc2.lineWidth = 1;
        crc2.lineJoin = "round";
        crc2.fill();
        //Blatt unten
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y - 70);
        crc2.lineTo(_x + 15, _y - 70);
        crc2.arc(_x + 10, _y - 55, 12, Math.PI * 19 / 10, Math.PI * 7 / 6);
        crc2.closePath();
        crc2.fillStyle = _fillColor;
        //          crc2.lineWidth = 1;
        crc2.lineJoin = "round";
        crc2.fill();
        //Mitte
        crc2.beginPath();
        crc2.moveTo(_x + 15, _y - 70);
        crc2.arc(_x + 10, _y - 70, 8, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
        crc2.fillStyle = "#FFD700";
        //          crc2.lineWidth = 1;
        crc2.lineJoin = "round";
        crc2.fill();
    }
    function drawTulip(_x, _y, _color) {
        //Stiel
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 5, _y - 70);
        crc2.lineTo(_x + 10, _y - 70);
        crc2.lineTo(_x + 6, _y);
        crc2.closePath();
        crc2.fillStyle = "#008000";
        crc2.fill();
        //Tulip
        crc2.beginPath();
        crc2.fillStyle = _color;
        crc2.moveTo(_x - 7, _y - 68);
        crc2.lineTo(_x - 5, _y - 90);
        crc2.lineTo(_x + 2, _y - 76);
        crc2.lineTo(_x + 8.5, _y - 90);
        crc2.lineTo(_x + 15, _y - 76);
        crc2.lineTo(_x + 21.5, _y - 90);
        crc2.lineTo(_x + 23, _y - 69);
        crc2.arc(_x + 8, _y - 70, 15, 0, 1 * Math.PI);
        crc2.fill();
        crc2.closePath();
    }
    function drawCloud(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#F5F5F5";
        crc2.arc(_x + 125, _y + 22, 27, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
        crc2.arc(_x + 90, _y + 21, 42, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
        crc2.arc(_x + 50, _y + 28, 33, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
        crc2.arc(_x + 15, _y + 25, 22, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
        crc2.moveTo(_x + 20, _y + 17);
        crc2.lineTo(_x + 120, _y + 17);
        crc2.lineTo(_x + 120, _y + 35);
        crc2.lineTo(_x + 20, _y + 35);
        crc2.closePath();
        crc2.closePath();
        crc2.fill();
    }
    function drawSun(_x, _y) {
        crc2.beginPath();
        crc2.fillStyle = "#FFD700";
        crc2.arc(_x, _y, 70, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
        crc2.fill();
        crc2.closePath();
    }
})(Canvas || (Canvas = {}));
;
//# sourceMappingURL=aufgabe6a.js.map