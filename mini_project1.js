let h1 = document.querySelector("h1");
let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector("#reset");
let msg = document.querySelector('#win');
let new_game = document.querySelector("#new_game");
let turn = true;

let x =0;
let player_1 ;
let player_2;
let start = () =>{
    player_1 = prompt("Player 1 ");
    player_2 = prompt("Player 2 ");
}
start();

const winpattern = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

reset_button.addEventListener("click",() => {
    x=0;
    for(box of boxes){
        box.innerText="";
        box.disabled =false;
    }
    turn = true;
    msg.innerText = "";
});

boxes.forEach((box)=> {
    box.addEventListener("click",() => {
        x=x+1;
        console.log(x);
        if(turn){
            box.innerText = "X";
            turn = false;
        }
        else{
            box.innerText = "O";  
            turn = true;
        }
        box.disabled=true;
        check();
    });
});

const disableBtns = () => {
    for(let box of boxes){
        box.disabled =true;
    }
};


const display_winner = (winner) =>{
    msg = document.createElement('div'); // Create a new div element for the message
    const h1 = document.querySelector('h1'); // Find the h1 element in the document
    // console.log(winner);
    if(winner == "Draw match")
        msg.innerText=winner;
    else if(winner == "X")
        msg.innerText=`Congratulations ${player_1}`;
    else
        msg.innerText = `Congratulations ${player_2}`; 
    h1.append(msg);
}



const check = () =>{
    let p=0;
    for(let wins of winpattern){
        let pos1 = boxes[wins[0]].innerText;
        let pos2 = boxes[wins[1]].innerText;
        let pos3 = boxes[wins[2]].innerText;
        if(pos1!=="" && pos2!=="" && pos3!=="" && pos1 === pos2 && pos2 === pos3){
            disableBtns();
            display_winner(pos1);
            p=1;
        }
        
    }
    if(p==0 && x == 9){
        display_winner("Draw match");
    }
};


new_game.addEventListener("click",() => {
    x=0;
    for(box of boxes){
        box.innerText="";
        box.disabled =false;
    }
    turn = true;
    msg.innerText = "";
    
    start();
});
