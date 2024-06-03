const heightInput = document.querySelector(".height");
const weightInput = document.querySelector(".weight");
const calculateButton = document.querySelector(".calculate");
const displayResult = document.querySelector(".result");

calculateButton.addEventListener("click", () => {
  const height = parseInt(heightInput.value);
  const weight = parseInt(weightInput.value);

  if (height === "" || height < 0 || isNaN(height)) {
    displayResult.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    displayResult.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const result = (weight / (height * height / 10000)).toFixed(2);

    if (result < 18.6) {
      displayResult.innerHTML = `Your BMI is ${result}. You are underweight`;
    } else if (result > 18.6 && result < 24.9) {
      displayResult.innerHTML = `Your BMI is ${result}. You are normal`;
    } else {
      displayResult.innerHTML = `Your BMI is ${result}. You are overweight`;
    }
  }
});
