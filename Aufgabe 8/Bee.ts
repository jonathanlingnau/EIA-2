//Aufgabe: Aufgabe 7
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 14.05.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.

namespace Inheritance_A8 {
    
    export class Bee {
        x: number;
        y: number;
        color: string;
        pollen: string;

        constructor(x: number, y: number, _color: string, _pollen: string) {
            //this.setRandomStyle();
            this.setPosition();
            this.x = x;
            this.y = y;
            this.color = _color;
            this.pollen = _pollen;
}
    
   update(): void {
            this.move();
            this.draw();
        }

        draw(): void {
        
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.fillStyle = "#000000";
        crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI);
        crc2.arc(this.x - 8 , this.y - 3, 4, 0, 2 * Math.PI);
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x + 13, this.y + 3);
        crc2.stroke();
        crc2.fill();
        
        crc2.beginPath();
        crc2.fillStyle = this.color;
        crc2.rect(this.x - 6, this.y - 4, 2.5, 9);
        crc2.rect(this.x - 2, this.y - 6, 2.5, 13);
        crc2.rect(this.x + 2, this.y - 4, 2.5, 10);
        
             
//        crc2.stroke;
        crc2.fill();
        
        
        crc2.beginPath();
        crc2.fillStyle = "#aFEEEE";
        crc2.arc(this.x - 4, this.y - 15, 10, 0, 1.5);
        crc2.moveTo(this.x, this.y);
        crc2.arc(this.x - 1, this.y - 10, 10, 0, 1.5);


        crc2.closePath();
        crc2.fill();
         
        //Pollen
        crc2.fillStyle = this.pollen;
        crc2.fillRect(this.x - 3, this.y + 5, 5, 5);
        
        }

       move(): void {
            this.x += Math.random() * 4 - 3;
            this.y += Math.random() * 4 - 2;

            
            if (this.x < 0) {
                this.x = crc2.canvas.width; }
            
            if (this.y < 0) {
                this.y = crc2.canvas.height; }
            
            if (this.x > crc2.canvas.width) {
                this.x = 0; }
            
            if (this.y > crc2.canvas.height) {
                this.y = 0; }
        }

        setPosition(): void {
            this.x = 900;
            this.y = 550;
        }


    }
}