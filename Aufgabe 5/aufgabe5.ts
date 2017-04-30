//Aufgabe: Aufgabe 4
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 06.04.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst und in zusammenarbeit mit Leonie Storz geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
namespace Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    
    let canvas: HTMLCanvasElement;
    
    let ImageData: ImageData;         
    
    let x: number[] = [];
    let y: number[] = [];
    let n: number = 10;
    
    let elem = document.getElementsByTagName("canvas")[0]
    
    elem.addEventListener("click", addBee);
    elem.addEventListener("touchstart", addBee);

    function init(_event: Event): void {
        
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);
        
        //Himmel

        crc2.fillStyle = "#87CEEB";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        
        drawMountain(420, 480, "#808080");

        //Wiese
        
        crc2.fillStyle = "#00FF7F";
        crc2.fillRect(0, 420, 1270, 420);
        
        
        
        drawSun(970, 100);
        drawMountain(250, 420, "#a9a9a9");
        drawCloud(180, 240);
        drawMountain(100, 420, "#696969");
        drawCloud(850, 100);
        
        
        for (let i: number = 0; i < Math.round(Math.random() * 3); i++) {
        let x: number;
        let y: number;
            
        
        x = Math.round(Math.random() * 1000 + 30);
        y = Math.round(Math.random() * 300);
            
        drawCloud(x, y);
            

 }
        
        
        for (let i: number = 0; i < Math.round(Math.random() * 3); i++) {
        let c: string;
        let x: number;
        let y: number;
            
        c = "#006400";
        x = Math.round(Math.random() * 850 + 10);
        y = Math.round(Math.random() * 250 + 470);
            
        drawBush(x, y, c);
 }
    

      
        for (let i: number = 0; i < Math.round(Math.random() * 300); i++) {
        let c: string;
        let x: number;
        let y: number;
            
        c = "hsl(" + Math.round(Math.random() * 360) + ","  + "100%," +  "50%)";        
        x = Math.round(Math.random() * 1250);
        y = Math.round(Math.random() * 340 + 420);
            
        if (i % 2 == 0) { 
        
        drawFlower(x, y, c); }
            
        else
            
        drawTulip(x, y, c);
 }
        
        drawTree(1100, 580) 
        
        drawBienenkorb(910, 515);  
        
 ImageData = crc2.getImageData(0, 0, 1270, 720);
       
