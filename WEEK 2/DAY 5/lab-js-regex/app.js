/* Fill your code*/

function formValidate(){
  let name_regex = /^.{8,15}$/;
  let email_regex = /\S+@\S+\.|\_\S+/;
  let password_regex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,20}$/;
  let phone_regex = /^[6-9]\d{9}$/;

  let name = document.getElementById("NAme");
  let add = document.getElementById("ADDress");
  let email = document.getElementById("EMail");
  let password = document.getElementById("PASSword");
  let confirm_password = document.getElementById("CPAssword");
  let phone = document.getElementById("PHone");

  let error_name = document.getElementById("name");
  let error_add = document.getElementById("address");
  let error_email = document.getElementById("email");
  let error_password = document.getElementById("pwd");
  let error_cpassword = document.getElementById("cpwd");
  let error_phone = document.getElementById("phone");

  let count = 0;

  if (name_regex.test(name.value)) {
    error_name.textContent = "";
    count++;
  } else {
    error_name.textContent = "Atleast 8 to 15 Character Required";
  }

  if (add.value == "") {
    error_add.textContent = "Address cannot be empty. Kindly fill ";
  } else {
    error_add.textContent = "";
    count++;
  }

  if (email.value == "") {
    error_email.textContent = "Email cannot be empty. Kindly fill ";
  } else if (email_regex.test(email.value)) {
    error_email.textContent = "";
    count++;
  } else {
    error_email.textContent = "Enter a vaild Email";
  }

  if (password.value == "") {
    error_password.textContent = "Kindly fill the Password";
  } else if (password_regex.test(password.value)) {
    error_password.textContent = "";
    count++;
  } else {
    error_password.textContent =
      "Must contain 1 uppercase, 1 lowercase, 1 number & any Symbols";
  }

  if (confirm_password.value == "") {
    error_cpassword.textContent = "Kindly confirm your password";
  } else if (confirm_password.value == password.value) {
    error_cpassword.textContent = "";
    count++;
  } else {
    error_confirm_password.textContent =
      "Password and confirm password must be same";
  }

  if (phone.value == "") {
    error_phone.textContent = "Kindly fill the phone number";
  } else if (phone_regex.test(phone.value)) {
    error_phone.textContent = "";
    count++;
  } else {
    error_phone.textContent = "Enter a valid 10 digit number";
  }

  if (count === 6) {
    alert("Regex Validation Success");
  }
}