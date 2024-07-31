// let boxes=document.querySelectorAll(".box");
// let resetb=document.querySelector("#reset");
// let newgb=document.querySelector("#btn");
// let msgcontainer=document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let turn0=true;
// const winP=[
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
    
// ];

// const resetGame=()=>{
//     turn0=true;
//     enableBoxes();
//     msgcontainer.classList.add("hide");

// };


// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         console.log("Box was clicked");
//         if(turn0){//player0
//             box.innerText="O";
//             turn0=false;

//         }
//         else{//plyerx
//             box.innerText="X";
//             turn0=true;
//         }
//       box.disable=true;
//     checkWinner();
//     });
// });

// const disableBoxes=()=>{
//     for(let box of boxes){
//         box.enable=false;
//     }
// };

// const enableBoxes=()=>{
//     for(let box of boxes){
//         box.disable=true;
//         box.innerText="";
//     }
// };
// const showWinner=(winner)=>{
//     msg.innerText=`Congratulations,Winner is ${winner}`;
//     msgcontainer.classList.remove("hide");
//     disableBoxes();
// }
// const  checkWinner=()=>{
//     for(let pattern of winP){
//         // console.log(pattern[0],pattern[1],pattern[2]);
//         // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

//         let pos1v=boxes[pattern[0]].innerText;
//         let pos2v=boxes[pattern[1]].innerText;
//         let pos3v=boxes[pattern[2]].innerText;
//         if(pos1v!="" && pos2v!="" && pos3v!=""){
//             if(pos1v==pos2v && pos2v==pos3v){
//                 console.log("Winner",pos1v);
//                 showWinner(pos1v);
//             }
//         }
//     }
// };
// newgb.addEventListener("click", resetGame);
// resetb.addEventListener("click", resetGame);




// let boxes = document.querySelectorAll(".box");
// let resetb = document.querySelector("#reset");
// let newgb = document.querySelector("#btn");
// let startb = document.querySelector("#start");
// let msgcontainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let player1Input = document.querySelector("#player1");
// let player2Input = document.querySelector("#player2");
// let player1Name = "";
// let player2Name = "";
// let turn0 = true;
// const winP = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
// ];

// const resetGame = () => {
//     turn0 = true;
//     enableBoxes();
//     msgcontainer.classList.add("hide");
//     resetb.classList.add("hide");
// };

// const startGame = () => {
//     player1Name = player1Input.value || "Player 1";
//     player2Name = player2Input.value || "Player 2";
//     player1Input.classList.add("hide");
//     player2Input.classList.add("hide");
//     startb.classList.add("hide");
//     resetb.classList.remove("show");
// };

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("Box was clicked");
//         if (turn0) { //player0
//             box.innerText = "O";
//             turn0 = false;
//         } else { //playerx
//             box.innerText = "X";
//             turn0 = true;
//         }
//         box.disabled = true;
//         checkWinner();
//     });
// });

// const disableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// };

// const enableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//     }
// };

// const showWinner = (winner) => {
//     const winnerName = winner === "O" ? player1Name : player2Name;
//     msg.innerText = `Congratulations, Winner is ${winnerName}`;
//     msgcontainer.classList.remove("hide");
//     disableBoxes();
// };

// const checkWinner = () => {
//     for (let pattern of winP) {
//         let pos1v = boxes[pattern[0]].innerText;
//         let pos2v = boxes[pattern[1]].innerText;
//         let pos3v = boxes[pattern[2]].innerText;
//         if (pos1v !== "" && pos2v !== "" && pos3v !== "") {
//             if (pos1v === pos2v && pos2v === pos3v) {
//                 console.log("Winner", pos1v);
//                 showWinner(pos1v);
//             }
//         }
//     }
// };

// newgb.addEventListener("click", resetGame);
// resetb.addEventListener("click", resetGame);
// startb.addEventListener("click", startGame);








// let boxes = document.querySelectorAll(".box");
// let resetb = document.querySelector("#reset");
// let newgb = document.querySelector("#btn");
// let startb = document.querySelector("#start");
// let msgcontainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let player1Input = document.querySelector("#player1");
// let player2Input = document.querySelector("#player2");
// let displayPlayer1 = document.querySelector("#display-player1");
// let displayPlayer2 = document.querySelector("#display-player2");
// let player1Name = "";
// let player2Name = "";
// let turn0 = true;
// const winP = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
// ];

// const resetGame = () => {
//     turn0 = true;
//     enableBoxes();
//     msgcontainer.classList.add("hide");
//     resetb.classList.add("hide");
//     player1Input.classList.remove("hide");
//     player2Input.classList.remove("hide");
//     startb.classList.remove("hide");
//     displayPlayer1.innerText = "";
//     displayPlayer2.innerText = "";
// };

// const startGame = () => {
//     player1Name = player1Input.value || "Player 1";
//     player2Name = player2Input.value || "Player 2";
//     player1Input.classList.add("hide");
//     player2Input.classList.add("hide");
//     startb.classList.add("hide");
//     resetb.classList.remove("hide");
//     displayPlayer1.innerText = player1Name;
//     displayPlayer2.innerText = player2Name;
// };

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("Box was clicked");
//         if (turn0) { //player0
//             box.innerText = "O";
//             turn0 = false;
//         } else { //playerx
//             box.innerText = "X";
//             turn0 = true;
//         }
//         box.disabled = true;
//         checkWinner();
//     });
// });

// const disableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// };

// const enableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//     }
// };

