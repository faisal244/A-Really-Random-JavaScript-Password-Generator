// Assignment Code

// Declaration of variables
let generateBtn = document.querySelector("#generate");
let uppercaseCheckbox = document.querySelector("#upper");
let lowercaseCheckbox = document.querySelector("#lower");
let numberCheckbox = document.querySelector("#number");
let specialCheckbox = document.querySelector("#special");
// let passwordLength = '';
// let passwordLength = document.getElementById("#length").value;


// let userLength = function() {
  // let passwordLength = prompt("Please enter your password length");
  // console.log(passwordLength);
  // return passwordLength;
  
  // let userLength = passwordLength;
// };


// userLength = passwordPrompt 


// password length validation function
const getPasswordLength = (PasswordLength) => {
  
  // This variable takes the users input and makes it available within this function
  // let passwordLength = document.getElementById("length").value;
  const passwordLength = prompt("Please enter your password length");
  console.log(passwordLength);
  
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
  } if (passwordLength >= 8 && passwordLength <= 128){
    // logs password length to console
    console.log("true")
    return true;
    // console.log("password length: " + passwordLength)
  } else {
    console.log("false");
    return false;
  }
  // // Returns the password length as a number
  // return passwordLength
  
}



document.addEventListener("click", getPasswordLength);

// let passwordLength = prompt("Please enter your password length");
  // if (passwordLength =>8) {
  //   document.getElementById("password").innerHTML =
  //   "good password length";
  
  // } if (passwordLength > 128) {
  //   document.getElementById("password").innerHTML =
  //   "password is too long";
    
  // } if (passwordLength < 8) {
  //   document.getElementById("password").innerHTML =
  //   "password is too short";
    
  // }
  





const getPasswordCritera = () => {

// may need to create a new field on the front end for error messages, doesn't seem to work if more than 1 function is targetting the same html field
  var errorMessage = document.getElementById("password").innerHTML;
  var checked = document.querySelectorAll('input:checked');
  if (checked.length === 0) {
    errorMessage = "You must select at least one character type";
   console.log('no checkboxes checked');
   return false;
  } else {
    errorMessage = "";
  console.log(checked.length + 'checkboxes checked');
   return true;
  }
}



//   let uppercaseCheckbox = document.querySelector("#upper");
//   let lowercaseCheckbox = document.querySelector("#lower");
//   let numberCheckbox = document.querySelector("#number");
//   let specialCheckbox = document.querySelector("#special");
//   // maybe a variable with 3 functions nested inside of it here 
// // might need to turn each of the below into its own function - they currently fire all at once
  
// function upperCase() {
//     // if (uppercaseCheckbox !== null) {
//       let uppercaseCheckbox = document.querySelector("#upper");
//       let lowercaseCheckbox = document.querySelector("#lower");
//       if (uppercaseCheckbox = document.querySelector('#upper input:checked'))
//       console.log ("uppercase!!!!")
//     } if (lowercaseCheckbox = document.querySelector('#lower input:checked'))
    
    
//     // else if (lowercaseCheckbox !== null) {
//       console.log('lowercase!!!!');
//   }
//     // } else if (numberCheckbox !== null) {
//     //   console.log('Numbers !!!!')

//     // } else if (specialCheckbox !== null) {
//     //   console.log('Special characters!!!!')

//     // } else {
//     //   console.log('Please select at least one option')
//     // }
  

//   // whack in the alphabet and number arrays in here 


 

  // if (uppercaseCheckbox === true) {
    // console.log('uppercase selected and working')



// };

// // Add event listeners for the checkboxes
// uppercaseCheckbox.addEventListener("click", getPasswordCritera);
// lowercaseCheckbox.addEventListener("click", getPasswordCritera);
// numberCheckbox.addEventListener("click", getPasswordCritera);
// specialCheckbox.addEventListener("click", getPasswordCritera);
 

const uppercase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const lowercase = ['abcdefghijklmnopqrstuvwxyz']
const numbers = ['0123456789']
const special = [" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]


const createRandomPassword = () => {

 

  return "sadjkghasfjk"
};


  // const generatePassword = () => {


  //   const passwordLengh = getPasswordLength();

  //   const passwordCriteria = getPasswordCriteria();

  //   const password = createRandomPassword(passwordlength, passwordcriteria);
  //     return password;


  // };
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", getPasswordLength);



// <!-- nice way of doing inline JS instead of using listeners -->
  // <button onclick="changeColor()">CLICK ME </button>