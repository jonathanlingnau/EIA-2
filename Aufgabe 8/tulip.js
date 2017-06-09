//Aufgabe: Aufgabe 8
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Inheritance_A8;
(function (Inheritance_A8) {
    var tulip = (function (_super) {
        __extends(tulip, _super);
        function tulip(_x, _y, _color) {
            _super.call(this, _x, _y, _color);
            //            this.setRandomFlower();
            this.setRandomColor();
            _color = this.color;
            this.setRandomPosition();
            _x = this.x;
            _y = this.y;
        }
        tulip.prototype.drawTulip = function () {
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
        };
        return tulip;
    }(Inheritance_A8.superClassFlower));
    Inheritance_A8.tulip = tulip;
})(Inheritance_A8 || (Inheritance_A8 = {}));
