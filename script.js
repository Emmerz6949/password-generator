// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowLetters = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upLetters = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var randNum = Math.floor(Math.random() * 10) ;
var special = [' ', '!', '#', '$', '%', '&', '*', '+', '-', '.', '/', ':', ';', '?', '@', '^', '_', '~'];

function generatePassword() {
  //prompt will = null if they cancel, confirm is true or false
  alert('Looks like you need a new password!')
  
  var passLength = prompt('How long would you your password to be? (Choose a number between 8 and 128)');
  var lowL = prompt('Would you like your password to contain lowercase letters? (Reply y for yes and n for no)');
  var upL = prompt('Would you like your password to contain uppercase letters? (Reply y for yes and n for no)');
  var ranNum = prompt('Would you like your password to contain numbers? (Reply y for yes and n for no)');
  var sChar = prompt('Would you like your password to contain special characters? (Reply y for yes and n for no)');

  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
