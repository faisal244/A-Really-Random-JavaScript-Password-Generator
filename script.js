// Assignment Code

// Declaration of variables
let generateBtn = document.querySelector("#generate");
let uppercaseCheckbox = document.querySelector("#upper");
let lowercaseCheckbox = document.querySelector("#lower");
let numberCheckbox = document.querySelector("#number");
let specialCheckbox = document.querySelector("#special");
// let passwordLength = document.getElementById("#length").value;
// let passwordLength = ''




// password length validation function
const getPasswordLength = () => {


let passwordLength = document.getElementById("length").value;

if (passwordLength =>8) {
  document.getElementById("password").innerHTML =
  passwordLength + " is a good password length";
  
} if (passwordLength > 128) {
  document.getElementById("password").innerHTML =
  "password is too long";
  
} if (passwordLength < 8) {
  document.getElementById("password").innerHTML =
  "password is too short";
  
} if (passwordLength == 0) {
  document.getElementById("password").innerHTML =
  "Password length cannot be empty - please select a length between 8-128";
}
console.log("password length: " + passwordLength)
return passwordLength
}



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
  let uppercaseCheckbox = document.querySelector("#upper");
  let lowercaseCheckbox = document.querySelector("#lower");
  let numberCheckbox = document.querySelector("#number");
  let specialCheckbox = document.querySelector("#special");
  // maybe a variable with 3 functions nested inside of it here 
// might need to turn each of the below into its own function - they currently fire all at once
  
function upperCase() {
    // if (uppercaseCheckbox !== null) {
      let uppercaseCheckbox = document.querySelector("#upper");
      let lowercaseCheckbox = document.querySelector("#lower");
      if (uppercaseCheckbox = document.querySelector('#upper input:checked'))
      console.log ("uppercase!!!!")
    } if (lowercaseCheckbox = document.querySelector('#lower input:checked'))
    
    
    // else if (lowercaseCheckbox !== null) {
      console.log('lowercase!!!!');
  }
    // } else if (numberCheckbox !== null) {
    //   console.log('Numbers !!!!')

    // } else if (specialCheckbox !== null) {
    //   console.log('Special characters!!!!')

    // } else {
    //   console.log('Please select at least one option')
    // }
  

  // whack in the alphabet and number arrays in here 


  const uppercase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  const lowercase = ['abcdefghijklmnopqrstuvwxyz']
  const numbers = ['0123456789']
  const special = [" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]

  // if (uppercaseCheckbox === true) {
    // console.log('uppercase selected and working')



// };

// Add event listeners for the checkboxes
uppercaseCheckbox.addEventListener("click", getPasswordCritera);
lowercaseCheckbox.addEventListener("click", getPasswordCritera);
numberCheckbox.addEventListener("click", getPasswordCritera);
specialCheckbox.addEventListener("click", getPasswordCritera);
 




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
