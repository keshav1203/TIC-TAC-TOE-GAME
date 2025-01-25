let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let mssgcontainer = document.querySelector(".mssg_container");
let msg = document.querySelector("#msg");

let boxturn = true;

let winningpttrn = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerHTML !== "") return; 
        console.log("box is clicked");
        if (boxturn) {
            box.innerHTML = "o";
            boxturn = false;
        } else {
            box.innerHTML = "x";
            boxturn = true;
        }
        box.classList.add("disabled"); 
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of winningpttrn) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val)
                 return;
            }
        }
    }
};

const showwinner = (winner) =>{
    msg.innerText = `congratulation the winner is ${winner}`
    mssgcontainer.classList.remove("hide")
    disabled()
}

const restart = function (){
    boxturn = true;
    enabled()
    mssgcontainer.classList.add("hide")
}

const disabled = function () {
    for(let box of boxes){
        box.disabled=true
    }
}

const enabled = function () {
    for(let box of boxes){
        box.disabled=false
        box.innerText = "";
    }
}
resetbtn.addEventListener("click",restart);
newgame.addEventListener("click",restart);

