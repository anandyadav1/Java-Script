const student={
    name:"Anand",
    age:19,
    math:60,
    eng:64,
    phy:60,
    getAvg(){
        let avg=(this.math+this.eng+this.phy)/3;
        console.log(Math.ceil(avg),'%');
    }
}
console.log(student.getAvg());


//Try & catch keyword
console.log("Using try & catch statement");
console.log("hello1");
console.log("hello2");
console.log("hello3"); 
console.log("hello4");
try {
console.log(a);
}catch{
    console.log("Caught an error.. a is not defined:");
}
console.log("hello5");
console.log("hello6");
console.log("hello7");
console.log("hello8");


//remove the  errror
console.log("Without using try & catch statement");
console.log("hello1");
console.log("hello2");
console.log("hello3");
console.log("hello4");
console.log(a);
console.log("hello5");
console.log("hello6");
console.log("hello7");
console.log("hello8");