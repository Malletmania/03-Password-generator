// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberOfCharacters = 16;
var specialCharacters = true;
var numericConfirm = true;
var lowerCaseConfirm = true;
var upperCaseConfirm = true;
var result = arr[Math.floor(Math.random() * arr.length)];
// console.log(Array.prototype);
// var finalPassword = window.confirm("Need a new password?")

// if( finalPassword === true ){
//    var newPassword = window.prompt("Enter password below")
//     console.log(newPassword);
// }
// else {
//   console.log (typeof password)
// }
// return finalPassword;

  function askHowManyCharacters() {
    var characterCount = window.confirm("How many characters would you like your password to contain")
    console.log(characterCount)
    return characterCount;
  }

  function askSpecialCharacters() {
    var specialCharacters = window.confirm("click ok for accepting special characters in password")
    console.log(specialCharacters)
    return specialCharacters;
  }

  function askNumericCharacters() {
    var numericConfirm = window.confirm("Click ok for accepting numeric characters in password")
    console.log(numericConfirm)
    return numericConfirm;
  }

  function askLowerCase() {
    var lowerCaseConfirm = window.confirm("Click ok to verify password contains lower case letters")
    console.log(lowerCaseConfirm)
    return lowerCaseConfirm;
  }

  function askUpperCase() {
    var upperCaseConfirm = window.confirm("Click ok to verify your password contains upper case letters")
    console.log(upperCaseConfirm)
    return upperCaseConfirm;
  }

function generatePassword() {

  var finalPassword = window.confirm("Need a new password?")
  var numberOfCharacters = askHowManyCharacters;
 
  for (var i=0; i<=askHowManyCharacters; i++){
    var random = arr[Math.floor(Math.random() * arr.length)];
  }

  console.log(Array.prototype);

  return finalPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) ;

