//Aufgabe: Aufgabe 8
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Inheritance_A8;
(function (Inheritance_A8) {
    class Bee extends Inheritance_A8.superClassBee {
        constructor(_x, _y, _color, _pollen) {
            super(_x, _y, _color, _pollen);
            console.log("Create Bee");
        }
    }
    Inheritance_A8.Bee = Bee;
})(Inheritance_A8 || (Inheritance_A8 = {}));
//# sourceMappingURL=Bee.js.map