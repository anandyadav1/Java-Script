let h1 = document.querySelector("h1");
// function changeclr(){
//         setTimeout(()=>{
//             h1.style.color="red";
//         },1000);
//     setTimeout(()=>{
//         h1.style.color="blue";
//     },2000);
//     setTimeout(()=>{
//         h1.style.color="yellow";
//     },3000);

//     setTimeout(()=>{
//         changeclr();
//     },3000);
// }
// changeclr();

function randcolor() {
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;

    let color = `rgb(${red},${green},${blue})`;
    return color;
}

function changeclr(color, delay) {
    setTimeout(() => {
        h1.style.color = color;
    }, delay);
}
changeclr(randcolor(), 1000);
changeclr(randcolor(), 2000);
changeclr(randcolor(), 3000);
changeclr(randcolor(), 4000);
changeclr(randcolor(), 5000);
changeclr(randcolor(), 6000);
changeclr(randcolor(), 7000);
changeclr(randcolor(), 8000);
changeclr(randcolor(), 9000);
changeclr(randcolor(), 10000);
changeclr(randcolor(), 11000);
changeclr(randcolor(), 12000);
changeclr(randcolor(), 13000);
changeclr(randcolor(), 14000);
changeclr(randcolor(), 15000);
changeclr(randcolor(), 16000);
changeclr(randcolor(), 17000);
changeclr(randcolor(), 18000);
changeclr(randcolor(), 19000);
changeclr(randcolor(), 20000);
changeclr(randcolor(), 21000);
changeclr(randcolor(), 22000);
changeclr(randcolor(), 23000);
changeclr(randcolor(), 24000);
changeclr(randcolor(), 25000);
changeclr(randcolor(), 26000);
changeclr(randcolor(), 27000);
changeclr(randcolor(), 28000);
changeclr(randcolor(), 29000);
changeclr(randcolor(), 30000);
