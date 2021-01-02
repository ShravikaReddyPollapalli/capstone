let sum = function(num1:number,num2:number) : number {
    return num1 + num2;
}

console.log(sum(100,200));

let display = function(name:string,city?:string,country:string = "india",...scores:number[] ){
    console.log(name)
    console.log(city)
    console.log(country)
    for(let x in scores) {
        console.log(scores[x]);
    }
}

display("ram");
display("ram","bng")
display("ram","bng","canda",34,56);
