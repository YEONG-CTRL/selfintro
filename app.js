function myfunction() {
  var x = document.getElementById("ageInput").value;
  if (parseInt(x) === 25) {
    alert("yes!");
  } else if (parseInt(x) < 25) {
    alert("Older than that!");
  } else {
    alert("Younger than that!");
  }
}
