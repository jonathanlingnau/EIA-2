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
    var Bee = (function (_super) {
        __extends(Bee, _super);
        function Bee(_x, _y, _color, _pollen) {
            _super.call(this, _x, _y, _color, _pollen);
            console.log("Create Bee");
        }
        return Bee;
    }(Inheritance_A8.superClassBee));
    Inheritance_A8.Bee = Bee;
})(Inheritance_A8 || (Inheritance_A8 = {}));
//# sourceMappingURL=Bee.js.map