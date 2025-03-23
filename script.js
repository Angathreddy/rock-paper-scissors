let choices = document.querySelectorAll(".choice");

alert(" Welcome to my website!😊😊")

let result = confirm(" Do you want to continue?🤗🤗")
console.log(result)

let y = prompt("Are You Ready to Defeat Me!!😈😈😈 ") 
console.log(result)

// setInterval(function () { alert(" hee hee hee heee 😁😁😁 ")
//     console.log("This message appears every 2 seconds. ");
// },10000);

let compChoice = ()=>{
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
let compScore=0;
let userScore = 0;
let comp =document.querySelector("#compScore")
let user = document.querySelector("#userScore")
let winnerDisplay=()=>{
    comp.innerText = `${compScore} Comp`;
    user.innerText = `${userScore} Your`;
}
choices.forEach(function userChoice(choice){
    choice.addEventListener("click",()=>{
        let choose =choice.getAttribute("id");
        if(compChoice()===choose){
            winner.innerText="Match Draw";
            winner.style.color = "black";
        
        }else{
            if((compChoice ()=== "rock" && choose === "scissors") || (compChoice()=== "paper" && choose === "rock" )||( compChoice() === "scissors" && choose === "paper")){
                winner.innerText="You lose";
                winner.style.color = "red";
                alert(" hee hee hee hee hee 😁😁😁")
                compScore++;
                winnerDisplay();
            }else{
                winner.innerText="You win"
                userScore++;
                winner.style.color = "green";
                alert(" Ohno 😥😥😥")
                winnerDisplay();
            }
        }
    })
});
let winner = document.querySelector("h2");