// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordMin = 8;
var passwordMax = 128;
var charNum = "0123456789";
var charLow = "abcdefghijklmnopqrstuvwxyz";
var charSpecial = "!@#$%^&*()";
var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function isValidLength(passwordLength) {
  if (isNaN(passwordLength)) {
    return false;
  }
  if (passwordMin <= passwordLength && passwordLength <= passwordMax) {
    return true;
  }
  return false;
}

function getPassWordOptions() {
  var includeUpperCase = confirm("Message");
  var includeLowerCase = confirm("Message");
  var includeNumeric = confirm("Message");
  var includeSpecial = confirm("Message");
  var passwordLength = parseInt(
    prompt("Enter password length", passwordMin),
    10
  );
  while (!isValidLength(passwordLength)) {
    passwordLength = parseInt(
      prompt("Not valid password length", passwordLength),
      10
    );
  }
  return {
    upper: includeUpperCase,
    lower: includeLowerCase,
    numeric: includeNumeric,
    special: includeSpecial,
    length: passwordLength,
  };
}

function generatePassword() {
  var options = getPassWordOptions();
  var result = "";
  var characters = "";

  if (options.upper) {
    characters += charUp;
  }

  if (options.lower) {
    characters += charLow;
  }

  if (options.special) {
    characters += charSpecial;
  }

  if (options.numeric) {
    characters += charNum;
  }
  for (var i = 0; i < options.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// did you invoke the function? did you connect the functions to where it needs to go? Does it need to go to a new function? can you makes your functions any simpler. Can you take some of the variables in the functions and make them global? establish array element for all characters
