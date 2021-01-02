console.log("hello!!!");
console.log("hi");
var a1;
var a2;
a1 = 45;
a2 = 55;
var sum;
sum = a1 + a2;
console.log("sum is " + sum);
var course = /** @class */ (function () {
    // id : number;
    // title : string;
    // duration : number;
    // status : boolean;
    // one more way is declaring within the constructor
    function course(id, title, duration, status) {
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.status = status;
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.status = status;
    }
    course.prototype.display = function () {
        console.log("Id : " + this.id);
        console.log("Title : " + this.title);
        console.log("Duration : " + this.duration);
        console.log("Status : " + this.status);
    };
    return course;
}());
var c1 = new course(101, 'java fsd', 112, true);
// c1.id = 101;
// c1.title = 'fsd in java';
// c1.duration = 112;
// c1.status = true;
// console.log(c1.title);
c1.display();
