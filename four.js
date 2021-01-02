var sum = function (num1, num2) {
    return num1 + num2;
};
console.log(sum(100, 200));
var display = function (name, city, country) {
    if (country === void 0) { country = "india"; }
    var scores = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        scores[_i - 3] = arguments[_i];
    }
    console.log(name);
    console.log(city);
    console.log(country);
    for (var x in scores) {
        console.log(scores[x]);
    }
};
display("ram");
display("ram", "bng");
display("ram", "bng", "canda", 34, 56);
