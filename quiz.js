const form = document.querySelector(".form-quiz");
const submitButton = document.querySelector("#submit-btn-quiz");
const outputElement = document.querySelector("#ans");
const correctAns =["90°", "right angled"];

submitButton.addEventListener("click", validateAns );

function validateAns(){
    let score = 0;
     let index = 0;
     const data = new FormData(form);
     for(value of data.values()){
          if(value === correctAns[index]){
              score = score+1;
          }
          index++;
        }     
        outputElement.innerText = "your score is " + score;
}
