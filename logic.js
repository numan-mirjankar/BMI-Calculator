
let heightInput = document.getElementById("height");
let weightInput = document.getElementById("weight");
let calculateButton = document.getElementById("calculate");
let display = document.getElementById("display");


calculateButton.addEventListener("click", () => {
   
    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    
    if (isNaN(height) || isNaN(weight)) {
        display.textContent = "Please enter valid numbers for height and weight.";
        return;
    }
    if (height <= 0) {
        display.textContent = "Height must be greater than zero.";
        return;
    }

    
    let bmi = (weight * 10000) / (height * height);

  if(bmi>18.5 && bmi<25){
    display.textContent = `Your BMI is NORMAL ${bmi.toFixed(2)}`;
  }
  else if(bmi<18.5){
    display.textContent = `Your BMI is UNDERWEIGHT ${bmi.toFixed(2)}`;
  }
  else{
    display.textContent = `Your BMI is OVERWEIGHT ${bmi.toFixed(2)}`;
  }
});
