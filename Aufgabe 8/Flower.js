//Aufgabe: Aufgabe 7
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 14.05.17
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
    var Flower = (function (_super) {
        __extends(Flower, _super);
        function Flower(_x, _y, _color) {
            _super.call(this, _x, _y, _color);
            //            this.setRandomFlower();
            this.setRandomColor();
            _color = this.color;
            this.setRandomPosition();
            _x = this.x;
            _y = this.y;
        }
        Flower.prototype.drawFlower = function () {
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
            //Blatt ob    
            Inheritance_A8.crc2.beginPath();
            Inheritance_A8.crc2.moveTo(this.x + 15, this.y - 70);
            Inheritance_A8.crc2.lineTo(this.x + 3, this.y - 70);
            Inheritance_A8.crc2.arc(this.x + 11, this.y - 88, 12, Math.PI * 5 / 6, Math.PI * 2 / 10);
            Inheritance_A8.crc2.closePath();
            Inheritance_A8.crc2.fillStyle = this.color;
            //          crc2.lineWidth = 1;
            Inheritance_A8.crc2.lineJoin = "round";
            Inheritance_A8.crc2.fill();
            //Blatt lin    
            Inheritance_A8.crc2.beginPath();
            Inheritance_A8.crc2.moveTo(this.x + 5, this.y - 75);
            Inheritance_A8.crc2.lineTo(this.x + 15, this.y - 70);
            Inheritance_A8.crc2.arc(this.x - 8, this.y - 70, 12, Math.PI * 4 / 10, Math.PI * 10 / 6);
            Inheritance_A8.crc2.closePath();
            Inheritance_A8.crc2.fillStyle = this.color;
            //          crc2.lineWidth = 1;
            Inheritance_A8.crc2.lineJoin = "round";
            Inheritance_A8.crc2.fill();
            //Blatt unt    
            Inheritance_A8.crc2.beginPath();
            Inheritance_A8.crc2.moveTo(this.x + 5, this.y - 70);
            Inheritance_A8.crc2.lineTo(this.x + 15, this.y - 70);
            Inheritance_A8.crc2.arc(this.x + 10, this.y - 55, 12, Math.PI * 19 / 10, Math.PI * 7 / 6);
            Inheritance_A8.crc2.closePath();
            Inheritance_A8.crc2.fillStyle = this.color;
            //          crc2.lineWidth = 1;
            Inheritance_A8.crc2.lineJoin = "round";
            Inheritance_A8.crc2.fill();
            //Mit    
            Inheritance_A8.crc2.beginPath();
            Inheritance_A8.crc2.moveTo(this.x + 15, this.y - 70);
            Inheritance_A8.crc2.arc(this.x + 10, this.y - 70, 8, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
            Inheritance_A8.crc2.fillStyle = "#FFD700";
            //          crc2.lineWidth = 1;
            Inheritance_A8.crc2.lineJoin = "round";
            Inheritance_A8.crc2.fill();
        };
        Flower.prototype.drawTulip = function () {
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
        return Flower;
    }(Inheritance_A8.MovingShape));
    Inheritance_A8.Flower = Flower;
})(Inheritance_A8 || (Inheritance_A8 = {}));
//# sourceMappingURL=Flower.js.map