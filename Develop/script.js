// finding button in HTML
var generateBtn = document.querySelector("#generate");
var availableLowerCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var availableUpperCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var availableSpecialCharacters = ['~','`','!','@','#','$','%','^','&','*','(',')','_','-','=','+','<','>',',','"','?','?']

function generatePassword() {
  var passwordLength = prompt("How long would you like your new password to be?\n(Must be between 8 and 128 characters)", 16)
  var passwordCharacters = [passwordLength];
  for (i = 0; i < passwordCharacters.length; i++){
    
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
