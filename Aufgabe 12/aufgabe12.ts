//Aufgabe: Aufgabe 12
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.07.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.


namespace Inheritance_A12 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    let ImageData: ImageData;

    export let cars: SuperClassCars[] = [];
    export let n: number = 1;

    let counter: number = 1;

    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        canvas.addEventListener("click", addCars);
        canvas.addEventListener("touchstart", addCars);

        drawSky("#87CEEB");



        //Gebäude

        drawScraper1(300, 150, "#E0FFFF");
        drawScraper1(1000, 300, "#E0FFFF");
        drawScraper1(500, 180, "#E0FFFF");
        drawScraper2(700, 150, "#E0FFFF");
        drawScraper2(80, 150, "#E0FFFF");

        drawStreet();

        canvas.addEventListener("click", change);
        canvas.addEventListener("touchstart", change);

        //Sonne

        drawSun(1100, 100, "#FFD700");

        ImageData = crc2.getImageData(0, 0, 1270, 720);

        for (let i: number = 0; i < n; i++) {

            let color: string;
            let window: string;

            color = "hsl(" + Math.round(Math.random() * 360) + "," + "100%," + "50%)";

            window = "#E0FFFF";

            if (counter % 2 == 0)
                window = "#FFFF00";

            let c: Cars = new Cars(1271, 580, color, window);
            cars[i] = c;
        }


        window.setTimeout(animate, 20);


    }




    function animate(): void {
        console.log("Animate called");

        crc2.putImageData(ImageData, 0, 0);

        for (let i: number = 0; i < n; i++) {
            let c: SuperClassCars = cars[i];
            c.update();
        }
        //        for (let i: number = 0; i < flowers.length; i++) {
        //        let f: Flower = flowers[i];
        //        f.draw     }



        window.setTimeout(animate, 20);
    }

    function addCars(_event: Event): void {

        for (let i: number = 0; i < n; i++) {

            let color: string;
            let window: string;

            color = "hsl(" + Math.round(Math.random() * 360) + "," + "100%," + "50%)";

            window = "#E0FFFF";

            if (counter % 2 == 0)
                window = "#FFFF00";


            if (n % 2 == 0) {
                let b: Cars = new Cars(1271, 580, color, window);
                cars[n] = b;
                cars.push(b);
            }
            else {
                let h: Cars = new Cars(1271, 700, color, window);
                cars[n] = h;
                cars.push(h);
            }
        }

        n++;
    }

    function change(): void {
        counter++;
        console.log(counter);
        for (let i: number = 0; i < counter; i++) {
            if (counter % 2 == 0) {
                drawSky("#191970");
                drawSun(1100, 100, "#FFFFe0");
                //Gebäude

                drawScraper1(300, 150, "#FFFF00");
                drawScraper1(1000, 300, "#FFFF00");
                drawScraper1(500, 180, "#FFFF00");
                drawScraper2(700, 150, "#FFFF00");
                drawScraper2(80, 150, "#FFFF00");

                drawStreet();

                for (let i: number = 0; i < n; i++) {
                    let c: SuperClassCars = cars[i];
                    c.window = "#FFFF00";
                }

                ImageData = crc2.getImageData(0, 0, 1270, 720);
                window.setTimeout(animate, 20);
            }
            else {
                drawSky("#87CEEB");
                drawSun(1100, 100, "#FFD700");
                //Gebäude

                drawScraper1(300, 150, "#E0FFFF");
                drawScraper1(1000, 300, "#E0FFFF");
                drawScraper1(500, 180, "#E0FFFF");
                drawScraper2(700, 150, "#E0FFFF");
                drawScraper2(80, 150, "#E0FFFF");

                drawStreet();
                for (let i: number = 0; i < n; i++) {
                    let c: SuperClassCars = cars[i];
                    c.window = "#E0FFFF";
                }
                ImageData = crc2.getImageData(0, 0, 1270, 720);
                window.setTimeout(animate, 20);
            }
        }

    };

    function drawSky(_color: string): void {
        //Himmel

        crc2.fillStyle = _color;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    };

    function drawCar(_x: number, _y: number, _color: string, _window: string): void {

        //Chassis

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 50);
        crc2.lineTo(_x + 120, _y - 60);
        crc2.lineTo(_x + 160, _y - 120);
        crc2.lineTo(_x + 300, _y - 120);
        crc2.lineTo(_x + 330, _y - 60);
        crc2.lineTo(_x + 410, _y - 60);
        crc2.lineTo(_x + 410, _y);
        crc2.lineTo(_x + 360, _y);
        crc2.lineTo(_x + 100, _y);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();

        //Reifen

        crc2.beginPath();
        crc2.arc(_x + 70, _y, 30, 0, 2 * Math.PI);
        crc2.arc(_x + 340, _y, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        //Fenster

        crc2.beginPath();
        crc2.moveTo(_x + 130, _y - 65);
        crc2.lineTo(_x + 164, _y - 115);
        crc2.lineTo(_x + 220, _y - 115);
        crc2.lineTo(_x + 220, _y - 65);
        crc2.closePath();
        crc2.fillStyle = _window;
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x + 230, _y - 65);
        crc2.lineTo(_x + 230, _y - 115);
        crc2.lineTo(_x + 295, _y - 115);
        crc2.lineTo(_x + 310, _y - 65);
        crc2.closePath();
        crc2.fillStyle = _window;
        crc2.fill();

    };

    function drawSun(_x: number, _y: number, _color: string): void {

        crc2.beginPath();
        crc2.fillStyle = _color;
        crc2.arc(_x, _y, 70, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
    };

    function drawStreet(): void {

        //Straße

        crc2.fillStyle = "#DCdCdC";
        crc2.fillRect(0, 500, canvas.width, 320);

        crc2.fillStyle = "#696969";
        crc2.fillRect(0, 500, canvas.width, 20);

        crc2.fillStyle = "#FFFFFF";
        crc2.fillRect(0, 620, 100, 15);

        crc2.fillStyle = "#FFFFFF";
        crc2.fillRect(150, 620, 100, 15);

        crc2.fillStyle = "#FFFFFF";
        crc2.fillRect(300, 620, 100, 15);

        crc2.fillStyle = "#FFFFFF";
        crc2.fillRect(450, 620, 100, 15);

        crc2.fillStyle = "#FFFFFF";
        crc2.fillRect(600, 620, 100, 15);

        crc2.fillStyle = "#FFFFFF";
        crc2.fillRect(750, 620, 100, 15);

        crc2.fillStyle = "#FFFFFF";
        crc2.fillRect(900, 620, 100, 15);

        crc2.fillStyle = "#FFFFFF";
        crc2.fillRect(1050, 620, 100, 15);

        crc2.fillStyle = "#FFFFFF";
        crc2.fillRect(1200, 620, 100, 15);
    };


    function drawScraper1(_x: number, _y: number, _color: string): void {

        crc2.fillStyle = "grey";
        crc2.fillRect(_x, _y, 185, 400);

        //Fenster

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 10, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 30, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 50, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 70, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 90, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 110, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 130, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 150, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 170, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 170, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 190, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 210, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 230, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 250, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 270, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 290, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 310, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 330, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 155, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 170, _y + 350, 10, 10);

    }




    function drawScraper2(_x: number, _y: number, _color: string): void {

        crc2.beginPath();
        crc2.fillStyle = "grey";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 400);
        crc2.lineTo(_x + 155, _y + 400);
        crc2.lineTo(_x + 155, _y - 80);
        crc2.closePath();
        crc2.fill();
        crc2.closePath();

        //Fenster

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 10, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 10, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 30, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 30, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 50, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 50, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 70, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 70, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 90, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 90, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 110, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 110, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 130, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 130, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 150, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 150, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 170, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 170, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 170, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 190, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 190, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 210, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 210, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 230, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 230, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 250, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 250, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 270, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 270, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 290, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 290, 10, 10);

        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 310, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 310, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 330, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 330, 10, 10);


        crc2.fillStyle = _color;
        crc2.fillRect(_x + 5, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 20, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 35, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 50, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 65, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 80, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 95, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 110, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 125, _y + 350, 10, 10);
        crc2.fillStyle = _color;
        crc2.fillRect(_x + 140, _y + 350, 10, 10);


    }




};