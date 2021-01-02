interface Test2 {
    firstName:string;
    age:number;

    firstname();
    getage();
}

class Test3 implements Test2 {
    firstName:string;
    age:number;
    constructor(firstName:string,age:number) {
        this.firstName = firstName;
        this.age = age;
    }
    firstname() {
        return this.firstName;
    }
    getage() {
        return this.age;
    }
}

let obj2 = new Test3("ram",30);
console.log(obj2.firstname());
console.log(obj2.getage())