// const showWinner = (winner) => {
//     const winnerName = winner === "O" ? player1Name : player2Name;
//     msg.innerText = `Congratulations, Winner is ${winnerName}`;
//     msgcontainer.classList.remove("hide");
//     disableBoxes();
// };

// const checkWinner = () => {
//     for (let pattern of winP) {
//         let pos1v = boxes[pattern[0]].innerText;
//         let pos2v = boxes[pattern[1]].innerText;
//         let pos3v = boxes[pattern[2]].innerText;
//         if (pos1v !== "" && pos2v !== "" && pos3v !== "") {
//             if (pos1v === pos2v && pos2v === pos3v) {
//                 console.log("Winner", pos1v);
//                 showWinner(pos1v);
//             }
//         }
//     }
// };

// newgb.addEventListener("click", resetGame);
// resetb.addEventListener("click", resetGame);
// startb.addEventListener("click", startGame);





// let boxes = document.querySelectorAll(".box");
// let resetb = document.querySelector("#reset");
// let newgb = document.querySelector("#btn");
// let startb = document.querySelector("#start");
// let msgcontainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let player1Input = document.querySelector("#player1");
// let player2Input = document.querySelector("#player2");
// let displayPlayer1 = document.querySelector("#display-player1");
// let displayPlayer2 = document.querySelector("#display-player2");
// let player1Name = "";
// let player2Name = "";
// let turn0 = true;
// const winP = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
// ];

// const resetGame = () => {
//     turn0 = true;
//     enableBoxes();
//     msgcontainer.classList.add("hide");
//     resetb.classList.add("hide");
//     player1Input.classList.remove("hide");
//     player2Input.classList.remove("hide");
//     startb.classList.remove("hide");
//     displayPlayer1.innerText = "";
//     displayPlayer2.innerText = "";
// };

// const startGame = () => {
//     player1Name = player1Input.value || "Player 1";
//     player2Name = player2Input.value || "Player 2";
//     player1Input.classList.add("hide");
//     player2Input.classList.add("hide");
//     startb.classList.add("hide");
//     resetb.classList.remove("hide");
//     displayPlayer1.innerText = player1Name;
//     displayPlayer2.innerText = player2Name;
// };

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("Box was clicked");
//         if (turn0) { // player0
//             box.innerText = "O";
//             box.style.color = "green";
//             turn0 = false;
//         } else { // playerx
//             box.innerText = "X";
//             box.style.color = "orange";
//             turn0 = true;
//         }
//         box.disabled = true;
//         checkWinner();
//     });
// });

// const disableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// };

// const enableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//         box.style.color = ""; // Reset the color
//     }
// };

// const showWinner = (winner) => {
//     const winnerName = winner === "O" ? player1Name : player2Name;
//     msg.innerText = `Congratulations, Winner is ${winnerName}`;
//     msgcontainer.classList.remove("hide");
//     disableBoxes();
// };

// const checkWinner = () => {
//     for (let pattern of winP) {
//         let pos1v = boxes[pattern[0]].innerText;
//         let pos2v = boxes[pattern[1]].innerText;
//         let pos3v = boxes[pattern[2]].innerText;
//         if (pos1v !== "" && pos2v !== "" && pos3v !== "") {
//             if (pos1v === pos2v && pos2v === pos3v) {
//                 console.log("Winner", pos1v);
//                 showWinner(pos1v);
//             }
//         }
//     }
// };

// newgb.addEventListener("click", resetGame);
// resetb.addEventListener("click", resetGame);
// startb.addEventListener("click", startGame);




// let boxes = document.querySelectorAll(".box");
// let resetb = document.querySelector("#reset");
// let newgb = document.querySelector("#btn");
// let startb = document.querySelector("#start");
// let toggleModeb = document.querySelector("#toggle-mode");
// let msgcontainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let player1Input = document.querySelector("#player1");
// let player2Input = document.querySelector("#player2");
// let displayPlayer1 = document.querySelector("#display-player1");
// let displayPlayer2 = document.querySelector("#display-player2");
// let player1Name = "";
// let player2Name = "";
// let turn0 = true;
// let isVsCPU = false;

// const winP = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
// ];

// const resetGame = () => {
//     turn0 = true;
//     enableBoxes();
//     msgcontainer.classList.add("hide");
//     resetb.classList.add("hide");
//     player1Input.classList.remove("hide");
//     player2Input.classList.remove("hide");
//     startb.classList.remove("hide");
//     displayPlayer1.innerText = "";
//     displayPlayer2.innerText = "";
// };

// const startGame = () => {
//     player1Name = player1Input.value || "Player 1";
//     player2Name = isVsCPU ? "CPU" : (player2Input.value || "Player 2");
//     player1Input.classList.add("hide");
//     player2Input.classList.add("hide");
//     startb.classList.add("hide");
//     resetb.classList.remove("hide");
//     displayPlayer1.innerText = player1Name;
//     displayPlayer2.innerText = player2Name;
// };

// const makeBotMove = () => {
//     let availableBoxes = Array.from(boxes).filter(box => box.innerText === "");
//     if (availableBoxes.length > 0) {
//         let randomBox = availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
//         randomBox.innerText = "X";
//         randomBox.style.color = "red";
//         randomBox.disabled = true;
//         checkWinner();
//         turn0 = !turn0;
//     }
// };

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("Box was clicked");
//         if (turn0) { // player 0
//             box.innerText = "O";
//             box.style.color = "orange";
//             turn0 = false;
//             box.disabled = true;
//             checkWinner();
//             if (isVsCPU && !turn0) {
//                 makeBotMove();
//             }
//         } else if (!isVsCPU) { // player X
//             box.innerText = "X";
//             box.style.color = "green";
//             turn0 = true;
//             box.disabled = true;
//             checkWinner();
//         }
//     });
// });

