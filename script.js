let userScore=0;
let compUser=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");
const resetBtn=document.querySelector("#reset-btn");



const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText="Game was draw. Play again.";
    msg.style.backgroundColor="#081b31"
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin)
    {
        console.log("You win")
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        user.innerText++;
    }
    else 
    {
        console.log("You lose!");
        msg.innerText=`You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
        comp.innerText++;
    }
    
};

choices.forEach((choice)=> {
    choice.addEventListener("click",()=> {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

const playGame= (userChoice) => {
    console.log("User choice is",userChoice);
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("Comp choice is",compChoice);
    
    if(userChoice===compChoice)
    {
        //draw game
        drawGame();
    }
    else 
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            //Scissor,Paper
            userWin=compChoice==="paper" ? false : true;
        }

        else if(userChoice==="paper")
        {
            //scissor,rock
            userWin=compChoice==="scissor" ? false : true;
        }

        else 
        {
            //rock,paper
            userWin=compChoice==="rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}
