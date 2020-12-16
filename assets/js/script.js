// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate a random character from a provided string
function randomChar(inputString) {
  var index = Math.floor(Math.random() * inputString.length); 
  return inputString.charAt(index);
}

// Prompt for password characteristics and generate
function generatePassword() {
  var passwordLength;
  var validLength = false;
  var useLowerCase;
  var useUpperCase;
  var useNumbers;
  var useSpecial;
  var validChars = false;
  var potentialChars = "";
  var password = "";
  var initialPasswordLength;

  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numerals = "0123456789";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{}|~";

  // Prompt for password length and validate (8-128 characters)
  while (!validLength) {
    passwordLength = prompt("How many characters should the password include? (Min 8, Max 128)");

    passwordLength = parseInt(passwordLength);
    if (isNaN(passwordLength) ||(passwordLength < 8) || (passwordLength > 128)) {
      alert("Invalid password length. Minimum of 8 characters, maximum of 128");
    } else {
      validLength = true;
    }
  }

  // Prompt for character usage and validate (must include at least one)
  while (!validChars) {
    useLowerCase = confirm("Use lower-case letters?");
    useUpperCase = confirm("Use upper-case letters?");
    useNumbers = confirm("Use numbers?");
    useSpecial = confirm("Use special characters?");

    if(!useLowerCase && !useUpperCase && !useNumbers && !useSpecial) {
      alert("You must use at least one character type.");
    } else {
      validChars = true;
    }
  }

  /* Create string of possible characters, adding one of each type first
     to guarantee usage of all included types */
  if (useLowerCase) {
    potentialChars += lowerCaseLetters;
    password += randomChar(lowerCaseLetters);
  }
  if (useUpperCase) {
    potentialChars += upperCaseLetters;
    password += randomChar(upperCaseLetters);
  }
  if (useNumbers) {
    potentialChars += numerals;
    password += randomChar(numerals);
  }
  if (useSpecial) {
    potentialChars += specialCharacters;
    password += randomChar(specialCharacters);
  }

  // Generate rest of password string and return
  initialPasswordLength = password.length;
  for (var i = 0; i < passwordLength - initialPasswordLength; i++) {
    password += randomChar(potentialChars);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
