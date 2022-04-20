// Assignment Code
var generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {};
const getPasswordCritera = () => {
  whack in the alphabet and number stuff in here 
  return[ " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  "uppercase line"
  "lowercase uppercase line"
  "numbers"
  ]

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
