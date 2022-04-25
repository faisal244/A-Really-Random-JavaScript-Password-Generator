// Assignment Code

// Declaration of variables
let generateBtn = document.querySelector("#generate");

// Declaring Password character Arrays Globally
const uppercaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lowercaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialArray = [
  "+",
  "-",
  "&&",
  "||",
  "!",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "^",
  "~",
  "*",
  "?",
  ":",
];

// let uppercaseCheckbox = document.querySelector("#upper");
// let lowercaseCheckbox = document.querySelector("#lower");
// let numberCheckbox = document.querySelector("#number");
// let specialCheckbox = document.querySelector("#special");
// let passwordLength = document.getElementById("length").value;
// let passwordLength = document.getElementById("#length").value;

// An Array which will store all of the users inputs for password criteria
// let attributes = []


// let userLength = function() {
  // let passwordLength = prompt("Please enter your password length");
  // console.log(passwordLength);
  // return passwordLength;
  
  // let userLength = passwordLength;
// };


// userLength = passwordPrompt 



// Functions that store the users answers from prompts about password length and which type of characters they want included in their password


// Get User Inputs from prompts - Password Length
const getPasswordLength = () =>  {
  const userLengthInput = prompt("Please enter your password length");
  const passwordLength = parseInt(userLengthInput, 10);
  console.log(passwordLength);
  return passwordLength;
};


// Get User Inputs from prompts - Uppercase
const upperCasePrompt = () =>  {
const userUpperChoice = confirm("Do you want your secure password to contain uppercase characters?");
console.log(userUpperChoice);
return userUpperChoice;
}

// Get User Inputs from prompts - Lowercase
const lowerCasePrompt = () =>  {
  const userLowerChoice = confirm("Do you want your secure password to contain lowercase characters?");
  console.log(userLowerChoice);
  return userLowerChoice;
  }

// Get User Inputs from prompts - Numbers
const numberPrompt = () =>  {
  const userNumberChoice = confirm("Do you want your secure password to contain numbers?");
  console.log(userNumberChoice);
  return userNumberChoice;
  }
  
// Get User Inputs from prompts - Special Characters
const specialPrompt = () =>  {
  const userSpecialChoice = confirm("Do you want your secure password to contain special characters?");
  console.log(userSpecialChoice);
  return userSpecialChoice;
  }
  




const getPasswordCriteria = () =>  {

  // This variable takes the users password length input and makes it available within this function to be validated
  const passwordLength = getPasswordLength();
  
  // if password length is not a number:  
  if (isNaN(passwordLength)) {
    alert("Please enter a valid number");
 
  // If password length is larger than or equal to 8:
  } else if (passwordLength =>8) {
    document.getElementById("password").innerHTML =
    passwordLength + " is a good password length";
    
    // If password length is larger than 128:
  } if (passwordLength > 128) {
    document.getElementById("password").innerHTML =
    "password is too long";
    
    // If password length is less than 8:
  } if (passwordLength < 8) {
    document.getElementById("password").innerHTML =
    "password is too short";
    
    // // If the password length field is 0 or left blank:
  } if (passwordLength == 0) {
    document.getElementById("password").innerHTML =
    "Password length cannot be empty - please select a length between 8-128";

    // If user clicks cancel
  } if (!passwordLength) {
    alert("You must enter a valid value to continue");

    // if password length meets criteria:
  } if (passwordLength >= 8 && passwordLength <= 128){
    
      const lowercase = lowerCasePrompt ();
      const uppercase = upperCasePrompt ();
      const numChar = numberPrompt ();
      const specialChar = specialPrompt ();

      // return user choices to console log:;
      console.log(lowercase)
      console.log(uppercase)
      console.log(numChar)
      console.log(specialChar)
    
      // object that stores all of the users choices 
    const passwordCriteria = {
      passwordLength: passwordLength,
      lowercase: lowercase,
      uppercase: uppercase,
      numbers: numChar,
      specials: specialChar,
    }; 
    
    // Validation that user has selected at least one option, returning an error message if minimum criteria has not been met 
    if (
      !passwordCriteria.numbers &&
      !passwordCriteria.lowercase &&
      !passwordCriteria.uppercase &&
      !passwordCriteria.specials
    ) {
      alert("You have not selected a valid password criteria.");
    } else {
      console.log("It all works!");
      return passwordCriteria;
    }
  }
}

// Array Function to randomly generate a password from the password Criteria object 
const createRandomPassword = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const elemValue = arr[randomIndex];
  return elemValue;
};

