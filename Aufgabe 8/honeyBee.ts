//Aufgabe: Aufgabe 8
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace Inheritance_A8 {

    export class honeyBee extends superClassBee {

        xTarget: number;
        yTarget: number;
        speed: number;

        constructor(_x: number, _y: number, _color: string, _pollen: string) {

            super(_x, _y, _color, _pollen);
            this.speed = 0.01;
            this.getFlowerPosition();
            console.log("Create Honeybee");
        }

        getFlowerPosition(): void {

            let i: number = Math.round(Math.random() * (flowers.length - 1));
            this.xTarget = flowers[i].x;
            this.yTarget = flowers[i].y;

        }

        move(): void {
            let xDiff: number = this.xTarget - this.x + 15;
            let yDiff: number = this.yTarget - this.y - 70;
            
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.getFlowerPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
    }
}