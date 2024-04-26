console.log("Before my if statement");
let age=23;
if(age>18){
    console.log("You can vote ");
}
console.log(" After my if statement");

//practice question
let color="red";
//traffic light system
if(color=="red"){
    console.log("Stop");
}
if(color=="yellow"){
    console.log("Slow down");
}
if(color=="green"){
    console.log("Go");
}

//if-else statement
let k=6;
if(k==8){
    console.log(" k is equal");
}
else{
    console.log("k is not equal");
}

//elseif statement
let size="XL";
if(size=="XL"){
     console.log("Prise is Rs. 250");
}
else if(size=="L"){
     console.log("Prise is Rs. 200");
}
else if(size=="M"){
     console.log("Prise is Rs. 100");
}
else{ 
     console.log("Prise is Rs. 50");
}

//Nested if else statement
let marks=90;
if(marks>=33){
    console.log("Pass");
    if(marks>=85){
        console.log("Grade A");
    }
    else{
        console.log("Grade b");
    }
}
else{
    console.log("Luck better next time");
}