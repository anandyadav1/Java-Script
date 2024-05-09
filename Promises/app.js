function savetoDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed<4){
            resolve("success : data was saved");
        }  else{
            reject("failure : week connetion");
        }
    });
}

//Promises
// let request=savetoDb("GlBajaj");
// request
// .then(()=>{
// console.log("promise was resolved");
// })
// .catch(()=>{
//     console.log("promise was rejected");
// });

//Promises chainning
savetoDb("GlBajaj")
.then((result)=>{
console.log("data 1 saved");
console.log("result of promises: ",result);
return savetoDb("helloworld");
})

.then((result)=>{
    console.log("data 2 saved");
    console.log("result of promises: ",result);
    return savetoDb("Anand");
})
.then((result)=>{
    console.log("data 3 saved");
    console.log("result of promises: ",result);
    return savetoDb("Prins");
})

.then((result)=>{
    console.log("data 4 saved");
    console.log("result of promises: ",result);
    return savetoDb("Shubham");
})

.catch((error)=>{
    console.log("promise was rejected");
    console.log("error of promises: ",error);
});