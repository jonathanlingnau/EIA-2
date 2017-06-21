//Aufgabe: Aufgabe 8
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Inheritance_A8;
(function (Inheritance_A8) {
    class honeyBee extends Inheritance_A8.superClassBee {
        constructor(_x, _y, _color, _pollen) {
            super(_x, _y, _color, _pollen);
            this.speed = 0.01;
            this.getFlowerPosition();
            console.log("Create Honeybee");
        }
        getFlowerPosition() {
            let i = Math.round(Math.random() * (Inheritance_A8.flowers.length - 1));
            this.xTarget = Inheritance_A8.flowers[i].x;
            this.yTarget = Inheritance_A8.flowers[i].y;
        }
        move() {
            let xDiff = this.xTarget - this.x + 15;
            let yDiff = this.yTarget - this.y - 70;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.getFlowerPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
    }
    Inheritance_A8.honeyBee = honeyBee;
})(Inheritance_A8 || (Inheritance_A8 = {}));
//# sourceMappingURL=honeyBee.js.map