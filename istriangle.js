const angle = document.querySelectorAll(".angle");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector(".output-triangle");

submitBtn.addEventListener("click", checkOutput )


function checkOutput(){
    var angle1 = Number(angle[0].value);
    var angle2 = Number(angle[1].value);
    var angle3 = Number(angle[2].value);
    if( angle1&& angle2 && angle3){

        const  sumOfAngles = validateSum(angle1, angle2, angle3);
        if(sumOfAngles===180){
            const outText= triangleType(angle1, angle2, angle3);
            output.innerText = outText;
        }else{
            output.innerText = "ouch!...it doesn't form a triangle"
            
        }
}
else{
    output.innerText = "Enter all the 3 inputs..."
}
}
function validateSum(a1 , a2, a3){
    const sum = a1 +a2 +a3;
    return sum;
}
function triangleType(angle1, angle2, angle3){
    if(angle1==angle2 &&angle2==angle3){
       return "yayyy!..it forms a triangle. It's a Equilateral triangle."
    } else if(angle1>90|| angle1>90 ||angle2>90){
        return "yayyy!..it forms a triangle. It's a Obtuse triangle."
    }else if(angle1==90|| angle1==90 ||angle2==90){
        return "yayyy!..it forms a triangle. It's a right angled triangle."
    }
    else{
        return "yayyy!..it forms a triangle. It's a acute triangle."
    }
}