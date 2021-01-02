//cannot overload constructor in typescript
//we can have only single constructor

class Emp {
    id:number;
    name:string;
    constructor(id:number,name:string) {
        this.id = id;
        this.name = name;
    }
    
    display() :void {
        console.log(this.id + "," + this.name);
    }
}

let obj = new Emp(1,"ram");
obj.display();