function getComputerChoice() {
    x = Math.random() * 3;
    if (x < 1){
        return "Rock";
    }
    if(x < 2){
        return "Scissors";
    }
    return "Paper";
}
console.log(getComputerChoice());