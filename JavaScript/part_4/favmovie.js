let favMovie = "Avatar";
let guess = prompt("Guess my  Favorite Movie");
while((guess!=favMovie) && (guess != "quite")){
    console.log("Wrong");
    guess = prompt("Wrong guess try again ");
}

if(guess == favMovie){
    console.log("You are correct");
}
else{
    console.log("you quite")
}