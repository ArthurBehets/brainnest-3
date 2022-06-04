const rock = 0;
const paper = 1;
const scissors = 2;


function getComputerSign(){
    let random = Math.floor(Math.random() * 3);
    return random;
}

function playRock(){
    let result;
    let computerSign = getComputerSign();
    if(computerSign === rock){
        result = "Equality !"
        document.getElementById("player_action").innerHTML = "<p class='equal'><i class='fa-solid fa-hand-back-fist'></i></p>"
        document.getElementById("computer_action").innerHTML = "<p class='equal'><i class='fa-solid fa-hand-back-fist'></i></p>"
    }
    else if(computerSign === paper){
        result = "You lost !"
        document.getElementById("player_action").innerHTML = "<p class='lost'><i class='fa-solid fa-hand-back-fist'></i></p>"
        document.getElementById("computer_action").innerHTML = "<p class='won'><i class='fa-solid fa-hand'></i></p>"
    }
    else if(computerSign === scissors){
        result = "You won !"
        document.getElementById("player_action").innerHTML = "<p class='won'><i class='fa-solid fa-hand-back-fist'></i></p>"
        document.getElementById("computer_action").innerHTML = "<p class='lost'><i class='fa-solid fa-solid fa-hand-scissors'></i></p>"
    }
    else{
        result = "Error"
    }
    document.getElementById("result").innerHTML = result;
}

function playPaper(){
    let computerSign = getComputerSign();
    let result;
    if(computerSign === paper){
        document.getElementById("player_action").innerHTML = "<p class='equal'><i class='fa-solid fa-hand'></i></p>"
        document.getElementById("computer_action").innerHTML = "<p class='equal'><i class='fa-solid fa-hand'></i></p>"
        result = "Equality !"
    }
    else if(computerSign === scissors){
        document.getElementById("player_action").innerHTML = "<p class='lost'><i class='fa-solid fa-hand'></i></p>"
        document.getElementById("computer_action").innerHTML = "<p class='won'><i class='fa-solid fa-hand-scissors'></i></p>"
        result = "You lost !"
    }
    else if(computerSign === rock){
        document.getElementById("player_action").innerHTML = "<p class='won'><i class='fa-solid fa-hand'></i></p>"
        document.getElementById("computer_action").innerHTML = "<p class='lost'><i class='fa-solid fa-hand-back-fist'></i></p>"
        result = "You won !"
    }
    else{
        result = "Error"
    }
    document.getElementById("result").innerHTML = result;
}

function playScissors(){
    let computerSign = getComputerSign();
    let result;
    if(computerSign === scissors){
        result = "Equality !"
        document.getElementById("player_action").innerHTML = "<p class='equal'><i class='fa-solid fa-hand-scissors'></i></p>"
        document.getElementById("computer_action").innerHTML = "<p class='equal'><i class='fa-solid fa-hand-scissors'></i></p>"
    }
    else if(computerSign === rock){
        result = "You lost !"
        document.getElementById("player_action").innerHTML = "<p class='lost'><i class='fa-solid fa-hand-scissors'></i></p>"
        document.getElementById("computer_action").innerHTML = "<p class='won'><i class='fa-solid fa-hand-back-fist'></i></p>"
    }
    else if(computerSign === paper){
        result = "You won !"
        document.getElementById("player_action").innerHTML = "<p class='won'><i class='fa-solid fa-hand-scissors'></i></p>"
        document.getElementById("computer_action").innerHTML = "<p class='lost'><i class='fa-solid fa-hand'></i></p>"
    }
    else{
        result = "Error"
    }
    document.getElementById("result").innerHTML = result;
}

