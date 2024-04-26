// let name1="Anand";
// let name2="Adarsh";
// let name3="Arun";
// let name4="Himanshu";
// let name5="Ajit";
// console.log(name1,name2,name3,name4,name5);

// let name=["anand","adarsh","arun","himanshu","ajit"];
// console.log(name);
// console.log(name[3]);
// console.log(name[3][2]);


// let fruits=["Apple","Banana","Mango"];
// console.log(fruits);
// fruits[1]=PineApple;
// console.log(fruits);

//Array Method
let cars=["audi","bmw","xuv"];
//by push add to the last
console.log(cars.push("thar"),cars);
console.log(cars);
cars.push("farari");
console.log(cars);
console.log(cars.push("i10"),cars)
//by unshift add to the first
console.log(cars.unshift("i20"),cars);
console.log(cars.unshift("maruti"),cars);
//by pop delete to the last 
cars.pop();
console.log(cars);
console.log(cars.shift(),cars);


//practice set 1 using slice method
let month=["January","July","March","August"];
console.log(month);
console.log(month.shift(),month);
console.log(month.shift(),month);
console.log(month.unshift("june"),month);
console.log(month.unshift("july"),month);

//practce set 2 using splice method
let months=["January","July","March","August"];
console.log(months);
months.splice(0,2,"july","june");
console.log(months);

//practice set 3
let lang=["c","c++","html","javascript","python","java","c#"];
console.log(lang);
console.log(lang.reverse(),lang.indexOf("javascript"));

//Constant array
const arr=[3, 5, 7];
 

//Nested array
let num=[ [1,2],[3,4],[5,6]];
console.log(num);
console.log(num[1,1]);

//Game
let game=[['x', null, 'O'],[null, 'X', null],['O', null, 'X ']];
console.log(game);
console.log(game[0][1]='O');
