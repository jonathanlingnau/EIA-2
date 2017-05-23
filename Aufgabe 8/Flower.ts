//Aufgabe: Aufgabe 8
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace Inheritance_A8 {
    export class Flower extends superClassFlower {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
            //this.setRandomFlower();
            this.setRandomColor();
            _color = this.color;
            this.setRandomPosition();
            _x = this.x;
            _y = this.y;
        }

        drawFlower(): void {
            //Stiel

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 8, this.y - 70);
            crc2.lineTo(this.x + 13, this.y - 70);
            crc2.lineTo(this.x + 6, this.y);
            crc2.closePath();
            crc2.fillStyle = "#008000";
            crc2.fill();

            //Blatt rech    
            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y - 70);

            crc2.lineTo(this.x + 10, this.y - 70);
            crc2.arc(this.x + 29, this.y - 70, 12, Math.PI * 8 / 6, Math.PI * 6 / 10);
            crc2.closePath();
            crc2.fillStyle = this.color;
            //          crc2.lineWidth = 1;
            crc2.lineJoin = "round";

            crc2.fill();


            //Blatt oben    
            crc2.beginPath();
            crc2.moveTo(this.x + 15, this.y - 70);

            crc2.lineTo(this.x + 3, this.y - 70);
            crc2.arc(this.x + 11, this.y - 88, 12, Math.PI * 5 / 6, Math.PI * 2 / 10);
            crc2.closePath();
            crc2.fillStyle = this.color;
            //          crc2.lineWidth = 1;
            crc2.lineJoin = "round";

            crc2.fill();


            //Blatt links    
            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y - 75);

            crc2.lineTo(this.x + 15, this.y - 70);
            crc2.arc(this.x - 8, this.y - 70, 12, Math.PI * 4 / 10, Math.PI * 10 / 6);
            crc2.closePath();
            crc2.fillStyle = this.color;
            //          crc2.lineWidth = 1;
            crc2.lineJoin = "round";

            crc2.fill();


            //Blatt unten    
            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y - 70);

            crc2.lineTo(this.x + 15, this.y - 70);
            crc2.arc(this.x + 10, this.y - 55, 12, Math.PI * 19 / 10, Math.PI * 7 / 6);
            crc2.closePath();
            crc2.fillStyle = this.color;
            //          crc2.lineWidth = 1;
            crc2.lineJoin = "round";

            crc2.fill();




            //Mitte    
            crc2.beginPath();
            crc2.moveTo(this.x + 15, this.y - 70);
            crc2.arc(this.x + 10, this.y - 70, 8, Math.PI * 6 / 6, Math.PI * 1199 / 1200);
            crc2.fillStyle = "#FFD700";
            //          crc2.lineWidth = 1;
            crc2.lineJoin = "round";

            crc2.fill();
        }


        
    }
}