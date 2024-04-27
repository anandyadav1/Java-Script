const sum = (a, b) => {
    console.log(a + b);
}
sum(34, 56);


const n = (m) => {
    console.log(m ** m);
}
n(3);

const p = (q) => {
    console.log(q ** 5);
}
p(2);

//Implici Arrow function
const mul = (x, z) => (
    x * z  //not use semicollon
);
console.log(mul(2, 4));

//Set Time out Functions

console.log("Hi there!");

setTimeout(() => {
    console.log("G L Bajaj");
}, 4000);
console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");

//Set Interval time
// let id = setInterval(() => {
//     console.log("G L Bajaj");
// }, 2000); //1000 mean 1 second  

// console.log(id);

// let id2 = setInterval(() => {
//     console.log("Hello Anand ji");
// }, 2000); //2000 mean 2 second  


// this with arrow Function
const student = {  
    name: "Anand",
    marks: 65,
    prop: this,  //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);  //Parent's scope
        return this.marks;
    },
    getInfo1: function(){
        setTimeout(() => {
            console.log(this);
        },2000);
    },
    getInfo2: function(){
        setTimeout( function () {
            console.log(this);
        },2000);
    }
};

console.log(student.getName());
console.log(student.getMarks());
console.log(student.getInfo1());
console.log(student.getInfo2());
