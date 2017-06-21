//Aufgabe: Aufgabe 7
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 14.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
var Classes_A7;
(function (Classes_A7) {
    class Bee {
        constructor(x, y, _color, _pollen) {
            //this.setRandomStyle();
            this.setPosition();
            this.x = x;
            this.y = y;
            this.color = _color;
            this.pollen = _pollen;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            Classes_A7.crc2.beginPath();
            Classes_A7.crc2.strokeStyle = "#000000";
            Classes_A7.crc2.fillStyle = "#000000";
            Classes_A7.crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            Classes_A7.crc2.arc(this.x - 8, this.y - 3, 4, 0, 2 * Math.PI);
            Classes_A7.crc2.moveTo(this.x, this.y);
            Classes_A7.crc2.lineTo(this.x + 13, this.y + 3);
            Classes_A7.crc2.stroke();
            Classes_A7.crc2.fill();
            Classes_A7.crc2.beginPath();
            Classes_A7.crc2.fillStyle = this.color;
            Classes_A7.crc2.rect(this.x - 6, this.y - 4, 2.5, 9);
            Classes_A7.crc2.rect(this.x - 2, this.y - 6, 2.5, 13);
            Classes_A7.crc2.rect(this.x + 2, this.y - 4, 2.5, 10);
            //        crc2.stroke;
            Classes_A7.crc2.fill();
            Classes_A7.crc2.beginPath();
            Classes_A7.crc2.fillStyle = "#aFEEEE";
            Classes_A7.crc2.arc(this.x - 4, this.y - 15, 10, 0, 1.5);
            Classes_A7.crc2.moveTo(this.x, this.y);
            Classes_A7.crc2.arc(this.x - 1, this.y - 10, 10, 0, 1.5);
            Classes_A7.crc2.closePath();
            Classes_A7.crc2.fill();
            //Pollen
            Classes_A7.crc2.fillStyle = this.pollen;
            Classes_A7.crc2.fillRect(this.x - 3, this.y + 5, 5, 5);
        }
        move() {
            this.x += Math.random() * 4 - 3;
            this.y += Math.random() * 4 - 2;
            if (this.x < 0) {
                this.x = Classes_A7.crc2.canvas.width;
            }
            if (this.y < 0) {
                this.y = Classes_A7.crc2.canvas.height;
            }
            if (this.x > Classes_A7.crc2.canvas.width) {
                this.x = 0;
            }
            if (this.y > Classes_A7.crc2.canvas.height) {
                this.y = 0;
            }
        }
        setPosition() {
            this.x = 900;
            this.y = 550;
        }
    }
    Classes_A7.Bee = Bee;
})(Classes_A7 || (Classes_A7 = {}));
//# sourceMappingURL=Bee.js.map