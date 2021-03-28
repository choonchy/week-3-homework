// finding button in HTML
var generateBtn = document.querySelector("#generate");

//setting global variables and usable characters
var availableLowerCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var availableUpperCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var availableSpecialCharacters = ['~','`','!','@','#','$','%','^','&','*','(',')','_','-','=','+','<','>',',','"','?','?']
var allAvailableCharacters = [availableLowerCharacters, availableUpperCharacters, availableSpecialCharacters]
var passwordLength = 8;

function generatePassword() {
  // user input for password length
  passwordLength = prompt("How long would you like your new password to be?\n(Must be between 8 and 128 characters)", passwordLength)
  // setting cariables for password generation
  var passwordCharacters = [];
  var generatedPassword = ''
  // password generation and determining if user-denoted length is within acceptable critera
  if (passwordLength < 8){
    generatePassword()
  } else if (passwordLength > 128) {
    generatePassword()
  } else {
    passwordCharacters.length = passwordLength;

    for (i = 0; i < passwordCharacters.length; i++){
      arrayIndex = Math.floor(Math.random() * 3)
      objectIndex = Math.floor(Math.random() * allAvailableCharacters[arrayIndex].length)
      passwordCharacters[i] = allAvailableCharacters[arrayIndex][objectIndex]
      generatedPassword = generatedPassword.concat(passwordCharacters[i])
    }
  }
  // function returns the password string
  return generatedPassword
}

// function to write generated password into the appropriate HTML element
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);