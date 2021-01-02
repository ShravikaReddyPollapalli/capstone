//array
let names:string[] = ["shra","sai","sup"]

for( let i in names) {
    console.log(names[i]);
}
console.log(names.sort())

names.push("sandhya");
console.log(names.join(":"))

let dt = "12-nov-2020".split("-");
console.log(dt);

//tuples
let student = [1,"shra",2000,56];
console.log(student[3])