class Test {
    color: string;
    constructor(color:string){
        this.color = color;
    }
    display():void {
        console.log(this.color);
    }
}

class Test1 extends Test {
    price : number;
    constructor(price:number,color:string){
        super(color);
        this.price = price;
    }
    display(): void {
        console.log(this.price);
        super.display();
    }
}

let obj1 = new Test1(1000,"red");
obj1.display();