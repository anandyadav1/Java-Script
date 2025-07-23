// questions 1
// let num=20;
// if(num%10==0){
//         console.log("Even");
// }else{
//         console.log("Odd");
// }


// questions 2
// let name = prompt("Enter the name");
// let age = prompt("Enter the age");
// let message = `${name} is ${age} years old`;
// alert(message);
// console.log(message);

// questions 3
// let quarter=Number(prompt("Enter the value for quarter"));
// switch(quarter){
//         case 1:
//                 console.log("January February March");
//                 break;
//         case 2:
//                 console.log("April May June");
//                 break;
//         case 3:
//                 console.log("July August September");
//                 break;
//         case 4:
//                 console.log("October November December");
//                 break;
//         default:
//                 console.log("Not match");
//                 break;
// }

// questions 4
// let a=6;
// let b=5;
// let c=4;
// if(a>b && b>c){
//         console.log(`${a} is the largest number`);
// }else if(b>c && c>a){
//         console.log(`${b} is the largest number`);
// }else{
//         console.log(`${c} is the largest number`);
// }

// questions 5
// let num1=32;
// let num2=47852;
// if(num1%10==num2%10){
//         console.log(`Both number is last digit same like ${num1%10}`);
// }else{
//         console.log("Not match")
// }


// part 3
// questions 1
// let num=[7, 9, 0,-2];
// let n=3;
// let na=num.slice(0,n);
// console.log(na);

// questions 2
// let num= [7, 9, 0,-2];
// let n=3;
// let l=num.length-n;
// let na=num.slice(l);
// console.log(na);

// questions 3
// let str=prompt("Enter the any string");
// if(str==""){
//         console.log("String is the empty");
// }else{
//         console.log("String is not the empty");
// }

// questions 4
// let str="anAnd";
// let idx=2;
// if(str[idx]==str[idx].toLowerCase()){
//         console.log("String is the lower case");
// }else{
//         console.log("String is not the lower case");
// }

// questions 5
// let st=prompt("Enter the string with space");
// console.log(`After trim String ${st.trim()}`);

// questions 6
// let arr=["anand",21,"sklmg",34,56,-2];
// if(arr.indexOf(21)!=-1){
//         console.log(`This element present on ${arr.indexOf(21)}`);
// }else{
//         console.log("not present in arr");
// }



//BreakPoint
// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let t = two();
//     let o = one();
//     let sum = t + o;
//     return sum;
// }
// let ans = three();
// console.log(ans);

// callBack Hell
// function saveDB(data, succes, failure) {
//         let interNet = Math.floor(Math.random() * 10) + 1;
//         if (interNet > 4) {
//                 succes();
//         } else {
//                 failure();
//         }
// }
// saveDB("G L Bajaj",
//         () => {
//                 console.log("Succes1 : Data was saved.");
//                 saveDB("Anand",
//                         () => {
//                                 console.log("Succes2 : Data was saved.")
//                                 saveDB("Krishna",
//                                         () => {
//                                                 console.log("Succes3 : Data was saved.")
//                                                 saveDB("Radhe",
//                                                         () => {
//                                                                 console.log("Succes4 : Data was saved.")
//                                                                 saveDB("Radhe Radhe",
//                                                                         () => {
//                                                                                 console.log("Succes5 : Data was saved.")
//                                                                         },
//                                                                         () => {
//                                                                                 console.log("Failure5 : Week connetions.");
//                                                                         }
//                                                                 );
//                                                         },
//                                                         () => {
//                                                                 console.log("Failure4 : Week connetions.");
//                                                         }
//                                                 );
//                                         },
//                                         () => {
//                                                 console.log("Failure3 : Week connetions.");
//                                         }
//                                 );
//                         },
//                         () => {
//                                 console.log("Failure1 : Week connetions.");
//                         }
//                 );
//         },
//         () => {
//                 console.log("Failure1 : Week connetions.");
//         }
// );


