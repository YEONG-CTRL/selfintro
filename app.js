let ageInput = document.getElementById("ageInput");

function guessAge() {
  if (ageInput.value === 25) {
    alert("you're right!");
  } else {
    alert("NO!");
  }
}

.ageInput.addEventListener("change", guessAge);