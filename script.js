// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowLetters = 'abcdefghijklmnopqrstuvwxyz';
var upLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var randNum = '0123456789';
var special = ' !#$%&*+-./:;?@^_~';

function generatePassword() {
  
  var passLength = parseInt(prompt('How long would you your password to be? (Choose a number between 8 and 128)'));
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert('Invalid input! Press the "Generate Password" button and try again.');
    return document.querySelector("#password").value;
  }
  
  var lowL = prompt('Would you like your password to contain lowercase letters? (Reply y for yes or n for no)');
  if ((lowL == null) || (lowL.toLowerCase() !== 'y' && lowL.toLowerCase() !== 'n')) {
    alert('Invalid input! Press the "Generate Password" button and try again.');
    return document.querySelector("#password").value;
  }

  var upL = prompt('Would you like your password to contain uppercase letters? (Reply y for yes or n for no)');
  if ((upL == null) || (upL.toLowerCase() !== 'y' && upL.toLowerCase() !== 'n')) {
    alert('Invalid input! Press the "Generate Password" button and try again.');
    return document.querySelector("#password").value;
  }

  var wantNum = prompt('Would you like your password to contain numbers? (Reply y for yes or n for no)');
  if ((wantNum == null) || (wantNum.toLowerCase() !== 'y' && wantNum.toLowerCase() !== 'n')) {
    alert('Invalid input! Press the "Generate Password" button and try again.');
    return document.querySelector("#password").value;
  }

  var sChar = prompt('Would you like your password to contain special characters? (Reply y for yes or n for no)');
  if ((sChar == null) || (sChar.toLowerCase() !== 'y' && sChar.toLowerCase() !== 'n')) {
    alert('Invalid input! Press the "Generate Password" button and try again.');
    return document.querySelector("#password").value;
  }
  

  
  if (lowL == 'y' && upL == 'y' && wantNum == 'y' && sChar == 'y') {
    var pass = '';
    for (i = 0; i < passLength; i++) {
      var everything = lowLetters + upLetters + randNum + special;
      pass += everything.charAt(Math.floor(Math.random() * everything.length + 1));
    }
    return pass;
  }
  else if (lowL == 'y' && upL == 'y' && wantNum == 'y' && sChar == 'n') {
    var pass2 = '';
    for (i = 0; i < passLength; i++) {
      var everythingButSpecial = lowLetters + upLetters + randNum;
      pass2 += everythingButSpecial.charAt(Math.floor(Math.random() * everythingButSpecial.length + 1));
    }
    return pass2;
  }
  else if (lowL == 'y' && upL == 'y' && wantNum == 'n' && sChar == 'y') {
    var pass3 = '';
    for (i = 0; i < passLength; i++) {
      var everythingButNum = lowLetters + upLetters + special;
      pass3 += everythingButNum.charAt(Math.floor(Math.random() * everythingButNum.length + 1));
    }
    return pass3;
  }
  else if (lowL == 'y' && upL == 'n' && wantNum == 'y' && sChar == 'y') {
    var pass4 = '';
    for (i = 0; i < passLength; i++) {
      var everythingButUp = lowLetters + randNum + special;
      pass4 += everythingButUp.charAt(Math.floor(Math.random() * everythingButUp.length + 1));
    }
    return pass4;
  }
  else if (lowL == 'n' && upL == 'y' && wantNum == 'y' && sChar == 'y') {
    var pass5 = '';
    for (i = 0; i < passLength; i++) {
      var everythingButLow = upLetters + randNum + special;
      pass5 += everythingButLow.charAt(Math.floor(Math.random() * everythingButLow.length + 1));
    }
    return pass5;
  }
  else if (lowL == 'y' && upL == 'n' && wantNum == 'n' && sChar == 'n') {
    var pass6 = '';
    for (i = 0; i < passLength; i++) {
      var lowOnly = lowLetters;
      pass6 += lowOnly.charAt(Math.floor(Math.random() * lowOnly.length + 1));
    }
    return pass6;
  }
  else if (lowL == 'n' && upL == 'y' && wantNum == 'n' && sChar == 'n') {
    var pass7 = '';
    for (i = 0; i < passLength; i++) {
      var upOnly = upLetters;
      pass7 += upOnly.charAt(Math.floor(Math.random() * upOnly.length + 1));
    }
    return pass7;
  }
  else if (lowL == 'n' && upL == 'n' && wantNum == 'y' && sChar == 'n') {
    var pass8 = '';
    for (i = 0; i < passLength; i++) {
      var numOnly = randNum;
      pass8 += numOnly.charAt(Math.floor(Math.random() * numOnly.length + 1));
    }
    return pass8;
  }
  else if (lowL == 'n' && upL == 'n' && wantNum == 'n' && sChar == 'y') {
    var pass9 = '';
    for (i = 0; i < passLength; i++) {
      var specialOnly = special;
      pass9 += specialOnly.charAt(Math.floor(Math.random() * specialOnly.length + 1));
    }
    return pass9;
  }
  else if (lowL == 'y' && upL == 'y' && wantNum == 'n' && sChar == 'n') {
    var pass10 = '';
    for (i = 0; i < passLength; i++) {
      var lowUp = lowLetters + upLetters;
      pass10 += lowUp.charAt(Math.floor(Math.random() * lowUp.length + 1));
    }
    return pass10;
  }
  else if (lowL == 'y' && upL == 'n' && wantNum == 'y' && sChar == 'n') {
    var pass11 = '';
    for (i = 0; i < passLength; i++) {
      var lowNum = lowLetters + randNum;
      pass11 += lowNum.charAt(Math.floor(Math.random() * lowNum.length + 1));
    }
    return pass11;
  }
  else if (lowL == 'y' && upL == 'n' && wantNum == 'n' && sChar == 'y') {
    var pass12 = '';
    for (i = 0; i < passLength; i++) {
      var lowSpecial = lowLetters + special;
      pass12 += lowSpecial.charAt(Math.floor(Math.random() * lowSpecial.length + 1));
    }
    return pass12;
  }
  else if (lowL == 'n' && upL == 'y' && wantNum == 'y' && sChar == 'n') {
    var pass13 = '';
    for (i = 0; i < passLength; i++) {
      var upNum = upLetters + randNum;
      pass13 += upNum.charAt(Math.floor(Math.random() * upNum.length + 1));
    }
    return pass13;
  }
  else if (lowL == 'n' && upL == 'y' && wantNum == 'n' && sChar == 'y') {
    var pass14 = '';
    for (i = 0; i < passLength; i++) {
      var upSpecial = upLetters + special;
      pass14 += upSpecial.charAt(Math.floor(Math.random() * upSpecial.length + 1));
    }
    return pass14;
  }
  else if (lowL == 'n' && upL == 'n' && wantNum == 'y' && sChar == 'y') {
    var pass15 = '';
    for (i = 0; i < passLength; i++) {
      var numSpecial = randNum + special;
      pass15 += numSpecial.charAt(Math.floor(Math.random() * numSpecial.length + 1));
    }
    return pass15;
  }
  else if (lowL == 'n' && upL == 'n' && wantNum == 'n' && sChar == 'n') {
    alert('You have answered no to all questions. No new password will be generated.');
    return document.querySelector("#password").value;
  }
  
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
