//Aufgabe: Aufgabe 8
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Inheritance_A8;
(function (Inheritance_A8) {
    class Flower extends Inheritance_A8.superClassFlower {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
            //this.setRandomFlower();
            this.setRandomColor();
            _color = this.color;
            this.setRandomPosition();
            _x = this.x;
            _y = this.y;
        }
        drawFlower() {
            //Stiel
            Inheritance_A8.crc2.beginPath();
            Inheritance_A8.crc2.moveTo(this.x, this.y);
            Inheritance_A8.crc2.lineTo(this.x + 8, this.y - 70);
            Inheritance_A8.crc2.lineTo(this.x + 13, this.y - 70);
            Inheritance_A8.crc2.lineTo(this.x + 6, this.y);
            Inheritance_A8.crc2.closePath();
            Inheritance_A8.crc2.fillStyle = "#008000";
            Inheritance_A8.crc2.fill();
            //Blatt rech    
            Inheritance_A8.crc2.beginPath();
            Inheritance_A8.crc2.moveTo(this.x + 10, this.y - 70);
            Inheritance_A8.crc2.lineTo(this.x + 10, this.y - 70);
            Inheritance_A8.crc2.arc(this.x + 29, this.y - 70, 12, Math.PI * 8 / 6, Math.PI * 6 / 10);
            Inheritance_A8.crc2.closePath();
            Inheritance_A8.crc2.fillStyle = this.color;
            //          crc2.lineWidth = 1;
            Inheritance_A8.crc2.lineJoin = "round";
            Inheritance_A8.crc2.fill();
            //Blatt oben    
            Inheritance_A8.crc2.beginPath();
            Inheritance_A8.crc2.moveTo(this.x + 15, this.y - 70);
            Inheritance_A8.crc2.lineTo(this.x + 3, this.y - 70);
            Inheritance_A8.crc2.arc(this.x + 11, this.y - 88, 12, Math.PI * 5 / 6, Math.PI * 2 / 10);
            Inheritance_A8.crc2.closePath();
            Inheritance_A8.crc2.fillStyle = this.color;
            //          crc2.lineWidth = 1;
            Inheritance_A8.crc2.lineJoin = "round";
            Inheritance_A8.crc2.fill();
            //Blatt links    
            Inheritance_A8.crc2.beginPath();
            Inheritance_A8.crc2.moveTo(this.x + 5, this.y - 75);
            Inheritance_A8.crc2.lineTo(this.x + 15, this.y - 70);
            Inheritance_A8.crc2.arc(this.x - 8, this.y - 70, 12, Math.PI * 4 / 10, Math.PI * 10 / 6);
            Inheritance_A8.crc2.closePath();
            Inheritance_A8.crc2.fillStyle = this.color;
            //          crc2.lineWidth = 1;
            Inheritance_A8.crc2.lineJoin = "round";
            Inheritance_A8.crc2.fill();
            //Blatt unten    
            Inheritance_A8.crc2.beginPath();
            Inheritance_A8.crc2.moveTo(this.x + 5, this.y - 70);
            Inheritance_A8.crc2.lineTo(this.x + 15, this.y - 70);
            Inheritance_A8.crc2.arc(this.x + 10, this.y - 55, 12, Math.PI * 19 / 10, Math.PI * 7 / 6);
            Inheritance_A8.crc2.closePath();
            Inheritance_A8.crc2.fillStyle = this.color;
            //          crc2.lineWidth = 1;
            Inheritance_A8.crc2.lineJoin = "round";
            Inheritance_A8.crc2.fill();
            //Mitte    
            Inheritance_A8.crc2.beginPath();
            Inheritance_A8.crc2.moveTo(this.x + 15, this.y - 70);
            Inheritance_A8.crc2.arc(this.x + 10, this.y - 70, 8, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
            Inheritance_A8.crc2.fillStyle = "#FFD700";
            //          crc2.lineWidth = 1;
            Inheritance_A8.crc2.lineJoin = "round";
            Inheritance_A8.crc2.fill();
        }
    }
    Inheritance_A8.Flower = Flower;
})(Inheritance_A8 || (Inheritance_A8 = {}));
//# sourceMappingURL=Flower.js.map