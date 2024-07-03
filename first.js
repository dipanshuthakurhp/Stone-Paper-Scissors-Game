let playerA = prompt("Player A");
let playerB = prompt("Player B");

let f = document.querySelectorAll(".p");
f[0].innerHTML = "<div id='A' class='marks'>0</div>" + playerA;
f[1].innerHTML = "<div id='B' class='marks'>0</div>" + playerB;
let a = 0;
let b = 0;

let a_name = "";
let b_name = "";

let choices = document.querySelectorAll(".game");
let text = document.querySelector("#msg");
let turn = true;
const genb_choice = () =>{
    const options = ["stone", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

let ida = document.querySelector("#A");
let idb = document.querySelector("#B");

const showresult = (a_win) =>{
    if(a_win){
        console.log(playerA + " won!");
        text.innerText = playerA +" won!"
        a++;
        ida.innerText = a;
    }
    else{
        console.log(playerB + " won!");
        text.innerText = playerB +" won!"
        b++;
        idb.innerText = b;
    }
};

const playGame = (a_choice, b_choice) =>{
    console.log(a_choice, b_choice);
    let a_win = true;
    if(a_choice == b_choice){
        console.log("Game is draw");
        text.innerText = "It is a draw.";
    }
    else{
    if(a_choice == "stone"){ // a_choice is stone
        a_win = (b_choice == "paper" ? false : true);  // if comp choice is paper then computer wins
    }
    else if(a_choice == "paper"){
        a_win = (b_choice == "stone" ? true: false);
    }
    else{
        a_win = (b_choice == "paper" ? true : false);
    }
    showresult(a_win);
}
};

let a_choice="";
let b_choice="";

choices.forEach( (choice) => {
    console.log(choice);
    choice.addEventListener("click", ()=>{
        if(turn){
            a_choice = choice.getAttribute("id");
            turn = false;
        }
        else{
            b_choice = choice.getAttribute("id");
            turn = true;
            playGame(a_choice, b_choice);
        }
        
    });
});