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
    var honeyBee = (function (_super) {
        __extends(honeyBee, _super);
        function honeyBee(_x, _y, _color, _pollen) {
            _super.call(this, _x, _y, _color, _pollen);
            this.speed = 0.01;
            this.getFlowerPosition();
            console.log("Create Honeybee");
        }
        honeyBee.prototype.getFlowerPosition = function () {
            var i = Math.round(Math.random() * (Inheritance_A8.flowers.length - 1));
            this.xTarget = Inheritance_A8.flowers[i].x;
            this.yTarget = Inheritance_A8.flowers[i].y;
        };
        honeyBee.prototype.move = function () {
            var xDiff = this.xTarget - this.x + 15;
            var yDiff = this.yTarget - this.y - 70;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.getFlowerPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        };
        return honeyBee;
    }(Inheritance_A8.superClassBee));
    Inheritance_A8.honeyBee = honeyBee;
})(Inheritance_A8 || (Inheritance_A8 = {}));
//# sourceMappingURL=honeyBee.js.map