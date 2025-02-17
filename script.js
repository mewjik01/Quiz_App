const questions= [
    {
        question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
        answers:[
            {text:"Narmada", correct:"true"},
            {text:"Mahanadi", correct:"false"},
            {text:"Son", correct:"false"},
            {text:"Netravati", correct:"false"},
        ]
    }, 
    {
        question: "The Central Rice Research Station is situated in?",
        answers:[
            {text:"Chennai", correct:"false"},
            {text:"Cuttack", correct:"true"},
            {text:"Bangalore", correct:"false"},
            {text:"Quilon", correct:"false"},
        ]
    }, 
    {
        question: "Who among the following wrote Sanskrit grammar?",
        answers:[
            {text:"Kalidasa", correct:"false"},
            {text:"Charak", correct:"false"},
            {text:"Panini", correct:"true"},
            {text:"Aryabhatta", correct:"false"},
        ]
    }, 
    {
        question: "Which among the following headstreams meets the Ganges in last?",
        answers:[
            {text:"Alaknanda", correct:"false"},
            {text:"Pindar", correct:"false"},
            {text:"Mandakini", correct:"false"},
            {text:"Bhagirathi", correct:"true"},
        ]
    }, 
    {
        question: " The metal whose salts are sensitive to light is?",
        answers:[
            {text:"Zinc", correct:"false"},
            {text:"Silver", correct:"true"},
            {text:"Copper", correct:"false"},
            {text:"Aluminium", correct:"false"},
        ]
    }
]; 
const questionElement= document.querySelector("#question"); 
const answerButton= document.querySelector("#answer-buttons"); 
const nextButton= document.querySelector("#next-btn"); 
let currentQuestionIndex=0; 
let score= 0; 
function startQuiz(){
    currentQuestionIndex=0; 
    score=0; 
    nextButton.innerHTML="Next"; 
    showQuestion(); 
}
function showQuestion(){
    resetState(); 
    let currentQuestion= questions[currentQuestionIndex]; 
    let questionNo= currentQuestionIndex+1; 
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question; 
    currentQuestion.answers.forEach(answer=>{
        const button= document.createElement("button"); 
        button.innerHTML= answer.text; 
        button.classList.add("btn"); 
        answerButton.appendChild(button); 
        if(answer.correct){
            button.dataset.correct=answer.correct; 
        }
        button.addEventListener("click",selectAnswer); 
    })
}
function resetState(){
    nextButton.style.display="none"; 
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild); 
    }
}
function selectAnswer(e){
   const selectedBtn= e.target; 
   const isCorrect= selectedBtn.dataset.correct === "true"; 
   if(isCorrect){
    selectedBtn.classList.add("correct"); 
    score++; 
   }
   else{
    selectedBtn.classList.add("incorrect"); 
   }
   Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct"); 
    }
    button.disabled="true"; 
   })
   nextButton.style.display="block"; 
}
function showScore(){
    resetState(); 
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!!`; 
    nextButton.innerHTML="Play Again"; 
    nextButton.style.display="block"; 
}
function handleNextButton(){
    currentQuestionIndex++; 
    if(currentQuestionIndex<questions.length){
        showQuestion(); 
    }
    else{
        showScore(); 
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton(); 
    }
    else{
        startQuiz(); 
    }
})
startQuiz(); 
