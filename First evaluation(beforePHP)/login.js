window.onload = function () {
  var message = localStorage.getItem("signupSuccess");
  if (message) {
    alert(message);
    localStorage.removeItem("signupSuccess");
  }

  const rememberMeCheckbox = document.getElementById('rememberMe');
  const emailInput = document.getElementById('email');

  if (localStorage.rememberMe && localStorage.rememberMe !== '') {
    rememberMeCheckbox.checked = true;
    emailInput.value = localStorage.email;
  } else {
    rememberMeCheckbox.checked = false;
    emailInput.value = '';
  }

  document.getElementById("loginBtn").onclick = function () {
    var email = document.getElementById("email").value.toLowerCase().trim();
    var password = document.getElementById("password").value;

    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var formError = document.getElementById("formError");

    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    formError.innerHTML = "";

    var valid = true;

    if (email === "") {
      emailError.innerHTML = "Email is required.";
      valid = false;
    }

    if (password === "") {
      passwordError.innerHTML = "Password is required.";
      valid = false;
    }

    if (!valid) {
      formError.innerHTML = "Please fix the errors above.";
      return false;
    }

    if (email === "user" && password === "user") {
        const rememberMeCheckbox = document.getElementById('rememberMe');
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('email', email);
            localStorage.setItem('rememberMe', 'true');
        } else {
            localStorage.removeItem('email');
            localStorage.removeItem('rememberMe');
        }
        window.location.href = 'home.html';

    } else {
        formError.innerHTML = "Invalid email or password!";
    }
    
    document.getElementById("password").value = '';
    return false;
  };
};