// const disableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// };

// const enableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//         box.style.color = ""; // Reset the color
//     }
// };

// const showWinner = (winner) => {
//     const winnerName = winner === "O" ? player1Name : player2Name;
//     msg.innerText = `Congratulations, Winner is ${winnerName}`;
//     msgcontainer.classList.remove("hide");
//     disableBoxes();
// };

// const checkWinner = () => {
//     for (let pattern of winP) {
//         let pos1v = boxes[pattern[0]].innerText;
//         let pos2v = boxes[pattern[1]].innerText;
//         let pos3v = boxes[pattern[2]].innerText;
//         if (pos1v !== "" && pos2v !== "" && pos3v !== "") {
//             if (pos1v === pos2v && pos2v === pos3v) {
//                 console.log("Winner", pos1v);
//                 showWinner(pos1v);
//                 return;
//             }
//         }
//     }
//     if (Array.from(boxes).every(box => box.innerText !== "")) {
//         msg.innerText = "It's a tie!";
//         msgcontainer.classList.remove("hide");
//         disableBoxes();
//     }
// };

// const toggleMode = () => {
//     isVsCPU = !isVsCPU;
//     toggleModeb.innerText = isVsCPU ? "Play vs. Player" : "Play vs. CPU";
//     resetGame();
// };

// newgb.addEventListener("click", resetGame);
// resetb.addEventListener("click", resetGame);
// startb.addEventListener("click", startGame);
// toggleModeb.addEventListener("click", toggleMode);




// let boxes = document.querySelectorAll(".box");
// let resetb = document.querySelector("#reset");
// let newgb = document.querySelector("#btn");
// let startb = document.querySelector("#start");
// let toggleModeb = document.querySelector("#toggle-mode");
// let msgcontainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let player1Input = document.querySelector("#player1");
// let player2Input = document.querySelector("#player2");
// let displayPlayer1 = document.querySelector("#display-player1");
// let displayPlayer2 = document.querySelector("#display-player2");
// let player1Name = "";
// let player2Name = "";
// let turn0 = true;
// let isVsCPU = false;

// const winP = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
// ];

// const resetGame = () => {
//     turn0 = true;
//     enableBoxes();
//     msgcontainer.classList.add("hide");
//     resetb.classList.add("hide");
//     player1Input.classList.remove("hide");
//     player2Input.classList.remove("hide");
//     startb.classList.remove("hide");
//     displayPlayer1.innerText = "";
//     displayPlayer2.innerText = "";
// };

// const startGame = () => {
//     player1Name = player1Input.value || "Player 1";
//     player2Name = isVsCPU ? "CPU" : (player2Input.value || "Player 2");
//     player1Input.classList.add("hide");
//     player2Input.classList.add("hide");
//     startb.classList.add("hide");
//     resetb.classList.remove("hide");
//     displayPlayer1.innerText = player1Name;
//     displayPlayer2.innerText = player2Name;
// };

// const makeBotMove = () => {
//     let availableBoxes = Array.from(boxes).filter(box => box.innerText === "");
//     if (availableBoxes.length > 0) {
//         let randomBox = availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
//         setTimeout(() => {
//             randomBox.innerText = "X";
//             randomBox.style.color = "red";
//             randomBox.disabled = true;
//             checkWinner();
//             turn0 = !turn0;
//         }, 1000); // 1000 milliseconds = 1 second delay
//     }
// };

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("Box was clicked");
//         if (turn0) { // player 0
//             box.innerText = "O";
//             box.style.color = "orange";
//             turn0 = false;
//             box.disabled = true;
//             checkWinner();
//             if (isVsCPU && !turn0) {
//                 makeBotMove();
//             }
//         } else if (!isVsCPU) { // player X
//             box.innerText = "X";
//             box.style.color = "green";
//             turn0 = true;
//             box.disabled = true;
//             checkWinner();
//         }
//     });
// });

// const disableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// };

// const enableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//         box.style.color = ""; // Reset the color
//     }
// };

// const showWinner = (winner) => {
//     const winnerName = winner === "O" ? player1Name : player2Name;
//     msg.innerText = `Congratulations, Winner is ${winnerName}`;
//     msgcontainer.classList.remove("hide");
//     disableBoxes();
// };

// const checkWinner = () => {
//     for (let pattern of winP) {
//         let pos1v = boxes[pattern[0]].innerText;
//         let pos2v = boxes[pattern[1]].innerText;
//         let pos3v = boxes[pattern[2]].innerText;
//         if (pos1v !== "" && pos2v !== "" && pos3v !== "") {
//             if (pos1v === pos2v && pos2v === pos3v) {
//                 console.log("Winner", pos1v);
//                 showWinner(pos1v);
//                 return;
//             }
//         }
//     }
//     if (Array.from(boxes).every(box => box.innerText !== "")) {
//         msg.innerText = "It's a tie!";
//         msgcontainer.classList.remove("hide");
//         disableBoxes();
//     }
// };

// const toggleMode = () => {
//     isVsCPU = !isVsCPU;
//     toggleModeb.innerText = isVsCPU ? "Player vs. Player" : "Player vs. Bot";
//     resetGame();
// };

// newgb.addEventListener("click", resetGame);
// resetb.addEventListener("click", resetGame);
// startb.addEventListener("click", startGame);
// toggleModeb.addEventListener("click", toggleMode);




