console.log("hello!!!");
console.log("hi");


let a1 : number;
let a2 : number;
a1 = 45;
a2 = 55;
let sum1 : number;
sum1 = a1 + a2;
console.log(`sum is ${sum1}`);


class course {
    // id : number;
    // title : string;
    // duration : number;
    // status : boolean;
    // one more way is declaring within the constructor
   constructor(private id:number, private title:string, private duration:number, private status:boolean) {
     this.id = id;
     this.title = title;
     this.duration = duration;
     this.status = status;
 }
    display() {
        console.log(`Id : ${this.id}`);
        console.log(`Title : ${this.title}`);
        console.log(`Duration : ${this.duration}`);
        console.log(`Status : ${this.status}`);
    }
}
let c1 :  course = new course(101,'java fsd',112,true);

// c1.id = 101;
// c1.title = 'fsd in java';
// c1.duration = 112;
// c1.status = true;
// console.log(c1.title);
c1.display();