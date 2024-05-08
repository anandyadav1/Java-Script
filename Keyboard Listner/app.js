let input=document.querySelector("input");
input.addEventListener("keydown", function(event){
    console.log("key = ",event.key);
    console.log("key = ",event.code);
    console.log("key was pressed");
});