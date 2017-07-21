//Aufgabe: Aufgabe 12
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.07.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Inheritance_A12;
(function (Inheritance_A12) {
    class SuperClassCars {
        constructor(_x, _y, _color, _window) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.window = _window;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            //Chassis
            Inheritance_A12.crc2.beginPath();
            Inheritance_A12.crc2.moveTo(this.x, this.y);
            Inheritance_A12.crc2.lineTo(this.x, this.y - 50);
            Inheritance_A12.crc2.lineTo(this.x + 120, this.y - 60);
            Inheritance_A12.crc2.lineTo(this.x + 160, this.y - 120);
            Inheritance_A12.crc2.lineTo(this.x + 300, this.y - 120);
            Inheritance_A12.crc2.lineTo(this.x + 330, this.y - 60);
            Inheritance_A12.crc2.lineTo(this.x + 410, this.y - 60);
            Inheritance_A12.crc2.lineTo(this.x + 410, this.y);
            Inheritance_A12.crc2.lineTo(this.x + 360, this.y);
            Inheritance_A12.crc2.lineTo(this.x + 100, this.y);
            Inheritance_A12.crc2.closePath();
            Inheritance_A12.crc2.fillStyle = this.color;
            Inheritance_A12.crc2.fill();
            //Reifen
            Inheritance_A12.crc2.beginPath();
            Inheritance_A12.crc2.arc(this.x + 70, this.y, 30, 0, 2 * Math.PI);
            Inheritance_A12.crc2.arc(this.x + 340, this.y, 30, 0, 2 * Math.PI);
            Inheritance_A12.crc2.closePath();
            Inheritance_A12.crc2.fillStyle = "black";
            Inheritance_A12.crc2.fill();
            //Fenster
            Inheritance_A12.crc2.beginPath();
            Inheritance_A12.crc2.moveTo(this.x + 130, this.y - 65);
            Inheritance_A12.crc2.lineTo(this.x + 164, this.y - 115);
            Inheritance_A12.crc2.lineTo(this.x + 220, this.y - 115);
            Inheritance_A12.crc2.lineTo(this.x + 220, this.y - 65);
            Inheritance_A12.crc2.closePath();
            Inheritance_A12.crc2.fillStyle = this.window;
            Inheritance_A12.crc2.fill();
            Inheritance_A12.crc2.beginPath();
            Inheritance_A12.crc2.moveTo(this.x + 230, this.y - 65);
            Inheritance_A12.crc2.lineTo(this.x + 230, this.y - 115);
            Inheritance_A12.crc2.lineTo(this.x + 295, this.y - 115);
            Inheritance_A12.crc2.lineTo(this.x + 310, this.y - 65);
            Inheritance_A12.crc2.closePath();
            Inheritance_A12.crc2.fillStyle = this.window;
            Inheritance_A12.crc2.fill();
        }
        ;
        move() {
            this.x -= Math.random() * 2;
            if (this.x < -415) {
                this.x = Inheritance_A12.crc2.canvas.width;
            }
        }
    }
    Inheritance_A12.SuperClassCars = SuperClassCars;
})(Inheritance_A12 || (Inheritance_A12 = {}));
//# sourceMappingURL=SuperClassCars.js.map