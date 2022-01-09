const inputValue = document.querySelectorAll(".input-value");
const submitButton = document.querySelector("#btn-hypotenuse");
const outputAns = document.querySelector("#output-hypotenuse");

submitButton.addEventListener("click", validateHypo)

function validateHypo(){
    const value1 = Number(inputValue[0].value);
    const value2 = Number(inputValue[1].value);
    if(value1>0 && value2>0){
        let Ans = calculateHypo(value1, value2);
        Ans = Ans.toFixed(2);
        // console.log(Ans);
        outputAns.innerText = " The Hypotenuse is " + Ans +"cm";
    }
    else{
        outputAns.innerText = "Please enter positive value only" ;
      }

}
function calculateHypo(input1, input2){
    const square = Math.sqrt(input1**2 + input2**2); 
    return square;
}
