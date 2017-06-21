//Aufgabe: Aufgabe 8
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Inheritance_A8;
(function (Inheritance_A8) {
    class tulip extends Inheritance_A8.superClassFlower {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
            //            this.setRandomFlower();
            this.setRandomColor();
            _color = this.color;
            this.setRandomPosition();
            _x = this.x;
            _y = this.y;
        }
        drawTulip() {
            //Stiel
            Inheritance_A8.crc2.beginPath();
            Inheritance_A8.crc2.moveTo(this.x, this.y);
            Inheritance_A8.crc2.lineTo(this.x + 5, this.y - 70);
            Inheritance_A8.crc2.lineTo(this.x + 10, this.y - 70);
            Inheritance_A8.crc2.lineTo(this.x + 6, this.y);
            Inheritance_A8.crc2.closePath();
            Inheritance_A8.crc2.fillStyle = "#008000";
            Inheritance_A8.crc2.fill();
            //Tulip
            Inheritance_A8.crc2.beginPath();
            Inheritance_A8.crc2.fillStyle = this.color;
            Inheritance_A8.crc2.moveTo(this.x - 7, this.y - 68);
            Inheritance_A8.crc2.lineTo(this.x - 5, this.y - 90);
            Inheritance_A8.crc2.lineTo(this.x + 2, this.y - 76);
            Inheritance_A8.crc2.lineTo(this.x + 8.5, this.y - 90);
            Inheritance_A8.crc2.lineTo(this.x + 15, this.y - 76);
            Inheritance_A8.crc2.lineTo(this.x + 21.5, this.y - 90);
            Inheritance_A8.crc2.lineTo(this.x + 23, this.y - 69);
            Inheritance_A8.crc2.arc(this.x + 8, this.y - 70, 15, 0, 1 * Math.PI);
            Inheritance_A8.crc2.fill();
            Inheritance_A8.crc2.closePath();
        }
    }
    Inheritance_A8.tulip = tulip;
})(Inheritance_A8 || (Inheritance_A8 = {}));
//# sourceMappingURL=tulip.js.map