let userScore = 0;
let pcScore = 0;
const userScore_span = document.getElementById("user-score");
const pcScore_span = document.getElementById("pc-score");
const score_board = document.getElementById("score-board");
const result_div = document.querySelector(".result > h3");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

//console log things
console.log(document.all)


// Button's which is for player's are thiiiiccccccccc
function main(){
    rock_div.addEventListener('click', function(){
        game("Rock");
    })

    paper_div.addEventListener('click', function(){
        game("Paper");
    }) 

    scissors_div.addEventListener('click', function(){
        game("Scissors");
    })
}

main();

// The computer's Choice
function getPcChoice(){
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// wining case's
function game(userChoice){
    const pcChoice = getPcChoice();
    var name = userChoice + pcChoice
    switch (userChoice + pcChoice){
        case "RockScissors":
        case "PaperRock":    
        case "ScissorsPaper":
            win(userChoice , pcChoice);
              break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            loses(userChoice , pcChoice);
                break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice , pcChoice);            
                break;
    }
}

// wining ond lossing XD
function win(userChoice, pcChoice){
    userScore++;
    if(userScore > 4){
    alert("You WIN !");
    document.getElementById("Rock").disabled = true;
    document.getElementById("Paper").disabled = true;
    document.getElementById("Scissors").disabled = true;
    var buttonComeHere = x
    if (buttonComeHere.style.display === "block") {
        buttonComeHere.style.display = "none";
    }else {
        buttonComeHere.style.display = "block";
    }
    buttonComeHere.style.display = "inline";
    }
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
    const player = "Player".fontsize(4).fontcolor("#dc3545").sup();
    const PC = "PC".fontsize(4).fontcolor("#dc3545").sup();
    const win = "Win!".fontcolor("#28a745")
    result_div.innerHTML = userChoice + player + " Beats "+ pcChoice + PC +" "+ " You "+ win;  
}
function loses(userChoice, pcChoice){
    pcScore++;
    if(pcScore > 4){
    alert("You lost :(");
    document.getElementById("Rock").disabled = true;
    document.getElementById("Paper").disabled = true;
    document.getElementById("Scissors").disabled = true;
    var buttonComeHere = x
    if (buttonComeHere.style.display === "block") {
        buttonComeHere.style.display = "none";
    }else {
        buttonComeHere.style.display = "block";
    }
    buttonComeHere.style.display = "inline";
    }
    pcScore_span.innerHTML = pcScore;
    userScore_span.innerHTML = userScore;
    const player = "Player".fontsize(4).fontcolor("#dc3545").sup();
    const PC = "PC".fontsize(4).fontcolor("#dc3545").sup();
    const lose = "lose!".fontcolor("#d42424") 
    result_div.innerHTML = pcChoice +PC + " Beats " + userChoice+ player + " You " + lose;
    console.log("pc"+pcScore)
}
function draw(userChoice, pcChoice){
    const player = "Player".fontsize(4).fontcolor("#dc3545").sup();
    const PC = "PC".fontsize(4).fontcolor("#dc3545").sup();
    const draw = "draw!".fontcolor("#6c757d")
    result_div.innerHTML = pcChoice + PC + " " + userChoice + player + " It's a " + draw;  
}

//Play again function
function apperAgain(){
    pcScore = 0;
    userScore = 0;
    document.getElementById("user-score").innerText = 0;
    document.getElementById("pc-score").innerText = 0;
    document.getElementById("resultAgain").innerText = "Choose to get started !";
    document.getElementById("Rock").disabled = false;
    document.getElementById("Paper").disabled = false;
    document.getElementById("Scissors").disabled = false;
    if (x.style.display === "none") {
        x.style.display = "block";
    }else {
        x.style.display = "none";
    }
}
