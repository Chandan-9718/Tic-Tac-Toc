const tictac = document.querySelector(".tictac");
// console.log(tictac);

const boxes = document.querySelectorAll(".box");
//  console.log(boxes);

const h1 = document.getElementsByTagName("h1");
// console.log(h1);


const rbtn = document.getElementById("Rstart")
console.log(rbtn);



let currentPlayer = "X";
let  count = 0;

let winingCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function startGame(e) {
  if (e.target.className !== "tictac") {
    // console.log(e.target.className);
    if (e.target.innerText === "") {
      e.target.textContent = currentPlayer;
      count++
      winner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
    if(count === 9){
        h1[0].innerText = `Match Drow`;
//   console.log(count);
    }
  }

}

tictac.addEventListener("click", startGame);
// console.log(e.target );

// if(currentPlayer === "X"){
//     currentPlayer = "O"
// }else{
//     currentPlayer = "X"
// }

function winner() {
  // console.log(boxes[0].innerHTML);
  winingCondition.forEach((item) => {
    // console.log(item);
    let index0 = item[0];
    let index1 = item[1];
    let index2 = item[2];
    // console.log(index0 , index1 , index2)
    let val0 = boxes[index0].innerText;
    let val1 = boxes[index1].innerText;
    let val2 = boxes[index2].innerText;
    // console.log(index0 , val0 , index1 , val1 , index2 , val2);
    if (val0 !== "" && val1 !== "" && val2 !== "") {
      if (val0 === val1 && val0 === val2) {
        // boxes[index0].style.backgroundColor = "red"
        boxes[index0].classList.add("winnerClass")
        boxes[index1].classList.add("winnerClass")
        boxes[index2].classList.add("winnerClass")

        // console.log("winner is " , val0);
        count = 0
        h1[0].innerText = `winner is ${val1} `;
        tictac.removeEventListener("click", startGame);
      }
    }
  });
}


rbtn.addEventListener('click',() => {
    // console.log("hello");
    currentPlayer = "X";
    h1[0].innerText="Tic Tac Toc"
    boxes.forEach((item) => {
        item.classList.remove("winnerClass")
        item.innerText=''
    })
    tictac.addEventListener("click", startGame);

})

              