// let boxes = document.querySelectorAll(".box");
// let resetb = document.querySelector("#reset");
// let newgb = document.querySelector("#btn");
// let startb = document.querySelector("#start");
// let toggleModeb = document.querySelector("#toggle-mode");
// let msgcontainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let player1Input = document.querySelector("#player1");
// let player2Input = document.querySelector("#player2");
// let displayPlayer1 = document.querySelector("#display-player1");
// let displayPlayer2 = document.querySelector("#display-player2");
// let player1Name = "";
// let player2Name = "";
// let turn0 = true;
// let isVsCPU = false;

// const winP = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
// ];

// const resetGame = () => {
//     turn0 = true;
//     enableBoxes();
//     msgcontainer.classList.add("hide");
//     resetb.classList.add("hide");
//     player1Input.classList.remove("hide");
//     if (!isVsCPU) {
//         player2Input.classList.remove("hide");
//     } else {
//         player2Input.classList.add("hide");
//     }
//     startb.classList.remove("hide");
//     displayPlayer1.innerText = "";
//     displayPlayer2.innerText = "";
// };

// const startGame = () => {
//     player1Name = player1Input.value || "Player 1";
//     player2Name = isVsCPU ? "CPU" : (player2Input.value || "Player 2");
//     player1Input.classList.add("hide");
//     player2Input.classList.add("hide");
//     startb.classList.add("hide");
//     resetb.classList.remove("hide");
//     displayPlayer1.innerText = player1Name;
//     displayPlayer2.innerText = player2Name;
// };

// const makeBotMove = () => {
//     let availableBoxes = Array.from(boxes).filter(box => box.innerText === "");
//     if (availableBoxes.length > 0) {
//         let randomBox = availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
//         setTimeout(() => {
//             randomBox.innerText = "X";
//             randomBox.style.color = "red";
//             randomBox.disabled = true;
//             checkWinner();
//             turn0 = !turn0;
//         }, 1000); // 1000 milliseconds = 1 second delay
//     }
// };

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("Box was clicked");
//         if (turn0) { // player 0
//             box.innerText = "O";
//             box.style.color = "orange";
//             turn0 = false;
//             box.disabled = true;
//             checkWinner();
//             if (isVsCPU && !turn0) {
//                 makeBotMove();
//             }
//         } else if (!isVsCPU) { // player X
//             box.innerText = "X";
//             box.style.color = "green";
//             turn0 = true;
//             box.disabled = true;
//             checkWinner();
//         }
//     });
// });

// const disableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// };

// const enableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//         box.style.color = ""; // Reset the color
//     }
// };

// const showWinner = (winner) => {
//     const winnerName = winner === "O" ? player1Name : player2Name;
//     msg.innerText = `Congratulations, Winner is ${winnerName}`;
//     msgcontainer.classList.remove("hide");
//     disableBoxes();
// };

// const checkWinner = () => {
//     for (let pattern of winP) {
//         let pos1v = boxes[pattern[0]].innerText;
//         let pos2v = boxes[pattern[1]].innerText;
//         let pos3v = boxes[pattern[2]].innerText;
//         if (pos1v !== "" && pos2v !== "" && pos3v !== "") {
//             if (pos1v === pos2v && pos2v === pos3v) {
//                 console.log("Winner", pos1v);
//                 showWinner(pos1v);
//                 return;
//             }
//         }
//     }
//     if (Array.from(boxes).every(box => box.innerText !== "")) {
//         msg.innerText = "It's a tie!";
//         msgcontainer.classList.remove("hide");
//         disableBoxes();
//     }
// };

// const toggleMode = () => {
//     isVsCPU = !isVsCPU;
//     toggleModeb.innerText = isVsCPU ? "Player vs. Player" : "Player vs. Bot";
//     resetGame();
//     player2Input.style.display = isVsCPU ? "none" : "block";
// };

// newgb.addEventListener("click", resetGame);
// resetb.addEventListener("click", resetGame);
// startb.addEventListener("click", startGame);
// toggleModeb.addEventListener("click", toggleMode);

// // Initial setup to hide player2 input if starting in CPU mode
// if (isVsCPU) {
//     player2Input.style.display = "none";
// }




// let boxes = document.querySelectorAll(".box");
// let resetb = document.querySelector("#reset");
// let newgb = document.querySelector("#btn");
// let startb = document.querySelector("#start");
// let toggleModeb = document.querySelector("#toggle-mode");
// let msgcontainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let player1Input = document.querySelector("#player1");
// let player2Input = document.querySelector("#player2");
// let displayPlayer1 = document.querySelector("#display-player1");
// let displayPlayer2 = document.querySelector("#display-player2");
// let player1Name = "";
// let player2Name = "";
// let turn0 = true;
// let isVsCPU = false;
// let gameStarted = false;

// const winP = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
// ];

// const resetGame = () => {
//     turn0 = true;
//     enableBoxes();
//     msgcontainer.classList.add("hide");
//     resetb.classList.add("hide");
//     player1Input.classList.remove("hide");
//     if (!isVsCPU) {
//         player2Input.classList.remove("hide");
//     } else {
//         player2Input.classList.add("hide");
//     }
//     startb.classList.remove("hide");
//     displayPlayer1.innerText = "";
//     displayPlayer2.innerText = "";
//     gameStarted = false;
// };

// const startGame = () => {
//     player1Name = player1Input.value || "Player 1";
//     player2Name = isVsCPU ? "CPU" : (player2Input.value || "Player 2");
//     player1Input.classList.add("hide");
//     player2Input.classList.add("hide");
//     startb.classList.add("hide");
//     resetb.classList.remove("hide");
//     displayPlayer1.innerText = player1Name;
//     displayPlayer2.innerText = player2Name;
//     gameStarted = true;
// };

