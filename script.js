let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector('#newgame-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let i=0;

let turnO = false;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


boxes.forEach( (box) => {
    box.addEventListener("click",() => {
        i++;
        if (turnO)
        {
            box.innerText = "O";
            turnO = false;
            box.style.backgroundColor = "#91f9e5";
        }
        else
        {
            box.innerText = "X";
            turnO = true;
            box.style.backgroundColor = "#FED766";
        }
        box.disabled = true;
        checkWinner();
    })
})



const showWinner = (winner) => {
    msg.innerText = `Congratulations\n Winner is Player ${winner}`;
    msgContainer.classList.remove('hide');
}


const showDraw = () => {
    msg.innerText = "DRAW\nPlay Again"
    msgContainer.classList.remove('hide');
}

const checkWinner = () =>
{
    for (let pattern of winpatterns)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val!="" && pos2val != "" && pos3val != "")
        {
            if (pos1val === pos2val && pos2val === pos3val)
            {
                console.log("winner" , pos1val);
                for (let box of boxes)
                    box.disabled = true; 
                showWinner(pos1val);
            }
        }
    }
    if (i>=9)
    {
        showDraw();
    }
}



const resetgame = () => {
    turnO = false;
    i=0;
    for (let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "#ffffff";
    }
    msgContainer.classList.add("hide");
}



newgameBtn.addEventListener("click" , resetgame);
resetBtn.addEventListener("click" , resetgame);