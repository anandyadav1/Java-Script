//Function

function printPoem()
{
    console.log("Twinkle Twinkle, Little star");
    console.log("How I wonder what you are");
}
let n=prompt("Enter value for print poem many time");
n=parseInt(n);
for(let i=1; i<=n; i++){
    printPoem();
}

//Argument Function
function printInfo(name, age) {
    console.log(name,"age is", age);
}

printInfo("Anand's", 19);


// sum of 1 to N
function getSum(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum+=i;
    }
    console.log("The value 1 to ",m ,"sum= ",sum);
}
let m=prompt("Enter the any number by user :");
m=parseInt(m);
getSum(m);
