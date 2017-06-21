//Aufgabe: Aufgabe 7
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 14.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Classes_A7;
(function (Classes_A7) {
    class Flower {
        constructor(_x, _y, _color) {
            console.log("Hey, I'm Bob!");
            //            this.setRandomFlower();
            this.setRandomColor();
            _color = this.color;
            this.setRandomPosition();
            //            _x = this.x;
            //            _y = this.y;
        }
        drawFlower() {
            //Stiel
            Classes_A7.crc2.beginPath();
            Classes_A7.crc2.moveTo(this.x, this.y);
            Classes_A7.crc2.lineTo(this.x + 8, this.y - 70);
            Classes_A7.crc2.lineTo(this.x + 13, this.y - 70);
            Classes_A7.crc2.lineTo(this.x + 6, this.y);
            Classes_A7.crc2.closePath();
            Classes_A7.crc2.fillStyle = "#008000";
            Classes_A7.crc2.fill();
            //Blatt rech    
            Classes_A7.crc2.beginPath();
            Classes_A7.crc2.moveTo(this.x + 10, this.y - 70);
            Classes_A7.crc2.lineTo(this.x + 10, this.y - 70);
            Classes_A7.crc2.arc(this.x + 29, this.y - 70, 12, Math.PI * 8 / 6, Math.PI * 6 / 10);
            Classes_A7.crc2.closePath();
            Classes_A7.crc2.fillStyle = this.color;
            //          crc2.lineWidth = 1;
            Classes_A7.crc2.lineJoin = "round";
            Classes_A7.crc2.fill();
            //Blatt ob    
            Classes_A7.crc2.beginPath();
            Classes_A7.crc2.moveTo(this.x + 15, this.y - 70);
            Classes_A7.crc2.lineTo(this.x + 3, this.y - 70);
            Classes_A7.crc2.arc(this.x + 11, this.y - 88, 12, Math.PI * 5 / 6, Math.PI * 2 / 10);
            Classes_A7.crc2.closePath();
            Classes_A7.crc2.fillStyle = this.color;
            //          crc2.lineWidth = 1;
            Classes_A7.crc2.lineJoin = "round";
            Classes_A7.crc2.fill();
            //Blatt lin    
            Classes_A7.crc2.beginPath();
            Classes_A7.crc2.moveTo(this.x + 5, this.y - 75);
            Classes_A7.crc2.lineTo(this.x + 15, this.y - 70);
            Classes_A7.crc2.arc(this.x - 8, this.y - 70, 12, Math.PI * 4 / 10, Math.PI * 10 / 6);
            Classes_A7.crc2.closePath();
            Classes_A7.crc2.fillStyle = this.color;
            //          crc2.lineWidth = 1;
            Classes_A7.crc2.lineJoin = "round";
            Classes_A7.crc2.fill();
            //Blatt unt    
            Classes_A7.crc2.beginPath();
            Classes_A7.crc2.moveTo(this.x + 5, this.y - 70);
            Classes_A7.crc2.lineTo(this.x + 15, this.y - 70);
            Classes_A7.crc2.arc(this.x + 10, this.y - 55, 12, Math.PI * 19 / 10, Math.PI * 7 / 6);
            Classes_A7.crc2.closePath();
            Classes_A7.crc2.fillStyle = this.color;
            //          crc2.lineWidth = 1;
            Classes_A7.crc2.lineJoin = "round";
            Classes_A7.crc2.fill();
            //Mit    
            Classes_A7.crc2.beginPath();
            Classes_A7.crc2.moveTo(this.x + 15, this.y - 70);
            Classes_A7.crc2.arc(this.x + 10, this.y - 70, 8, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
            Classes_A7.crc2.fillStyle = "#FFD700";
            //          crc2.lineWidth = 1;
            Classes_A7.crc2.lineJoin = "round";
            Classes_A7.crc2.fill();
        }
        drawTulip() {
            //Stiel
            Classes_A7.crc2.beginPath();
            Classes_A7.crc2.moveTo(this.x, this.y);
            Classes_A7.crc2.lineTo(this.x + 5, this.y - 70);
            Classes_A7.crc2.lineTo(this.x + 10, this.y - 70);
            Classes_A7.crc2.lineTo(this.x + 6, this.y);
            Classes_A7.crc2.closePath();
            Classes_A7.crc2.fillStyle = "#008000";
            Classes_A7.crc2.fill();
            //Tulip
            Classes_A7.crc2.beginPath();
            Classes_A7.crc2.fillStyle = this.color;
            Classes_A7.crc2.moveTo(this.x - 7, this.y - 68);
            Classes_A7.crc2.lineTo(this.x - 5, this.y - 90);
            Classes_A7.crc2.lineTo(this.x + 2, this.y - 76);
            Classes_A7.crc2.lineTo(this.x + 8.5, this.y - 90);
            Classes_A7.crc2.lineTo(this.x + 15, this.y - 76);
            Classes_A7.crc2.lineTo(this.x + 21.5, this.y - 90);
            Classes_A7.crc2.lineTo(this.x + 23, this.y - 69);
            Classes_A7.crc2.arc(this.x + 8, this.y - 70, 15, 0, 1 * Math.PI);
            Classes_A7.crc2.fill();
            Classes_A7.crc2.closePath();
        }
        setRandomPosition() {
            this.x = Math.round(Math.random() * 1250);
            this.y = Math.round(Math.random() * 340 + 420);
        }
        setRandomColor() {
            this.color = "hsl(" + Math.round(Math.random() * 360) + "," + "100%," + "50%)";
        }
    }
    Classes_A7.Flower = Flower;
})(Classes_A7 || (Classes_A7 = {}));
//# sourceMappingURL=Flower.js.map