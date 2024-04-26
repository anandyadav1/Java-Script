let todo=[];
let req=prompt("Please enter your request");

while(true){
    if(req=="quit"){
    console.log("Quiting App");
    break;
    }

    if(req=="list"){
        console.log("-----------------");
        for(let i=0; i<todo.length; i++){
            console.log(i,todo[i]);
        }
        console.log("------------------");
    }

    else if(req=="add"){
        let task=prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    }

    else if(req=="delete"){
        let index=prompt("Please enter thr task index");
        todo.splice(index,1);
        console.log("Task delete");
    }

    else{
        console.log("Wrong request");
    }

    req=prompt("Please enter your request");
}