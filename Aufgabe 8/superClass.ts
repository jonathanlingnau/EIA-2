namespace Inheritance_A8 {
    export class MovingShape {
        x: number;
        y: number;
        color: string;

        constructor(_x: number, _y: number, _color: string) {
            this.setRandomColor();
            _color = this.color;
            this.setRandomPosition();
            _x = this.x;
            _y = this.y;
        }

        setRandomPosition(): void {
            this.x = Math.round(Math.random() * 1250);
            this.y = Math.round(Math.random() * 340 + 420);
        }

        setRandomColor(): void {

            this.color = "hsl(" + Math.round(Math.random() * 360) + "," + "100%," + "50%)";
        }

    }
}