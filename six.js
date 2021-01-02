var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Test = /** @class */ (function () {
    function Test(color) {
        this.color = color;
    }
    Test.prototype.display = function () {
        console.log(this.color);
    };
    return Test;
}());
var Test1 = /** @class */ (function (_super) {
    __extends(Test1, _super);
    function Test1(price, color) {
        var _this = _super.call(this, color) || this;
        _this.price = price;
        return _this;
    }
    Test1.prototype.display = function () {
        console.log(this.price);
        _super.prototype.display.call(this);
    };
    return Test1;
}(Test));
var obj1 = new Test1(1000, "red");
obj1.display();
