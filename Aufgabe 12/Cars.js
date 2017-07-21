//Aufgabe: Aufgabe 12
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.07.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Inheritance_A12;
(function (Inheritance_A12) {
    class Cars extends Inheritance_A12.SuperClassCars {
        constructor(_x, _y, _color, _window) {
            super(_x, _y, _color, _window);
            console.log("Create Car");
        }
    }
    Inheritance_A12.Cars = Cars;
})(Inheritance_A12 || (Inheritance_A12 = {}));
//# sourceMappingURL=Cars.js.map