let userScore = 0;
let pcScore = 0;
const userScore_span = document.getElementById("user-score");
const pcScore_span = document.getElementById("pc-score");
const score_board = document.getElementById("score-board");
const result_div = document.querySelector(".result > h3");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const rockPc_div = document.getElementById("rockPc");
const paperPc_div = document.getElementById("paperPc");
const scissorsPc_div = document.getElementById("scissorsPc");

alert("still in development but have fun :D ");
// The computer's Choice
function getPcChoice(){
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// wining ond lossing XD
function win(userChoice, pcChoice){
    userScore++;
    if(userScore > 5 ){
    userScore = 0;
    confirm("win");
    location.reload()
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
    if(pcScore > 5){
    pcScore = 0;
    confirm("lose");
    location.reload()
    }
    pcScore_span.innerHTML = pcScore;
    userScore_span.innerHTML = userScore;
    const player = "Player".fontsize(4).fontcolor("#dc3545").sup();
    const PC = "PC".fontsize(4).fontcolor("#dc3545").sup();
    const lose = "lose!".fontcolor("#d42424") 
    result_div.innerHTML = pcChoice +PC + " Beats " + userChoice+ player + " You " + lose;
}
function draw(userChoice, pcChoice){
    const player = "Player".fontsize(4).fontcolor("#dc3545").sup();
    const PC = "PC".fontsize(4).fontcolor("#dc3545").sup();
    const draw = "draw!".fontcolor("#6c757d")
    result_div.innerHTML = pcChoice + PC + " " + userChoice + player + " It's a " + draw;
}

// wining case's
function game(userChoice){
    const pcChoice = getPcChoice();
    var name =userChoice + pcChoice
    switch (userChoice + pcChoice){
        case "RockScissors":
        case "PaperRock":    
        case "ScissorsRock":
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

// Button's are thiiiiccccccccc
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

