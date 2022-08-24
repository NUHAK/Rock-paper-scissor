const handOptions = {
    "rock":"/images/rock.png",
    "paper":"/images/paper.png",
    "scissor":"/images/scissor.png"
}
let SCORE=0;

const selectHand=(hand)=>{
console.log(hand);
//hide after selecting
let hands=document.querySelector(".select");
hands.style.display="none";
//jumping new content
let result=document.querySelector(".results");
result.style.display="flex";
//set the selected one in result

document.getElementById("userpicked").src =handOptions[hand];


let cpHand=computerHand();
refree(hand,cpHand);
}
const computerHand=()=>{
    let hands=["rock","paper","scissor"];
    let cpHand=hands[Math.floor(Math.random()*3)];


    document.getElementById("computerpicked").src =handOptions[cpHand];

    return cpHand;
    

};
const refree=(userHand,cpHand)=>{
    if(userHand=="paper" && cpHand=="scissor"){
        setDecision("YOU LOSE!")

    }
     if(userHand=="paper" && cpHand=="rock"){
        setDecision("YOU WIN")
        setScore(SCORE+1)
    }
    if(userHand=="paper" && cpHand=="paper"){
        setDecision("IT'S  A  TIE!");
    }
    if(userHand=="rock" && cpHand=="scissor"){
        setDecision("YOU WIN!");
        setScore(SCORE+1);
    }
    if(userHand=="rock" && cpHand=="paper"){
        setDecision("YOU LOSE!");

}
if(userHand=="rock" && cpHand=="rock"){
    setDecision("IT'S  A  TIE!");

}
if(userHand=="scissor" && cpHand=="scissor"){
    setDecision("IT'S  A  TIE!");

}
if(userHand=="scissor" && cpHand=="rock"){
    setDecision("YOU LOSE!");

}
if(userHand=="scissor" && cpHand=="paper"){
    setDecision("YOU WIN!");
    setScore(SCORE+1);
}
}
const setDecision=(decision)=>{
    document.querySelector(".decision h1").innerText=decision;

}

const setScore = (score)=>{
    SCORE=score;
    document.querySelector(".score h1").innerText=score;
}
const restart=()=>{
    let hands=document.querySelector(".select");
hands.style.display="flex";
//jumping new content
let result=document.querySelector(".results");
result.style.display="none";
}