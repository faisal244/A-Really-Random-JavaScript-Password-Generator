// Assignment Code
var generateBtn = document.querySelector("#generate");

let passwordLength = prompt("Please enter your password length");
if (passwordLength =>8) {
  document.getElementById("password").innerHTML =
  "Hello ! How are you today?";

} if (passwordLength > 128) {
  document.getElementById("password").innerHTML =
  "password is too long";
  
} if (passwordLength < 8) {
  document.getElementById("password").innerHTML =
  "password is too short";
  
}



// password length function
const getPasswordLength = (length) => {
  let passwordLength = prompt("Please enter your password length");
if (passwordLength =>8) {
  document.getElementById("password").innerHTML =
  "Hello ! How are you today?";
} if (passwordLength > 128) {
  console.log('password is too long')
} if (passwordLength < 8) {
  console.log('password is too short')
}



};


const getPasswordCritera = () => {

  // maybe a variable with 3 functions nested inside of it here 
  // whack in the alphabet and number stuff in here 


  const uppercase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  const lowercase = ['abcdefghijklmnopqrstuvwxyz']
  const numbers = ['0123456789']
  // need to work out how to close an array of special characters
  const special = [" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]


};
const createRandomPassword = () => {

  return "sadjkghasfjk"
};


  const generatePassword = () => {


    const passwordLengh = getPasswordLength();

    const passwordCriteria = getPasswordCriteria();

    const password = createRandomPassword(passwordlength, passwordcriteria);
      return password;


  };
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
