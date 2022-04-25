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




// Get User Inputs from prompts - Password Length
const getPasswordLength = () =>  {
  const userLengthInput = prompt("Please enter your password length");
  const passwordLength = parseInt(userLengthInput, 10);
  return passwordLength;
};


// Get User Inputs from prompts - Uppercase
const upperCasePrompt = () =>  {
  const userUpperChoice = confirm("Do you want your secure password to contain uppercase characters?");
  return userUpperChoice;
};


// Get User Inputs from prompts - Lowercase
const lowerCasePrompt = () =>  {
  const userLowerChoice = confirm("Do you want your secure password to contain lowercase characters?");
  return userLowerChoice;
  };


// Get User Inputs from prompts - Numbers
const numberPrompt = () =>  {
  const userNumberChoice = confirm("Do you want your secure password to contain numbers?");
  return userNumberChoice;
  };
  

// Get User Inputs from prompts - Special Characters
const specialPrompt = () =>  {
  const userSpecialChoice = confirm("Do you want your secure password to contain special characters?");
  return userSpecialChoice;
  };
  



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
    return;
   
    
    // if password length meets criteria:
  } if (passwordLength >= 8 && passwordLength <= 128){
   
    
    // Declation of new variables that pull in the users inputs for their password criteria from the functions for each prompt as defined earlier 
      const lowercase = lowerCasePrompt ();
      const uppercase = upperCasePrompt ();
      const numChar = numberPrompt ();
      const specialChar = specialPrompt ();


      // object that stores all of the users choices 
    const passwordCriteria = {
      passwordLength: passwordLength,
      lowercase: lowercase,
      uppercase: uppercase,
      numbers: numChar,
      specials: specialChar,
    }; 
    

      // Validation that user has selected at least one character type option, returning an error message if minimum criteria has not been met 
    if (
      !passwordCriteria.numbers &&
      !passwordCriteria.lowercase &&
      !passwordCriteria.uppercase &&
      !passwordCriteria.specials
    ) {
      alert("You have not selected a valid password criteria.");

    } else {
      return passwordCriteria;
    };
  };
};




// Array Function that randomly generates each character of the password based on the options selected in the password Criteria object 
const createRandomPassword = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const elemValue = arr[randomIndex];
  return elemValue;
};




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


    } if (criteria.lowercase) {
      userPasswordChoices.push(...lowercaseArray);
      randomValues.push(createRandomPassword(lowercaseArray));


    } if (criteria.numbers) {
      userPasswordChoices.push(...numbersArray);
      randomValues.push(createRandomPassword(numbersArray));
    

    } if (criteria.specials) {
      userPasswordChoices.push(...specialArray);
      randomValues.push(createRandomPassword(specialArray));
    };


    // Each randomly selected character of the password gets stored in this empty array
    const userPassword = [];


    // This for loop will match the password length the user has selected and run until it the random password is the same length 
    for (let i = 0; i < criteria.passwordLength; i++) {
      let password = createRandomPassword(userPasswordChoices);
      userPassword.push(password);
    };
  

    // This for loop uses the randomValues array to randomise the generate password even further 
    for (let i = 0; i < randomValues.length; i++) {
      userPassword[i] = randomValues[i];
    };


    // Each generated character is concatenated into a single password string here 
    return userPassword.join("");
  };




// This function Writes the generated password to the #password box on the frontend 
const writePassword = () =>  {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Event listener which listens for clicks to the generate password button
generateBtn.addEventListener("click", writePassword);

 