// var randomSelection = "";
//     for (var i = 0; i < length; i++) {
//       randomSelection += attributes.charAt(Math.floor(Math.random() * possibleCharacters.length));
//       //console.log(randomSelection);
//       }
//       console.log(randomSelection)
//     return randomSelection;
//   }
  

  // Function that will check  the users selected password criteria and generate a randomised password based on their selections 
  const generatePassword = () => {
    
    // declaration of variables needed for this function
    const criteria = getPasswordCriteria();
    const userPasswordChoices = [];
    const randomValues = [];

    // IF statement that will populate the 2 empty arrays above 
    if (criteria.uppercase) {
      userPasswordChoices.push(...uppercaseArray);
      randomValues.push(createRandomPassword(uppercaseArray));

    }   if (criteria.lowercase) {
      userPasswordChoices.push(...lowercaseArray);
      randomValues.push(createRandomPassword(lowercaseArray));

    } if (criteria.numbers) {
      userPasswordChoices.push(...numbersArray);
      randomValues.push(createRandomPassword(numbersArray));
    
    } if (criteria.specials) {
      userPasswordChoices.push(...specialArray);
      randomValues.push(createRandomPassword(specialArray));
    }

    // Each randomly selected character of the password gets stored in this empty array
    const userPassword = [];

    // This for loop will match the password length the user has selected and run until it the random password is the same length 
    for (let i = 0; i < criteria.passwordLength; i++) {
      let password = createRandomPassword(userPasswordChoices);
      userPassword.push(password);
    }
  
    // This for loop uses the randomValues array to randomise the generate password even further 
    for (let i = 0; i < randomValues.length; i++) {
      userPassword[i] = randomValues[i];
    }
    // Each generated character is concatenated into a single password string here 
    return userPassword.join("");
  }

    
// This function Writes the generated password to the #password box on the frontend 
const writePassword = () =>  {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener which listens for clicks to the generate password button
generateBtn.addEventListener("click", writePassword);

  //   // const password = createRandomPassword(passwordlength, passwordcriteria);
  //   const password = generatePassword();
  //     return password;


  // };










  

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }








//   var possibleCharacters
//   // if (attributes = true) {
//   if (lowercase) {
//    possibleCharacters += lowercaseArray; 
// } if (upperercase) {
//   possibleCharacters += uppercaseArray; 
// } if (numChar) {
//   possibleCharacters += numbersArray;
// } if (specialChar) {
//   possibleCharacters += specialArray;
// } 


//   document.addEventListener("click", getPasswordLength);
//   document.addEventListener("click", getPasswordCritera);



//   // Add event listener to generate button
//   generateBtn.addEventListener("click", getPasswordLength);
// generateBtn.addEventListener("click", writePassword);


// // *****************************************************


// // <!-- nice way of doing inline JS instead of using listeners -->
//   // <button onclick="changeColor()">CLICK ME </button>




//   //   // below is the logic for using checkboxes - i've abandoned this because the homework brief specially asked from prompts - may reinstate this in future 
// // // may need to create a new field on the front end for error messages, doesn't seem to work if more than 1 function is targetting the same html field
// //   var errorMessage = document.getElementById("password").innerHTML;
// //   var checked = document.querySelectorAll('input:checked');
// //   if (checked.length === 0) {
// //     errorMessage = "You must select at least one character type";
// //    console.log('no checkboxes checked');
// //    return false;
// //   } else {
// //     errorMessage = "";
// //   console.log(checked.length + 'checkboxes checked');
// //    return true;
// //   }
// // }






// //   let uppercaseCheckbox = document.querySelector("#upper");
// //   let lowercaseCheckbox = document.querySelector("#lower");
// //   let numberCheckbox = document.querySelector("#number");
// //   let specialCheckbox = document.querySelector("#special");
// //   // maybe a variable with 3 functions nested inside of it here 
// // // might need to turn each of the below into its own function - they currently fire all at once
  
// // function upperCase() {
// //     // if (uppercaseCheckbox !== null) {
// //       let uppercaseCheckbox = document.querySelector("#upper");
// //       let lowercaseCheckbox = document.querySelector("#lower");
// //       if (uppercaseCheckbox = document.querySelector('#upper input:checked'))
// //       console.log ("uppercase!!!!")
// //     } if (lowercaseCheckbox = document.querySelector('#lower input:checked'))
    
    
// //     // else if (lowercaseCheckbox !== null) {
// //       console.log('lowercase!!!!');
// //   }
// //     // } else if (numberCheckbox !== null) {
// //     //   console.log('Numbers !!!!')

// //     // } else if (specialCheckbox !== null) {
// //     //   console.log('Special characters!!!!')

// //     // } else {
// //     //   console.log('Please select at least one option')
// //     // }
  

// //   // whack in the alphabet and number arrays in here 


 

//   // if (uppercaseCheckbox === true) {
//     // console.log('uppercase selected and working')



// // };

// // // Add event listeners for the checkboxes
// // uppercaseCheckbox.addEventListener("click", getPasswordCritera);
// // lowercaseCheckbox.addEventListener("click", getPasswordCritera);
// // numberCheckbox.addEventListener("click", getPasswordCritera);
// // specialCheckbox.addEventListener("click", getPasswordCritera);
 

