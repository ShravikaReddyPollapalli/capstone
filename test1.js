"use strict";
exports.__esModule = true;
exports.Add = void 0;
var Add = /** @class */ (function () {
    function Add(x, y) {
        this.x = x;
        this.y = y;
    }
    Add.prototype.sum = function () {
        console.log(this.x + "," + this.y);
    };
    return Add;
}());
exports.Add = Add;
