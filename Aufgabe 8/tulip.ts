//Aufgabe: Aufgabe 8
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace Inheritance_A8 {
    export class tulip extends superClassFlower {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
            //            this.setRandomFlower();
            this.setRandomColor();
            _color = this.color;
            this.setRandomPosition();
            _x = this.x;
            _y = this.y;
        }


        drawTulip(): void {

            //Stiel
              crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 5, this.y - 70);
            crc2.lineTo(this.x + 10, this.y - 70);
            crc2.lineTo(this.x + 6, this.y);
            crc2.closePath();
            crc2.fillStyle = "#008000";
            crc2.fill();

            //Tulip
              crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.moveTo(this.x - 7, this.y - 68);
            crc2.lineTo(this.x - 5, this.y - 90);
            crc2.lineTo(this.x + 2, this.y - 76);
            crc2.lineTo(this.x + 8.5, this.y - 90);
            crc2.lineTo(this.x + 15, this.y - 76);
            crc2.lineTo(this.x + 21.5, this.y - 90);
            crc2.lineTo(this.x + 23, this.y - 69);
            crc2.arc(this.x + 8, this.y - 70, 15, 0, 1 * Math.PI);
            crc2.fill();
            crc2.closePath();
        }

    }
}