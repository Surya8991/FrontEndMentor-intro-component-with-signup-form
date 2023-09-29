function validateForm() {
  // Reset error messages
  document.getElementById("first-name-error").textContent = "";
  document.getElementById("last-name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("password-error").textContent = "";

  // Get form values
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const form_status = document.getElementById("form-status");

  // Reset form status
  form_status.textContent = "";

  let hasError = false;

  // Check for empty fields
  if (firstName === "") {
    document.getElementById("first-name-error").textContent = "First Name cannot be empty";
    hasError = true;
  }

  if (lastName === "") {
    document.getElementById("last-name-error").textContent = "Last Name cannot be empty";
    hasError = true;
  }

  if (email === "") {
    document.getElementById("email-error").textContent = "Email cannot be empty";
    hasError = true;
  }

  if (password === "") {
    document.getElementById("password-error").textContent = "Password cannot be empty";
    hasError = true;
  }

  // Check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("email-error").textContent = "Looks like this is not an email";
    hasError = true;
  }

  // If there are errors, prevent form submission
  if (hasError) {
    return false;
  }

  // If no errors, you can submit the form here
  form_status.textContent = "Congrats on Submitting a Form✨";
  return true; // Allow form submission
}
