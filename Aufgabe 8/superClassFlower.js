var Inheritance_A8;
(function (Inheritance_A8) {
    class superClassFlower {
        constructor(_x, _y, _color) {
            this.setRandomColor();
            _color = this.color;
            this.setRandomPosition();
            _x = this.x;
            _y = this.y;
        }
        setRandomPosition() {
            this.x = Math.round(Math.random() * 1250);
            this.y = Math.round(Math.random() * 340 + 420);
        }
        setRandomColor() {
            this.color = "hsl(" + Math.round(Math.random() * 360) + "," + "100%," + "50%)";
        }
    }
    Inheritance_A8.superClassFlower = superClassFlower;
})(Inheritance_A8 || (Inheritance_A8 = {}));
//# sourceMappingURL=superClassFlower.js.map