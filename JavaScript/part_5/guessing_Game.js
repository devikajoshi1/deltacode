const max = prompt("Enter the maximum number");

const random = Math.floor(Math.random() * max)+1;
let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    } 
    if(guess == random){
        console.log("you are  right , congrats! ,random num was :",random);
        break;
    } 
    else if(guess < random){
        guess = prompt("hint :your number was too small . please try again");
    }
    else{
        guess = prompt("hint :your number was too big . please try again");
    }
    // else{
    //     guess = prompt("your guess was wrong. please try again");
    // }
}