// const makeBotMove = () => {
//     if (!gameStarted) return;
//     let availableBoxes = Array.from(boxes).filter(box => box.innerText === "");
//     if (availableBoxes.length > 0) {
//         let randomBox = availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
//         setTimeout(() => {
//             randomBox.innerText = "X";
//             randomBox.style.color = "red";
//             randomBox.disabled = true;
//             checkWinner();
//             turn0 = !turn0;
//         }, 1000); // 1000 milliseconds = 1 second delay
//     }
// };

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (!gameStarted) return;
//         console.log("Box was clicked");
//         if (turn0) { // player 0
//             box.innerText = "O";
//             box.style.color = "orange";
//             turn0 = false;
//             box.disabled = true;
//             checkWinner();
//             if (isVsCPU && !turn0) {
//                 makeBotMove();
//             }
//         } else if (!isVsCPU) { // player X
//             box.innerText = "X";
//             box.style.color = "red";
//             turn0 = true;
//             box.disabled = true;
//             checkWinner();
//         }
//     });
// });

// const disableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// };

// const enableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//         box.style.color = ""; // Reset the color
//     }
// };

// const showWinner = (winner) => {
//     const winnerName = winner === "O" ? player1Name : player2Name;
//     msg.innerText = `Congratulations, Winner is ${winnerName}`;
//     msgcontainer.classList.remove("hide");
//     disableBoxes();
//     gameStarted = false;
// };

// const checkWinner = () => {
//     for (let pattern of winP) {
//         let pos1v = boxes[pattern[0]].innerText;
//         let pos2v = boxes[pattern[1]].innerText;
//         let pos3v = boxes[pattern[2]].innerText;
//         if (pos1v !== "" && pos2v !== "" && pos3v !== "") {
//             if (pos1v === pos2v && pos2v === pos3v) {
//                 console.log("Winner", pos1v);
//                 showWinner(pos1v);
//                 return;
//             }
//         }
//     }
//     if (Array.from(boxes).every(box => box.innerText !== "")) {
//         msg.innerText = "It's a tie!";
//         msgcontainer.classList.remove("hide");
//         disableBoxes();
//         gameStarted = false;
//     }
// };

// const toggleMode = () => {
//     isVsCPU = !isVsCPU;
//     toggleModeb.innerText = isVsCPU ? "Player vs. Player" : "Player vs. Bot";
//     resetGame();
//     player2Input.style.display = isVsCPU ? "none" : "block";
// };

// newgb.addEventListener("click", resetGame);
// resetb.addEventListener("click", resetGame);
// startb.addEventListener("click", startGame);
// toggleModeb.addEventListener("click", toggleMode);

// // Initial setup to hide player2 input if starting in CPU mode
// if (isVsCPU) {
//     player2Input.style.display = "none";
// }










// let boxes = document.querySelectorAll(".box");
// let resetb = document.querySelector("#reset");
// let newgb = document.querySelector("#btn");
// let startb = document.querySelector("#start");
// let toggleModeb = document.querySelector("#toggle-mode");
// let msgcontainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let player1Input = document.querySelector("#player1");
// let player2Input = document.querySelector("#player2");
// let displayPlayer1 = document.querySelector("#display-player1");
// let displayPlayer2 = document.querySelector("#display-player2");
// let player1Name = "";
// let player2Name = "";
// let turn0 = true;
// let isVsCPU = false;
// let gameStarted = false;

// const winP = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// const resetGame = () => {
//     turn0 = true;
//     enableBoxes();
//     msgcontainer.classList.add("hide");
//     resetb.classList.add("hide");
//     player1Input.classList.remove("hide");
//     if (!isVsCPU) {
//         player2Input.classList.remove("hide");
//     } else {
//         player2Input.classList.add("hide");
//     }
//     startb.classList.remove("hide");
//     displayPlayer1.innerText = "";
//     displayPlayer2.innerText = "";
//     gameStarted = false;
// };

// const startGame = () => {
//     player1Name = player1Input.value || "Player 1";
//     player2Name = isVsCPU ? "CPU" : (player2Input.value || "Player 2");
//     player1Input.classList.add("hide");
//     player2Input.classList.add("hide");
//     startb.classList.add("hide");
//     resetb.classList.remove("hide");
//     displayPlayer1.innerText = player1Name;
//     displayPlayer2.innerText = player2Name;
//     gameStarted = true;
//     addRandomObstacles();
// };

// const addRandomObstacles = () => {
//     // Randomly disable 1 or 2 boxes
//     const numObstacles = Math.floor(Math.random() * 2) + 1;
//     let availableBoxes = Array.from(boxes).filter(box => box.innerText === "");
//     for (let i = 0; i < numObstacles; i++) {
//         let randomBox = availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
//         randomBox.disabled = true;
//         randomBox.style.backgroundColor = "grey";
//         availableBoxes = availableBoxes.filter(box => box !== randomBox);
//     }
// };

// const minimax = (newBoard, player) => {
//     const availSpots = newBoard.reduce((acc, val, index) => val === "" ? acc.concat(index) : acc, []);
//     const humanPlayer = "O";
//     const aiPlayer = "X";

//     if (checkWin(newBoard, humanPlayer)) {
//         return { score: -10 };
//     } else if (checkWin(newBoard, aiPlayer)) {
//         return { score: 10 };
//     } else if (availSpots.length === 0) {
//         return { score: 0 };
//     }

