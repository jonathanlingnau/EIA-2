//Aufgabe: Aufgabe 12
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.07.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace Inheritance_A12 {
    export class SuperClassCars {

        x: number;
        y: number;
        color: string;
        window: string;

        constructor(_x: number, _y: number, _color: string, _window: string) {

            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.window = _window;
        }

        update(): void {
            this.move();
            this.draw();
        }

        draw(): void {

                    //Chassis

        crc2.beginPath();
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x, this.y - 50);
        crc2.lineTo(this.x + 120, this.y - 60);
        crc2.lineTo(this.x + 160, this.y - 120);
        crc2.lineTo(this.x + 300, this.y - 120);
        crc2.lineTo(this.x + 330, this.y - 60);
        crc2.lineTo(this.x + 410, this.y - 60);
        crc2.lineTo(this.x + 410, this.y);
        crc2.lineTo(this.x + 360, this.y);
        crc2.lineTo(this.x + 100, this.y);
        crc2.closePath();
        crc2.fillStyle = this.color;
        crc2.fill();

        //Reifen

        crc2.beginPath();
        crc2.arc(this.x + 70, this.y, 30, 0, 2 * Math.PI);
        crc2.arc(this.x + 340, this.y, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        //Fenster

        crc2.beginPath();
        crc2.moveTo(this.x + 130, this.y - 65);
        crc2.lineTo(this.x + 164, this.y - 115);
        crc2.lineTo(this.x + 220, this.y - 115);
        crc2.lineTo(this.x + 220, this.y - 65);
        crc2.closePath();
        crc2.fillStyle = this.window;
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(this.x + 230, this.y - 65);
        crc2.lineTo(this.x + 230, this.y - 115);
        crc2.lineTo(this.x + 295, this.y - 115);
        crc2.lineTo(this.x + 310, this.y - 65);
        crc2.closePath();
        crc2.fillStyle = this.window;
        crc2.fill();

    };
        
        

        move(): void {
            this.x -= Math.random() * 2;
            
            if (this.x < -415) {
                this.x = crc2.canvas.width;
            }

        }


    }
}