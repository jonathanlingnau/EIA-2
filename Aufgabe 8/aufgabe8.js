//Aufgabe: Aufgabe 8
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Inheritance_A8;
(function (Inheritance_A8) {
    window.addEventListener("load", init);
    let canvas;
    let ImageData;
    Inheritance_A8.bees = [];
    Inheritance_A8.n = 10;
    Inheritance_A8.flowers = [];
    let flowerNumber = Math.round(Math.random() * 300);
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Inheritance_A8.crc2 = canvas.getContext("2d");
        console.log(Inheritance_A8.crc2);
        canvas.addEventListener("click", addBee);
        canvas.addEventListener("touchstart", addBee);
        //Himmel
        Inheritance_A8.crc2.fillStyle = "#87CEEB";
        Inheritance_A8.crc2.fillRect(0, 0, canvas.width, canvas.height);
        drawMountain(420, 480, "#808080");
        //Wiese
        Inheritance_A8.crc2.fillStyle = "#00FF7F";
        Inheritance_A8.crc2.fillRect(0, 420, 1270, 420);
        drawSun(970, 100);
        drawMountain(250, 420, "#a9a9a9");
        drawCloud(180, 240);
        drawMountain(100, 420, "#696969");
        drawCloud(850, 100);
        for (let i = 0; i < Math.round(Math.random() * 3); i++) {
            let x;
            let y;
            x = Math.round(Math.random() * 1000 + 30);
            y = Math.round(Math.random() * 300);
            drawCloud(x, y);
        }
        for (let i = 0; i < Math.round(Math.random() * 3); i++) {
            let c;
            let x;
            let y;
            c = "#006400";
            x = Math.round(Math.random() * 850 + 10);
            y = Math.round(Math.random() * 250 + 470);
            drawBush(x, y, c);
        }
        for (let i = 0; i < Math.round(Math.random() * 200); i++) {
            let y = 0;
            let x = 0;
            let color = "";
            let f = new Inheritance_A8.Flower(x, y, color);
            let t = new Inheritance_A8.tulip(x, y, color);
            f.setRandomPosition();
            f.setRandomColor();
            if (i % 2 == 0) {
                f.drawFlower();
            }
            else
                t.drawTulip();
        }
        for (let i = 0; i < Math.round(Math.random() * 60); i++) {
            let y = 0;
            let x = 0;
            let color = "";
            let fixedFlower = new Inheritance_A8.Flower(x, y, color);
            fixedFlower.setRandomPosition();
            fixedFlower.setRandomColor();
            fixedFlower.drawFlower();
            Inheritance_A8.flowers.push(fixedFlower);
        }
        console.log(Inheritance_A8.flowers);
        drawTree(1100, 580);
        drawBienenkorb(910, 515);
        ImageData = Inheritance_A8.crc2.getImageData(0, 0, 1270, 720);
        // Biene      
        for (let i = 0; i < Inheritance_A8.n; i++) {
            if (i % 2 == 0) {
                let b = new Inheritance_A8.Bee(900, 550, "#FFFF00", "#FFD700");
                Inheritance_A8.bees[i] = b;
            }
            else {
                let h = new Inheritance_A8.honeyBee(900, 550, "#FFFF00", "#FFD700");
                Inheritance_A8.bees[i] = h;
            }
        }
        window.setTimeout(animate, 20);
    }
    function animate() {
        console.log("Animate called");
        Inheritance_A8.crc2.putImageData(ImageData, 0, 0);
        for (let i = 0; i < Inheritance_A8.n; i++) {
            let b = Inheritance_A8.bees[i];
            b.update();
        }
        //        for (let i: number = 0; i < flowers.length; i++) {
        //        let f: Flower = flowers[i];
        //        f.draw     }
        window.setTimeout(animate, 20);
    }
    function addBee(_event) {
        if (Inheritance_A8.n % 2 == 0) {
            let b = new Inheritance_A8.Bee(900, 550, "#FFFF00", "#FFD700");
            Inheritance_A8.bees[Inheritance_A8.n] = b;
            b.setPosition();
            Inheritance_A8.bees.push(b);
        }
        else {
            let h = new Inheritance_A8.honeyBee(900, 550, "#FFFF00", "#FFD700");
            Inheritance_A8.bees[Inheritance_A8.n] = h;
            h.setPosition();
            Inheritance_A8.bees.push(h);
        }
        Inheritance_A8.n++;
    }
    function drawBienenkorb(_x, _y) {
        Inheritance_A8.crc2.beginPath();
        Inheritance_A8.crc2.fillStyle = "#A0522D";
        Inheritance_A8.crc2.arc(_x, _y, 26, 0, 2 * Math.PI);
        Inheritance_A8.crc2.moveTo(_x, _y - 10);
        Inheritance_A8.crc2.arc(_x + 23, _y, 10, 0, 2 * Math.PI);
        Inheritance_A8.crc2.moveTo(_x, _y);
        Inheritance_A8.crc2.arc(_x + 23, _y + 20, 10, 0, 2 * Math.PI);
        Inheritance_A8.crc2.moveTo(_x, _y + 4);
        Inheritance_A8.crc2.arc(_x + 23, _y + 41, 10, 0, 2 * Math.PI);
        Inheritance_A8.crc2.arc(_x - 25, _y + 41, 10, 0, 2 * Math.PI);
        Inheritance_A8.crc2.arc(_x - 25, _y + 20, 10, 0, 2 * Math.PI);
        Inheritance_A8.crc2.arc(_x - 25, _y, 10, 0, 2 * Math.PI);
        Inheritance_A8.crc2.fillRect(_x - 26, _y + 6, 51, 45);
        Inheritance_A8.crc2.fill();
        Inheritance_A8.crc2.beginPath();
        Inheritance_A8.crc2.fillStyle = "#000000";
        Inheritance_A8.crc2.arc(_x - 5, _y + 33, 10, 0, 2 * Math.PI);
        Inheritance_A8.crc2.closePath();
        Inheritance_A8.crc2.fill();
    }
    function drawMountain(_x, _y, _fillColor) {
        Inheritance_A8.crc2.beginPath();
        Inheritance_A8.crc2.fillStyle = _fillColor;
        Inheritance_A8.crc2.moveTo(_x - 200, _y);
        Inheritance_A8.crc2.lineTo(_x, _y - 300);
        Inheritance_A8.crc2.lineTo(_x + 200, _y);
        Inheritance_A8.crc2.closePath();
        Inheritance_A8.crc2.fill();
        Inheritance_A8.crc2.beginPath();
        Inheritance_A8.crc2.moveTo(_x, _y - 300);
        Inheritance_A8.crc2.lineTo(_x + 45, _y - 233);
        Inheritance_A8.crc2.lineTo(_x + 25, _y - 215);
        Inheritance_A8.crc2.lineTo(_x + 3, _y - 233);
        Inheritance_A8.crc2.lineTo(_x - 12, _y - 215);
        Inheritance_A8.crc2.lineTo(_x - 28, _y - 233);
        Inheritance_A8.crc2.lineTo(_x - 40, _y - 215);
        Inheritance_A8.crc2.lineTo(_x - 46, _y - 233);
        Inheritance_A8.crc2.closePath();
        Inheritance_A8.crc2.fillStyle = "#FFFaFa";
        Inheritance_A8.crc2.fill();
    }
    function drawBush(_x, _y, _fillColor) {
        Inheritance_A8.crc2.beginPath();
        Inheritance_A8.crc2.fillStyle = _fillColor;
        Inheritance_A8.crc2.strokeStyle = _fillColor;
        Inheritance_A8.crc2.moveTo(_x + 250, _y);
        Inheritance_A8.crc2.lineTo(_x, _y);
        Inheritance_A8.crc2.arc(_x + 15, _y - 20, 45, Math.PI * 4.3 / 5, Math.PI * 2 / 50);
        Inheritance_A8.crc2.arc(_x + 35, _y - 60, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        Inheritance_A8.crc2.arc(_x + 80, _y - 90, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        Inheritance_A8.crc2.arc(_x + 130, _y - 95, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        Inheritance_A8.crc2.arc(_x + 170, _y - 70, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        Inheritance_A8.crc2.arc(_x + 215, _y - 30, 45, Math.PI * 4 / 5, Math.PI * 10 / 50);
        Inheritance_A8.crc2.closePath();
        Inheritance_A8.crc2.fill();
    }
    function drawTree(_x, _y) {
        //Stamm
        Inheritance_A8.crc2.fillStyle = "#8B4513";
        Inheritance_A8.crc2.moveTo(_x, _y);
        Inheritance_A8.crc2.lineTo(_x, _y - 200);
        Inheritance_A8.crc2.lineTo(_x + 50, _y - 200);
        Inheritance_A8.crc2.lineTo(_x + 50, _y);
        Inheritance_A8.crc2.closePath();
        Inheritance_A8.crc2.fill();
        //Blätter
        Inheritance_A8.crc2.beginPath();
        Inheritance_A8.crc2.fillStyle = "#006400";
        Inheritance_A8.crc2.strokeStyle = "#006400";
        Inheritance_A8.crc2.moveTo(_x - 55, _y - 270);
        Inheritance_A8.crc2.arc(_x - 65, _y - 280, 45, Math.PI * 4.3 / 5, Math.PI * 2 / 50);
        Inheritance_A8.crc2.arc(_x - 45, _y - 320, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        Inheritance_A8.crc2.arc(_x - 5, _y - 350, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        Inheritance_A8.crc2.arc(_x + 50, _y - 355, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        Inheritance_A8.crc2.arc(_x + 90, _y - 330, 45, Math.PI * 4 / 5, Math.PI * 2 / 50);
        Inheritance_A8.crc2.arc(_x + 125, _y - 290, 45, Math.PI * 4 / 5, Math.PI * 10 / 50);
        Inheritance_A8.crc2.arc(_x + 120, _y - 250, 45, Math.PI * 4 / 7, Math.PI * 10 / 20);
        Inheritance_A8.crc2.arc(_x + 82, _y - 230, 45, Math.PI * 8 / 5, Math.PI * 18 / 20);
        Inheritance_A8.crc2.arc(_x + 30, _y - 225, 50, Math.PI * 8 / 5, Math.PI * 18 / 20);
        Inheritance_A8.crc2.arc(_x - 15, _y - 225, 43, Math.PI * 8 / 5, Math.PI * 18 / 20);
        Inheritance_A8.crc2.arc(_x - 58, _y - 245, 50, Math.PI * 8 / 5, Math.PI * 24 / 20);
        Inheritance_A8.crc2.closePath();
        Inheritance_A8.crc2.fill();
    }
    function drawCloud(_x, _y) {
        Inheritance_A8.crc2.beginPath();
        Inheritance_A8.crc2.fillStyle = "#F5F5F5";
        Inheritance_A8.crc2.arc(_x + 125, _y + 22, 27, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
        Inheritance_A8.crc2.arc(_x + 90, _y + 21, 42, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
        Inheritance_A8.crc2.arc(_x + 50, _y + 28, 33, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
        Inheritance_A8.crc2.arc(_x + 15, _y + 25, 22, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
        Inheritance_A8.crc2.moveTo(_x + 20, _y + 17);
        Inheritance_A8.crc2.lineTo(_x + 120, _y + 17);
        Inheritance_A8.crc2.lineTo(_x + 120, _y + 35);
        Inheritance_A8.crc2.lineTo(_x + 20, _y + 35);
        Inheritance_A8.crc2.closePath();
        Inheritance_A8.crc2.closePath();
        Inheritance_A8.crc2.fill();
    }
    function drawSun(_x, _y) {
        Inheritance_A8.crc2.beginPath();
        Inheritance_A8.crc2.fillStyle = "#FFD700";
        Inheritance_A8.crc2.arc(_x, _y, 70, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
        Inheritance_A8.crc2.fill();
        Inheritance_A8.crc2.closePath();
    }
})(Inheritance_A8 || (Inheritance_A8 = {}));
;
//# sourceMappingURL=aufgabe8.js.map