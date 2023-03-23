let result = document.getElementById("p");
// function to check weight
function checkWeight() {
  result.style.color = "red";
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  if (age == "" || weight == "") {
    result.innerHTML = "Invalid input";
  } else if (age > 100 || age < 0) {
    result.innerHTML = "Invalid input";
  } else if (weight > 200 || weight < 0) {
    result.innerHTML = "Invalid input";
  } else {
    bmiCheck(5, 7, 15, 20, age, weight);
    bmiCheck(8, 10, 21, 25, age, weight);
    bmiCheck(11, 15, 26, 30, age, weight);
    bmiCheck(16, 20, 31, 40, age, weight);
  }
}
// function to apply conditions on given weight and age
function bmiCheck(ageStart, ageEnd, weightStart, weightEnd, age, weight) {
  if (age >= ageStart && age <= ageEnd) {
    if (weight >= weightStart && weight <= weightEnd) {
      result.style.color = "green";
      result.innerHTML = "Fit";
    } else if (weight < weightStart) {
      result.innerHTML = "Underweight";
    } else if (weight > weightEnd) {
      result.innerHTML = "Overweight";
    }
  }
}
