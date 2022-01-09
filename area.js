const input = document.querySelectorAll(".input-value");
const button = document.querySelector("#btn-area");
const output = document.querySelector("#output-area");


button.addEventListener("click",validateArea);


function validateArea(){
  const a = Number(input[0].value);
  const b = Number(input[1].value);
  const area = 0.5*a*b;
  if (a>0 && b>0){
      output.innerText = "Area of a triangle is "+area+"cm²"
  }else{

      output.innerText =  "Please enter any positive value "
    }
}