export class Add {
    constructor(private x?:number,private y?:number){

    }
    sum() {
        console.log(this.x + "," + this.y);
    }
}