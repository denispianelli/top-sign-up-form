const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("user_password");
const confirmPassword = document.getElementById("user_confirm_password");
const emailError = email.nextElementSibling;
const passwordError = password.nextElementSibling;
const confirmPasswordError = confirmPassword.nextElementSibling;

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

window.addEventListener("load", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.className = "valid";
    emailError.textContent = "";
  } else {
    email.className = "invalid";
  }
});

password.addEventListener("input", () => {
  const isValid = password.value.length === 0 || password.value.length >= 6;
  if (isValid) {
    password.className = "valid";
    passwordError.textContent = "";
  } else {
    password.className = "invalid";
    passwordError.textContent = "is too short (minimum is 6 characters)";
  }
});

confirmPassword.addEventListener("input", () => {
  const isValid =
    confirmPassword.value.length === 0 ||
    confirmPassword.value === password.value;
  if (isValid) {
    confirmPassword.className = "valid";
    confirmPasswordError.textContent = "";
  } else {
    confirmPassword.className = "invalid";
    confirmPasswordError.textContent = "passwords do not match";
  }
});

form.addEventListener("submit", (e) => {
  const isEmailValid = emailRegExp.test(email.value);
  if (!isEmailValid) {
    e.preventDefault();
    email.className = "invalid";
    emailError.textContent = "is not a valid email";
  } else {
    email.className = "valid";
    emailError.textContent = "";
  }

  const isPasswordValid = password.value.length >= 6;
  if (!isPasswordValid) {
    e.preventDefault();
    password.className = "invalid";
    passwordError.textContent = "is too short (minimum is 6 characters)";
  } else {
    password.className = "valid";
    passwordError.textContent = "";
  }

  const isConfirmPasswordValid = password.value === confirmPassword.value;
  if (!isConfirmPasswordValid) {
    e.preventDefault();
    confirmPassword.className = "invalid";
    confirmPasswordError.textContent = "passwords do not match";
  } else {
    confirmPassword.className = "valid";
    confirmPasswordError.textContent = "";
  }
});
