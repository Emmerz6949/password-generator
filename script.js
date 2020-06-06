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
  
  var passLength = parseInt(prompt('How long would you your password to be? (Choose a number between 8 and 128)'));
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert('Invalid input! Press the "Generate Password" button and try again.');
    return document.querySelector("#password").value;
  }
  
  var lowL = prompt('Would you like your password to contain lowercase letters? (Reply y for yes and n for no)');
  if ((lowL == null) || (lowL.toLowerCase() !== 'y' && lowL.toLowerCase() !== 'n')) {
    alert('Invalid input! Press the "Generate Password" button and try again.');
    return document.querySelector("#password").value;
  }

  var upL = prompt('Would you like your password to contain uppercase letters? (Reply y for yes and n for no)');
  if ((upL == null) || (upL.toLowerCase() !== 'y' && upL.toLowerCase() !== 'n')) {
    alert('Invalid input! Press the "Generate Password" button and try again.');
    return document.querySelector("#password").value;
  }

  var wantNum = prompt('Would you like your password to contain numbers? (Reply y for yes and n for no)');
  if ((wantNum == null) || (wantNum.toLowerCase() !== 'y' && wantNum.toLowerCase() !== 'n')) {
    alert('Invalid input! Press the "Generate Password" button and try again.');
    return document.querySelector("#password").value;
  }

  var sChar = prompt('Would you like your password to contain special characters? (Reply y for yes and n for no)');
  if ((sChar == null) || (sChar.toLowerCase() !== 'y' && sChar.toLowerCase() !== 'n')) {
    alert('Invalid input! Press the "Generate Password" button and try again.');
    return document.querySelector("#password").value;
  }
  

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
