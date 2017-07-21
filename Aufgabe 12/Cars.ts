//Aufgabe: Aufgabe 12
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.07.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace Inheritance_A12 {

    export class Cars extends SuperClassCars {

        constructor(_x: number, _y: number, _color: string, _window: string) {

            super(_x, _y, _color, _window);
            console.log("Create Car");
        }
    }
}