//     const moves = [];
//     for (let i = 0; i < availSpots.length; i++) {
//         const move = {};
//         move.index = availSpots[i];
//         newBoard[availSpots[i]] = player;

//         if (player === aiPlayer) {
//             const result = minimax(newBoard, humanPlayer);
//             move.score = result.score;
//         } else {
//             const result = minimax(newBoard, aiPlayer);
//             move.score = result.score;
//         }

//         newBoard[availSpots[i]] = "";
//         moves.push(move);
//     }

//     let bestMove;
//     if (player === aiPlayer) {
//         let bestScore = -10000;
//         for (let i = 0; i < moves.length; i++) {
//             if (moves[i].score > bestScore) {
//                 bestScore = moves[i].score;
//                 bestMove = i;
//             }
//         }
//     } else {
//         let bestScore = 10000;
//         for (let i = 0; i < moves.length; i++) {
//             if (moves[i].score < bestScore) {
//                 bestScore = moves[i].score;
//                 bestMove = i;
//             }
//         }
//     }

//     return moves[bestMove];
// };

// const checkWin = (board, player) => {
//     return winP.some(pattern => pattern.every(index => board[index] === player));
// };

// const makeBotMove = () => {
//     if (!gameStarted) return;
//     let board = Array.from(boxes).map(box => box.innerText);
//     let bestMove = minimax(board, "X");
//     setTimeout(() => {
//         boxes[bestMove.index].innerText = "X";
//         boxes[bestMove.index].style.color = "red";
//         boxes[bestMove.index].disabled = true;
//         checkWinner();
//         turn0 = !turn0;
//     }, 1000);
// };

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (!gameStarted) return;
//         console.log("Box was clicked");
//         if (turn0) { // player 0
//             box.innerText = "O";
//             box.style.color = "orange";
//             turn0 = false;
//             box.disabled = true;
//             checkWinner();
//             if (isVsCPU && !turn0) {
//                 makeBotMove();
//             }
//         } else if (!isVsCPU) { // player X
//             box.innerText = "X";
//             box.style.color = "red";
//             turn0 = true;
//             box.disabled = true;
//             checkWinner();
//         }
//     });
// });

// const disableBoxes = () => {
//     boxes.forEach(box => {
//         box.disabled = true;
//     });
// };

// const enableBoxes = () => {
//     boxes.forEach(box => {
//         box.disabled = false;
//         box.innerText = "";
//         box.style.color = ""; // Reset the color
//     });
// };

// const showWinner = (winner) => {
//     const winnerName = winner === "O" ? player1Name : player2Name;
//     msg.innerText = `Congratulations, Winner is ${winnerName}`;
//     msgcontainer.classList.remove("hide");
//     disableBoxes();
//     gameStarted = false;
// };

// const checkWinner = () => {
//     for (let pattern of winP) {
//         let pos1v = boxes[pattern[0]].innerText;
//         let pos2v = boxes[pattern[1]].innerText;
//         let pos3v = boxes[pattern[2]].innerText;
//         if (pos1v !== "" && pos2v !== "" && pos3v !== "") {
//             if (pos1v === pos2v && pos2v === pos3v) {
//                 console.log("Winner", pos1v);
//                 showWinner(pos1v);
//                 return;
//             }
//         }
//     }
//     if (Array.from(boxes).every(box => box.innerText !== "")) {
//         msg.innerText = "It's a tie!";
//         msgcontainer.classList.remove("hide");
//         disableBoxes();
//         gameStarted = false;
//     }
// };

// const toggleMode = () => {
//     isVsCPU = !isVsCPU;
//     toggleModeb.innerText = isVsCPU ? "Player vs. Player" : "Player vs. Bot";
//     resetGame();
//     player2Input.style.display = isVsCPU ? "none" : "block";
// };

// newgb.addEventListener("click", resetGame);
// resetb.addEventListener("click", resetGame);
// startb.addEventListener("click", startGame);
// toggleModeb.addEventListener("click", toggleMode);

// // Initial setup to hide player2 input if starting in CPU mode
// if (isVsCPU) {
//     player2Input.style.display = "none";
// }


// //  Random Obstacle: addRandomObstacles function randomly disables 1 or 2 boxes at the start of each game, adding a new layer of challenge.
// // Delay Bot's Move: The bot's move is delayed by 1 second using setTimeout in the makeBotMove function.
// // Human Random Move Constraint: Occasionally force the human player to make a random move (not implemented here but can be added similarly to the bot's random move).*/ -->




// let boxes = document.querySelectorAll(".box");
// let resetb = document.querySelector("#reset");
// let newgb = document.querySelector("#btn");
// let startb = document.querySelector("#start");
// let toggleModeb = document.querySelector("#toggle-mode");
// let msgcontainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let player1Input = document.querySelector("#player1");
// let player2Input = document.querySelector("#player2");
// let displayPlayer1 = document.querySelector("#display-player1");
// let displayPlayer2 = document.querySelector("#display-player2");
// let player1Name = "";
// let player2Name = "";
// let turn0 = true;
// let isVsCPU = false;
// let gameStarted = false;

// const winP = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// // Game description
// const gameDescription = "Welcome to Tic-Tac-Toe! Play against a friend or challenge the CPU. Click a box to make your move and try to get three in a row to win.";

// const resetGame = () => {
//     turn0 = true;
//     enableBoxes();
//     msgcontainer.classList.add("hide");
//     resetb.classList.add("hide");
//     player1Input.classList.remove("hide");
//     if (!isVsCPU) {
//         player2Input.classList.remove("hide");
//     } else {
//         player2Input.classList.add("hide");
//     }
//     startb.classList.remove("hide");
//     displayPlayer1.innerText = "";
//     displayPlayer2.innerText = "";
//     gameStarted = false;
// };