// Promices Chaining
// function saveDB(data) {
//         return new Promise((resolve, reject) => {
//                 let interNet = Math.floor(Math.random() * 10) + 1;
//                 if (interNet > 4) {
//                         resolve("Success: Data was saved.");
//                 } else {
//                         reject("Error: Failed to save data.");
//                 }
//         });
// }

// saveDB("G L Bajaj")
//         .then((result) => {
//                 console.log("Data1 saved.");
//                 console.log("result of promise: ",result);
//                 return saveDB("Anand");
//         })
//         .then((result)=>{
//                 console.log("Data2 saved.");
//                 console.log("result of promise: ",result);
//                 return saveDB("Yadav");
//         })
//         .then((result)=>{
//                 console.log("Data3 saved.");
//                 console.log("result of promise: ",result);
//                 return saveDB("Divyashi");
//         })
//         .then((result)=>{
//                 console.log("Data4 saved.");
//                 console.log("result of promise: ",result);
//                 return saveDB("Gupta");
//         })
//         .then((result)=>{
//                 console.log("Data5 saved.");
//                 console.log("result of promise: ",result);
//                 return saveDB("Akanksha");
//         })
//         .then((result)=>{
//                 console.log("Data6 saved.");
//                 console.log("result of promise: ",result);
//                 return saveDB("Adarsh");
//         }).then((result)=>{
//                 console.log("Data7 saved.");
//                 console.log("result of promise: ",result);
//                 return saveDB("Anjali");
//         })
//         .then((result)=>{
//                 console.log("Data8 saved.");
//                 console.log("result of promise: ",result);
//         })
//         .catch((error) => {
//                 console.log("result of promise: ",result);
//                 console.log("Promises was Failure.");
//         });


// async and await

// const h1 = document.querySelector("h1");

//     function changeColor(color, delay) {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           h1.style.color = color;
//           console.log(`color changed to ${color}`);
//           resolve("color changed");
//         }, delay);
//       });
//     }

//     async function demo() {
//       await changeColor("red", 1000);
//       await changeColor("green", 1000);
//       await changeColor("blue", 1000);
//       await changeColor("black", 1000);
//       await changeColor("yellow", 1000);
//       await changeColor("pink", 1000);
//       await changeColor("maroon", 1000);
//       await changeColor("purple", 1000);
//     }


// API
// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//   return res.json();
// })
// .then((data)=>{
//   console.log("Data 1: ",data.fact);
//   return fetch(url);
// })
// .then((res)=>{
//   return res.json();
// })
// .then((data)=>{
//   console.log("Data 2: ",data.fact);
//   return fetch(url);
// })
// .then((res)=>{
//   return res.json();
// })
// .then((data)=>{
//   console.log("Data 3: ",data.fact);
// })
// .catch((err)=>{
//   console.log(err);
// });
// console.log("I am very happy for its, learning");

// Efficieant way using async and await

let url = "https://catfact.ninja/fact";
async function getFacts() {
  try {
    let res1 =await fetch(url);
    let data1 = await res1.json();
    console.log("Data 1: ",data1.fact);

    let res2 =await fetch(url);
    let data2 = await res2.json();
    console.log("Data 2: ",data2.fact);

    let res3 =await fetch(url);
    let data3 = await res3.json();
    console.log("Data 3: ",data3.fact);

    let res4 =await fetch(url);
    let data4 = await res4.json();
    console.log("Data 4: ",data4.fact);

    let res5 =await fetch(url);
    let data5 = await res5.json();
    console.log("Data 5: ",data4.fact);

    let res6 =await fetch(url);
    let data6 = await res6.json();
    console.log("Data 6: ",data6.fact);

    let res7 =await fetch(url);
    let data7 = await res7.json();
    console.log("Data 7: ",data7.fact);

    let res8 =await fetch(url);
    let data8 = await res8.json();
    console.log("Data 8: ",data8.fact);
  } catch (err) {
    console.log("Error Occure : ", err);
  }

  console.log("Bye Bye....");
}
getFacts();
