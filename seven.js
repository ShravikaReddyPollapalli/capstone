var Test3 = /** @class */ (function () {
    function Test3(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    Test3.prototype.firstname = function () {
        return this.firstName;
    };
    Test3.prototype.getage = function () {
        return this.age;
    };
    return Test3;
}());
var obj2 = new Test3("ram", 30);
console.log(obj2.firstname());
console.log(obj2.getage());