// const startGame = () => {
//     player1Name = player1Input.value || "Player 1";
//     player2Name = isVsCPU ? "Bot" : (player2Input.value || "Player 2");
//     player1Input.classList.add("hide");
//     player2Input.classList.add("hide");
//     startb.classList.add("hide");
//     resetb.classList.remove("hide");
//     displayPlayer1.innerText = player1Name;
//     displayPlayer2.innerText = player2Name;
//     gameStarted = true;
//     addRandomObstacles();
// };

// const addRandomObstacles = () => {
//     // Randomly disable 1 or 2 boxes
//     const numObstacles = Math.floor(Math.random() * 2) + 1;
//     let availableBoxes = Array.from(boxes).filter(box => box.innerText === "");
//     for (let i = 0; i < numObstacles; i++) {
//         let randomBox = availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
//         randomBox.disabled = true;
//         randomBox.style.backgroundColor = "grey";
//         availableBoxes = availableBoxes.filter(box => box !== randomBox);
//     }
// };

// const minimax = (newBoard, player) => {
//     const availSpots = newBoard.reduce((acc, val, index) => val === "" ? acc.concat(index) : acc, []);
//     const humanPlayer = "O";
//     const aiPlayer = "X";

//     if (checkWin(newBoard, humanPlayer)) {
//         return { score: -10 };
//     } else if (checkWin(newBoard, aiPlayer)) {
//         return { score: 10 };
//     } else if (availSpots.length === 0) {
//         return { score: 0 };
//     }

//     const moves = [];
//     for (let i = 0; i < availSpots.length; i++) {
//         const move = {};
//         move.index = availSpots[i];
//         newBoard[availSpots[i]] = player;

//         if (player === aiPlayer) {
//             const result = minimax(newBoard, humanPlayer);
//             move.score = result.score;
//         } else {
//             const result = minimax(newBoard, aiPlayer);
//             move.score = result.score;
//         }

//         newBoard[availSpots[i]] = "";
//         moves.push(move);
//     }

//     let bestMove;
//     if (player === aiPlayer) {
//         let bestScore = -10000;
//         for (let i = 0; i < moves.length; i++) {
//             if (moves[i].score > bestScore) {
//                 bestScore = moves[i].score;
//                 bestMove = i;
//             }
//         }
//     } else {
//         let bestScore = 10000;
//         for (let i = 0; i < moves.length; i++) {
//             if (moves[i].score < bestScore) {
//                 bestScore = moves[i].score;
//                 bestMove = i;
//             }
//         }
//     }

//     return moves[bestMove];
// };

// const checkWin = (board, player) => {
//     return winP.some(pattern => pattern.every(index => board[index] === player));
// };

// const makeBotMove = () => {
//     if (!gameStarted) return;
//     let board = Array.from(boxes).map(box => box.innerText);
//     let bestMove = minimax(board, "X");
//     setTimeout(() => {
//         boxes[bestMove.index].innerText = "X";
//         boxes[bestMove.index].style.color = "red";
//         boxes[bestMove.index].disabled = true;
//         checkWinner();
//         turn0 = !turn0;
//     }, 1000);
// };

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (!gameStarted) return;
//         console.log("Box was clicked");
//         if (turn0) { // player 0
//             box.innerText = "O";
//             box.style.color = "orange";
//             turn0 = false;
//             box.disabled = true;
//             checkWinner();
//             if (isVsCPU && !turn0) {
//                 makeBotMove();
//             }
//         } else if (!isVsCPU) { // player X
//             box.innerText = "X";
//             box.style.color = "red";
//             turn0 = true;
//             box.disabled = true;
//             checkWinner();
//         }
//     });
// });

// const disableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// };

// const enableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//         box.style.color = ""; // Reset the color
//         box.style.backgroundColor = ""; // Reset the background color
//     }
// };

// const showWinner = (winner) => {
//     const winnerName = winner === "O" ? player1Name : player2Name;
//     msg.innerText = `Congratulations, Winner is ${winnerName}`;
//     msgcontainer.classList.remove("hide");
//     disableBoxes();
//     gameStarted = false;
// };

// const checkWinner = () => {
//     for (let pattern of winP) {
//         let pos1v = boxes[pattern[0]].innerText;
//         let pos2v = boxes[pattern[1]].innerText;
//         let pos3v = boxes[pattern[2]].innerText;
//         if (pos1v !== "" && pos2v !== "" && pos3v !== "") {
//             if (pos1v === pos2v && pos2v === pos3v) {
//                 console.log("Winner", pos1v);
//                 showWinner(pos1v);
//                 return;
//             }
//         }
//     }
//     if (Array.from(boxes).every(box => box.innerText !== "")) {
//         msg.innerText = "It's a tie!";
//         msgcontainer.classList.remove("hide");
//         disableBoxes();
//         gameStarted = false;
//     }
// };

// const toggleMode = () => {
//     isVsCPU = !isVsCPU;
//     toggleModeb.innerText = isVsCPU ? "Player vs. Player" : "Player vs. Bot";
//     resetGame();
//     player2Input.style.display = isVsCPU ? "none" : "block";
// };

// newgb.addEventListener("click", resetGame);
// resetb.addEventListener("click", resetGame);
// startb.addEventListener("click", startGame);
// toggleModeb.addEventListener("click", toggleMode);

// // Initial setup to hide player2 input if starting in CPU mode
// if (isVsCPU) {
//     player2Input.style.display = "none";
// }