//  Biene
   
        

    
        

        for (let i: number = 0; i < n; i++) {
            x[i] = 900;
            y[i] = 550;
        }

        window.setTimeout(animate, 20);
    
   
}    
    
    
    
    
        function animate(): void {
        console.log("Animate called");

        crc2.putImageData(ImageData, 0, 0); 

        for (let i: number = 0; i < n; i++) {
            x[i] += Math.random() * 4 - 3;
            y[i] += Math.random() * 4 - 2;
            
            if (x[i] < 0) {
                x[i] = canvas.width; }
            
            if (y[i] < 0) {
                y[i] = canvas.height; }
            
            if (x[i] > canvas.width) {
                x[i] = 0; }
            
            if (y[i] > canvas.height) {
                y[i] = 0; }
            
            drawBee(x[i], y[i]);
        }
            
            

        window.setTimeout(animate, 20);
}
    
    function addBee (){
        x.push(900);
        y.push(550);
        n++;
    }
    
    function drawBienenkorb  (_x: number, _y: number): void {
         
        crc2.beginPath();
        crc2.fillStyle = "#A0522D";
         
        crc2.arc(_x,_y, 26, 0, 2 * Math.PI);
        crc2.moveTo(_x,_y - 10)
        crc2.arc(_x + 23,_y, 10, 0, 2 * Math.PI);
        crc2.moveTo(_x,_y)
        crc2.arc(_x + 23,_y + 20, 10, 0, 2 * Math.PI);
        crc2.moveTo(_x,_y  + 4)
        crc2.arc(_x + 23,_y + 41, 10, 0, 2 * Math.PI);
        crc2.arc(_x - 25,_y + 41, 10, 0, 2 * Math.PI);
        crc2.arc(_x - 25,_y + 20, 10, 0, 2 * Math.PI);
        crc2.arc(_x - 25,_y, 10, 0, 2 * Math.PI);
        crc2.fillRect(_x - 26, _y + 6, 51, 45);
        
        crc2.fill();
         
        crc2.beginPath();
        crc2.fillStyle = "#000000";
         
        crc2.arc(_x - 5,_y + 33, 10, 0, 2 * Math.PI); 
         
        crc2.closePath();
        crc2.fill();
    }

    
     function drawBee(_x: number, _y: number): void {
        
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.fillStyle = "#000000";
        crc2.arc(_x,_y, 7, 0, 2 * Math.PI);
        crc2.arc(_x - 8 ,_y - 3, 4, 0, 2 * Math.PI);
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 13, _y + 3);
        crc2.stroke();
        crc2.fill();
        
        crc2.beginPath();
        crc2.fillStyle = " #FFFF00";
        crc2.rect(_x - 6, _y - 4, 2.5, 9);
        crc2.rect(_x - 2, _y - 6, 2.5, 13);
        crc2.rect(_x + 2, _y - 4, 2.5, 10);
        
             
        crc2.stroke;
        crc2.fill();
        
        
        crc2.beginPath();
        crc2.fillStyle = "#aFEEEE";
        crc2.arc(_x - 4, _y - 15, 10, 0, 1.5);
        crc2.moveTo(_x,_y);
        crc2.arc(_x - 1, _y - 10, 10, 0, 1.5);


        crc2.closePath();
        crc2.fill();
        
}

    function drawMountain(_x: number, _y: number, _fillColor: string): void {
       
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.moveTo(_x - 200, _y);
        crc2.lineTo(_x, _y - 300);
        crc2.lineTo(_x + 200, _y);
        crc2.closePath();
        crc2.fill();
        
        crc2.beginPath();
        crc2.moveTo(_x, _y - 300);
        crc2.lineTo(_x + 45, _y - 233);
        crc2.lineTo(_x + 25, _y - 215);
        crc2.lineTo(_x + 3, _y - 233);
        crc2.lineTo(_x - 12, _y - 215);
        crc2.lineTo(_x - 28, _y - 233);
        crc2.lineTo(_x - 40, _y - 215);
        crc2.lineTo(_x - 46, _y - 233);
        crc2.closePath();
        crc2.fillStyle = "#FFFaFa";
        crc2.fill();
    }
    
    function drawBush(_x: number, _y: number, _fillColor: string): void {
       
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _fillColor;
        crc2.moveTo(_x + 250, _y );
        crc2.lineTo(_x , _y);
        crc2.arc(_x + 15, _y - 20, 45, Math.PI * 4.3 / 5, Math.PI *  2 / 50); 
        crc2.arc(_x + 35, _y - 60, 45, Math.PI * 4 / 5, Math.PI *  2 / 50);
        crc2.arc(_x + 80, _y - 90, 45, Math.PI * 4 / 5, Math.PI *  2 / 50);
        crc2.arc(_x + 130, _y - 95, 45, Math.PI * 4 / 5, Math.PI *  2 / 50);
        crc2.arc(_x + 170, _y - 70, 45, Math.PI * 4 / 5, Math.PI *  2 / 50);
        crc2.arc(_x + 215, _y - 30, 45, Math.PI * 4 / 5, Math.PI *  10 / 50);
        crc2.closePath();
        crc2.fill();

        
        }
    
    function drawTree(_x: number, _y: number): void {
        
        //Stamm
        
        crc2.fillStyle = "#8B4513";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 200);
        crc2.lineTo(_x + 50, _y - 200);
        crc2.lineTo(_x + 50, _y);
        crc2.closePath();
        crc2.fill();
        
        //Blätter
       
        crc2.beginPath();
        crc2.fillStyle = "#006400";
        crc2.strokeStyle = "#006400";
        crc2.moveTo(_x - 55, _y - 270);
        crc2.arc(_x - 65, _y - 280, 45, Math.PI * 4.3 / 5, Math.PI *  2 / 50); 
        crc2.arc(_x - 45, _y - 320, 45, Math.PI * 4 / 5, Math.PI *  2 / 50);
        crc2.arc(_x - 5, _y - 350, 45, Math.PI * 4 / 5, Math.PI *  2 / 50);
        crc2.arc(_x + 50, _y - 355, 45, Math.PI * 4 / 5, Math.PI *  2 / 50);
        crc2.arc(_x + 90, _y - 330, 45, Math.PI * 4 / 5, Math.PI *  2 / 50);
        crc2.arc(_x + 125, _y - 290, 45, Math.PI * 4 / 5, Math.PI *  10 / 50);
        crc2.arc(_x + 120, _y - 250, 45, Math.PI * 4 / 7, Math.PI *  10 / 20);
        crc2.arc(_x + 82, _y - 230, 45, Math.PI * 8 / 5, Math.PI *  18 / 20);
        crc2.arc(_x + 30, _y - 225, 50, Math.PI * 8 / 5, Math.PI *  18 / 20);
        crc2.arc(_x - 15, _y - 225, 43, Math.PI * 8 / 5, Math.PI *  18 / 20);
        crc2.arc(_x - 58, _y - 245, 50, Math.PI * 8 / 5, Math.PI *  24 / 20);
        crc2.closePath();
        crc2.fill();

        
        }
    
    function drawFlower(_x: number, _y: number, _fillColor: string): void {
        
        
        
            //Stiel
        
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 8, _y - 70); 
            crc2.lineTo(_x + 13, _y - 70); 
            crc2.lineTo(_x + 6, _y); 
            crc2.closePath();
            crc2.fillStyle = "#008000";
            crc2.fill();
        
        //Blatt rechts
        
            crc2.beginPath();
            crc2.moveTo(_x + 10, _y - 70); 
            
            crc2.lineTo(_x + 10, _y - 70); 
            crc2.arc(_x + 29, _y - 70, 12, Math.PI * 8 / 6, Math.PI *  6 / 10); 
            crc2.closePath();
            crc2.fillStyle = _fillColor;
