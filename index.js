
document.getElementById("inputForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  // Get the value of the age input
  var age = document.getElementById("age").value;
  
  // Get the selected gender
  var genderSelect = document.getElementById("gender");
  var gender = genderSelect.options[genderSelect.selectedIndex].value;
  
  // Get the selected marital status
  var maritalStatusSelect = document.getElementById("maritalStatus");
  var maritalStatus = maritalStatusSelect.options[maritalStatusSelect.selectedIndex].value; 

  if (maritalStatus === "married") {
    alert("Driver is insured");
} else if (maritalStatus === "single" && gender === "male" && age>30) {
    alert("Driver is insured");
} else if (maritalStatus === "single" && gender === "female" && age>25) {
    alert("Driver is insured");
} else {
    alert("Driver is not insured");
}
});


