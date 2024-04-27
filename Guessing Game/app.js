// const max=prompt("Enter the max number :");

let guess=prompt("Guess the number :");

const random=Math.floor(Math.random()*10)+1;

while(true){

    if(guess=="quit"){
        console.log("User quit");
        break;
    }

    if(guess==random){
        console.log("You are right! Congrate!!");
        break;
    }

    else if(guess < random){
        guess=prompt("Your guess was too small. Please try again large number :")

    }

    else{
       guess= prompt("Your guess was too large. Please try again small number :");
    }

} 