//cannot overload constructor
//we can have only single constructor
var Emp = /** @class */ (function () {
    function Emp(id, name) {
        this.id = id;
        this.name = name;
    }
    Emp.prototype.display = function () {
        console.log(this.id + "," + this.name);
    };
    return Emp;
}());
var obj = new Emp(1, "ram");
obj.display();
