function validateForm() {
  // Retrieve input values
  const name = document.getElementById("name").value;
  const salary = document.getElementById("salary").value;
  const birthday = document.getElementById("birthday").value;
  const phone = document.getElementById("phone").value;

  // Create error element
  const errorElement = document.createElement("p");
  errorElement.style.color = "red";

  // Validate conditions
  if (name.length <= 2) {
    errorElement.textContent = "Name must be longer than 2 characters.";
    document.body.appendChild(errorElement);
  }

  if (salary <= 10000 || salary >= 16000) {
    errorElement.textContent = "Salary must be between 10,000 and 16,000.";
    document.body.appendChild(errorElement);
  }

  if (!birthday) {
    errorElement.textContent = "Please enter your birthday.";
    document.body.appendChild(errorElement);
  }

  if (phone.length !== 10 || isNaN(phone)) {
    errorElement.textContent = "Phone must be 10 digits long.";
    document.body.appendChild(errorElement);
  }

  // If all conditions pass, submit the form or perform further actions
  //alert('Form submitted successfully!');
}
