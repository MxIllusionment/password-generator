// Assignment Code
var generateBtn = document.querySelector("#generate");

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

  // Create string of possible characters
  if (useLowerCase) {
    potentialChars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useUpperCase) {
    potentialChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (useNumbers) {
    potentialChars += "0123456789";
  }
  if (useSpecial) {
    potentialChars += "!#$%&'()*+,-./:;<=>?@[]^_`{}|~";
  }

  // Generate password string and return
  var i;
  for (i = 0; i < passwordLength; i++) {
    // Generate random index from 0 to length of potential character string
    var index = Math.floor(Math.random() * potentialChars.length); 
    password += potentialChars.charAt(index);
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
