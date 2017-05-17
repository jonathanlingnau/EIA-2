var Inheritance_A8;
(function (Inheritance_A8) {
    var MovingShape = (function () {
        function MovingShape(_x, _y, _color) {
            this.setRandomColor();
            _color = this.color;
            this.setRandomPosition();
            _x = this.x;
            _y = this.y;
        }
        MovingShape.prototype.setRandomPosition = function () {
            this.x = Math.round(Math.random() * 1250);
            this.y = Math.round(Math.random() * 340 + 420);
        };
        MovingShape.prototype.setRandomColor = function () {
            this.color = "hsl(" + Math.round(Math.random() * 360) + "," + "100%," + "50%)";
        };
        return MovingShape;
    }());
    Inheritance_A8.MovingShape = MovingShape;
})(Inheritance_A8 || (Inheritance_A8 = {}));
//# sourceMappingURL=superClass.js.map