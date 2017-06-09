//Aufgabe: Aufgabe 8
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Inheritance_A8;
(function (Inheritance_A8) {
    var superClassBee = (function () {
        function superClassBee(_x, _y, _color, _pollen) {
            //this.setRandomStyle();
            this.setPosition();
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.pollen = _pollen;
        }
        superClassBee.prototype.update = function () {
            this.move();
            this.draw();
        };
        superClassBee.prototype.draw = function () {
            Inheritance_A8.crc2.beginPath();
            Inheritance_A8.crc2.strokeStyle = "#000000";
            Inheritance_A8.crc2.fillStyle = "#000000";
            Inheritance_A8.crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            Inheritance_A8.crc2.arc(this.x - 8, this.y - 3, 4, 0, 2 * Math.PI);
            Inheritance_A8.crc2.moveTo(this.x, this.y);
            Inheritance_A8.crc2.lineTo(this.x + 13, this.y + 3);
            Inheritance_A8.crc2.stroke();
            Inheritance_A8.crc2.fill();
            Inheritance_A8.crc2.beginPath();
            Inheritance_A8.crc2.fillStyle = this.color;
            Inheritance_A8.crc2.rect(this.x - 6, this.y - 4, 2.5, 9);
            Inheritance_A8.crc2.rect(this.x - 2, this.y - 6, 2.5, 13);
            Inheritance_A8.crc2.rect(this.x + 2, this.y - 4, 2.5, 10);
            //        crc2.stroke;
            Inheritance_A8.crc2.fill();
            Inheritance_A8.crc2.beginPath();
            Inheritance_A8.crc2.fillStyle = "#aFEEEE";
            Inheritance_A8.crc2.arc(this.x - 4, this.y - 15, 10, 0, 1.5);
            Inheritance_A8.crc2.moveTo(this.x, this.y);
            Inheritance_A8.crc2.arc(this.x - 1, this.y - 10, 10, 0, 1.5);
            Inheritance_A8.crc2.closePath();
            Inheritance_A8.crc2.fill();
            //Pollen
            Inheritance_A8.crc2.fillStyle = this.pollen;
            Inheritance_A8.crc2.fillRect(this.x - 3, this.y + 5, 5, 5);
        };
        superClassBee.prototype.move = function () {
            this.x += Math.random() * 4 - 3;
            this.y += Math.random() * 4 - 2;
            if (this.x < 0) {
                this.x = Inheritance_A8.crc2.canvas.width;
            }
            if (this.y < 0) {
                this.y = Inheritance_A8.crc2.canvas.height;
            }
            if (this.x > Inheritance_A8.crc2.canvas.width) {
                this.x = 0;
            }
            if (this.y > Inheritance_A8.crc2.canvas.height) {
                this.y = 0;
            }
        };
        superClassBee.prototype.setPosition = function () {
            this.x = 900;
            this.y = 550;
        };
        return superClassBee;
    }());
    Inheritance_A8.superClassBee = superClassBee;
})(Inheritance_A8 || (Inheritance_A8 = {}));
