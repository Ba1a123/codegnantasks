document.getElementById("register-form").style.display = "none";

document.getElementById("register-link").addEventListener("click", function() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
});

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  // Perform login authentication
  // Add your own login authentication logic here
  
  // Example authentication logic (not secure, for demonstration purposes only)
  if (email === "example@example.com" && password === "password") {
    alert("Login successful");
  } else {
    alert("Invalid email or password");
  }
});

document.getElementById("register-form").addEventListener("submit", function(e) {
  e.preventDefault();
  var email = document.getElementById("reg-email").value;
  var password = document.getElementById("reg-password").value;
  
  // Perform registration
  // Add your own registration logic here
  
  // Example registration logic (not secure, for demonstration purposes only)
  alert("Registration successful");
  document.getElementById("register-form").reset();
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
});