//          crc2.lineWidth = 1;
            crc2.lineJoin = "round";
            
            crc2.fill();
        
        
        //Blatt oben
        
            crc2.beginPath();
            crc2.moveTo(_x + 15, _y - 70); 
            
            crc2.lineTo(_x + 3, _y - 70); 
            crc2.arc(_x + 11, _y - 88, 12, Math.PI * 5 / 6, Math.PI *  2 / 10); 
            crc2.closePath();
            crc2.fillStyle = _fillColor;
//          crc2.lineWidth = 1;
            crc2.lineJoin = "round";
            
            crc2.fill();
        
        
        //Blatt links
        
            crc2.beginPath();
            crc2.moveTo(_x + 5, _y - 75);
            
            crc2.lineTo(_x + 15, _y - 70);
            crc2.arc(_x - 8, _y - 70, 12, Math.PI * 4 / 10, Math.PI *  10 / 6); 
            crc2.closePath();
            crc2.fillStyle = _fillColor;
//          crc2.lineWidth = 1;
            crc2.lineJoin = "round";
        
            crc2.fill();
        
        
        //Blatt unten
        
            crc2.beginPath();
            crc2.moveTo(_x + 5, _y - 70);
        
            crc2.lineTo(_x + 15, _y - 70);
            crc2.arc(_x + 10, _y - 55, 12, Math.PI * 19 / 10, Math.PI *  7 / 6); 
            crc2.closePath();
            crc2.fillStyle = _fillColor;
//          crc2.lineWidth = 1;
            crc2.lineJoin = "round";
            
            crc2.fill();
            
            
        
        
        //Mitte
        
            crc2.beginPath();
            crc2.moveTo(_x + 15, _y - 70);
            crc2.arc(_x + 10, _y - 70, 8, Math.PI * 6 / 6, Math.PI *  1199 / 1200);
            crc2.fillStyle = "#FFD700";
//          crc2.lineWidth = 1;
            crc2.lineJoin = "round";
            
            crc2.fill();
        

        
    
    
    }
    
    
    
            function drawTulip(_x: number, _y: number, _color: string): void {
                
                //Stiel
                
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 5, _y - 70); 
            crc2.lineTo(_x + 10, _y - 70); 
            crc2.lineTo(_x + 6, _y); 
            crc2.closePath();
            crc2.fillStyle = "#008000";
            crc2.fill();
                
                //Tulip
                
            crc2.beginPath();
            crc2.fillStyle = _color;
            crc2.moveTo(_x - 7, _y - 68);
            crc2.lineTo(_x - 5, _y - 90);
            crc2.lineTo(_x + 2  , _y - 76);
            crc2.lineTo(_x + 8.5, _y - 90);
            crc2.lineTo(_x + 15, _y - 76);
            crc2.lineTo(_x + 21.5, _y - 90);
            crc2.lineTo(_x + 23, _y - 69);
            crc2.arc(_x + 8, _y - 70, 15, 0, 1 * Math.PI);
            crc2.fill();
            crc2.closePath();
        }
    
    
    function drawCloud(_x: number, _y: number): void {
       
            crc2.beginPath();
            crc2.fillStyle = "#F5F5F5";
            crc2.arc(_x + 125, _y + 22, 27, Math.PI * 6 / 6, Math.PI *  1199 / 1200);
            crc2.arc(_x + 90, _y + 21, 42, Math.PI * 6 / 6, Math.PI *  1199 / 1200);
            crc2.arc(_x + 50, _y + 28, 33, Math.PI * 6 / 6, Math.PI *  1199 / 1200);
            crc2.arc(_x + 15, _y + 25, 22, Math.PI * 6 / 6, Math.PI *  1199 / 1200);
            crc2.moveTo(_x + 20, _y + 17);
            crc2.lineTo(_x + 120, _y + 17);
            crc2.lineTo(_x + 120, _y + 35);
            crc2.lineTo(_x + 20, _y + 35);
            crc2.closePath();
            crc2.closePath();
            crc2.fill();
        }
    
       function drawSun(_x: number, _y: number): void {
       
            crc2.beginPath();
            crc2.fillStyle = "#FFD700";
            crc2.arc(_x, _y, 70, Math.PI * 6 / 6, Math.PI *  1199 / 1200);
            crc2.fill();
            crc2.closePath();
        } 
        
    
    
    
    
};