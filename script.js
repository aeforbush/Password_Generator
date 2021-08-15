// code for assignment 
// Generator functions https://net-comber.com/charset.html

//Global variables declarations:
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Start password variable values
// Special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];
// Choices declared outside the if statement so they can be concatenated upon condtion
var choices;
// Converts letters to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};
// Creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

// Write password to the #password input
function writePassword() {
  // Asks for user input
  enter = parseInt(prompt("How many characters would you like in your password?  Choose between 8 and 128."))
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    // Validates user input
    // Start user input prompts
    enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    // Continues once user input is validated
    confirmNumber = confirm("Will this contain numbers?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");    
    confirmLowercase = confirm("Will this contain Lowercase letters?");
    confirmCharacter = confirm("Will this contain special characters?");
  };

  // Else if for 4 negative options
  if (!confirmNumber && !confirmUppercase && !confirmLowercase && !confirmCharacter) {
    choices = alert("You must choose a criteria!");
  }
  // First if statement that uses user input prompts to determine choices
  // Below - to experiment with
  // if (confirmNumber) {
  //   choices = choices.concat(number)
  // }
  // Else if "brute force"

  // Else if for 4 positive options
  else if (confirmNumber && confirmUppercase && confirmLowercase && confirmCharacter) {
    choices = character.concat(number, alpha, alpha2);
  }

  // Else if for 3 positive statements
  else if (confirmNumber && confirmUppercase && confirmCharacter) {
    choices = character.concat(number, alpha2);
  }
  else if (confirmNumber &&  confirmLowercase && confirmCharacter) {
    choices = character.concat(number, alpha);
  }
  else if (confirmUppercase && confirmLowercase && confirmCharacter) {
    choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmUppercase && confirmLowercase) {
    choices = character.concat(alpha, alpha2);
  }
  
  // Else if for 2 positive statements
  else if (confirmNumber &&  confirmCharacter) {
    choices = character.concat(number);
  }
  else if (confirmUppercase && confirmCharacter) {
    choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmCharacter) {
    choices = character.concat(alpha);
  }
  else if (confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  }
  else if (confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }
  else if (confirmUppercase && confirmLowercase) {
    choices = character.concat(alpha2, alpha);
  }
  // Else if for 1 positive option
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmUppercase) {
    choices = space.concat(alpha2);
  }
  else if (confirmLowercase) {
    choices = alpha;
  }
  else if (confirmCharacter) {
    choices = character;
  };
  console.log(confirmNumber)
  // Password variable is an array placeholder for user generated amount of length
  var password = [];

  // Start random selection variables
  for (var i=0; i<enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  console.log(password);
  document.getElementById("password").value = password.join("");
};

generateBtn.addEventListener("click", writePassword);

