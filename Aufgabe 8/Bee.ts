//Aufgabe: Aufgabe 8
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace Inheritance_A8 {

    export class Bee extends superClassBee {

        constructor(_x: number, _y: number, _color: string, _pollen: string) {

            super(_x, _y, _color, _pollen);
            console.log("Create Bee");
        }
    }
}