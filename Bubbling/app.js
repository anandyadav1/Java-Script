let div=document.querySelector("div");
let ul=document.querySelector("ul");
let list=document.querySelector("li");

div.addEventListener("click", function(event) {
    console.log("div was clicked");
})
ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul was clicked");
})
for(li of lis){
    div.addEventListener("click",function(){
        console.log("div was clicked");
    })
}