let boxes = document.querySelectorAll(".box");
let resetb = document.querySelector("#reset");
let newgb = document.querySelector("#btn");
let startb = document.querySelector("#start");
let toggleModeb = document.querySelector("#toggle-mode");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let player1Input = document.querySelector("#player1");
let player2Input = document.querySelector("#player2");
let displayPlayer1 = document.querySelector("#display-player1");
let displayPlayer2 = document.querySelector("#display-player2");
let player1Name = "";
let player2Name = "";
let turn0 = true;
let isVsCPU = false;
let gameStarted = false;

const winP = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Game description
const gameDescription = "Welcome to Tic-Tac-Toe! Play against a friend or challenge the CPU. Click a box to make your move and try to get three in a row to win.";

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    resetb.classList.add("hide");
    player1Input.classList.remove("hide");
    if (!isVsCPU) {
        player2Input.classList.remove("hide");
    } else {
        player2Input.classList.add("hide");
    }
    startb.classList.remove("hide");
    displayPlayer1.innerText = "";
    displayPlayer2.innerText = "";
    gameStarted = false;
};

const startGame = () => {
    player1Name = player1Input.value || "Player 1";
    player2Name = isVsCPU ? "Bot" : (player2Input.value || "Player 2");
    player1Input.classList.add("hide");
    player2Input.classList.add("hide");
    startb.classList.add("hide");
    resetb.classList.remove("hide");
    displayPlayer1.innerText = player1Name;
    displayPlayer2.innerText = player2Name;
    gameStarted = true;
    addRandomObstacles();
};

const addRandomObstacles = () => {
    // Randomly disable exactly 1 box
    let availableBoxes = Array.from(boxes).filter(box => box.innerText === "");
    if (availableBoxes.length > 0) {
        let randomBox = availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
        randomBox.disabled = true;
        randomBox.style.backgroundColor = "grey";
    }
};

const minimax = (newBoard, player) => {
    const availSpots = newBoard.reduce((acc, val, index) => val === "" ? acc.concat(index) : acc, []);
    const humanPlayer = "O";
    const aiPlayer = "X";

    if (checkWin(newBoard, humanPlayer)) {
        return { score: -10 };
    } else if (checkWin(newBoard, aiPlayer)) {
        return { score: 10 };
    } else if (availSpots.length === 0) {
        return { score: 0 };
    }

    const moves = [];
    for (let i = 0; i < availSpots.length; i++) {
        const move = {};
        move.index = availSpots[i];
        newBoard[availSpots[i]] = player;

        if (player === aiPlayer) {
            const result = minimax(newBoard, humanPlayer);
            move.score = result.score;
        } else {
            const result = minimax(newBoard, aiPlayer);
            move.score = result.score;
        }

        newBoard[availSpots[i]] = "";
        moves.push(move);
    }

    let bestMove;
    if (player === aiPlayer) {
        let bestScore = -10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = 10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
};

const checkWin = (board, player) => {
    return winP.some(pattern => pattern.every(index => board[index] === player));
};

const makeBotMove = () => {
    if (!gameStarted) return;
    let board = Array.from(boxes).map(box => box.innerText);
    let bestMove = minimax(board, "X");
    setTimeout(() => {
        boxes[bestMove.index].innerText = "X";
        boxes[bestMove.index].style.color = "red";
        boxes[bestMove.index].disabled = true;
        checkWinner();
        turn0 = !turn0;
    }, 1000);
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!gameStarted) return;
        console.log("Box was clicked");
        if (turn0) { // player 0
            box.innerText = "O";
            box.style.color = "orange";
            turn0 = false;
            box.disabled = true;
            checkWinner();
            if (isVsCPU && !turn0) {
                makeBotMove();
            }
        } else if (!isVsCPU) { // player X
            box.innerText = "X";
            box.style.color = "red";
            turn0 = true;
            box.disabled = true;
            checkWinner();
        }
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.color = ""; // Reset the color
        box.style.backgroundColor = ""; // Reset the background color
    }
};

const showWinner = (winner) => {
    const winnerName = winner === "O" ? player1Name : player2Name;
    msg.innerText = `Congratulations, Winner is ${winnerName}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
    gameStarted = false;
};

const showGameOver = () => {
    msg.innerText = "Game Over! No more moves.";
    msgcontainer.classList.remove("hide");
    disableBoxes();
    gameStarted = false;
};

const checkWinner = () => {
    for (let pattern of winP) {
        let pos1v = boxes[pattern[0]].innerText;
        let pos2v = boxes[pattern[1]].innerText;
        let pos3v = boxes[pattern[2]].innerText;
        if (pos1v !== "" && pos2v !== "" && pos3v !== "") {
            if (pos1v === pos2v && pos2v === pos3v) {
                console.log("Winner", pos1v);
                showWinner(pos1v);
                return;
            }
        }
    }
    if (Array.from(boxes).every(box => box.innerText !== "")) {
        showGameOver();
    }
};

const toggleMode = () => {
    isVsCPU = !isVsCPU;
    toggleModeb.innerText = isVsCPU ? "Player vs. Player" : "Player vs. Bot";
    resetGame();
    player2Input.style.display = isVsCPU ? "none" : "block";
};

newgb.addEventListener("click", resetGame);
resetb.addEventListener("click", resetGame);
startb.addEventListener("click", startGame);
toggleModeb.addEventListener("click", toggleMode);

// Initial setup to hide player2 input if starting in CPU mode
if (isVsCPU) {
    player2Input.style.display = "none";
}
