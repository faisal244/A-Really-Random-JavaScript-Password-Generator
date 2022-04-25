#  A Really Random JavaScript Password Generator
A Password Generator built in Javascript - My first real JavaScript project, and a chance to apply everything i have learnt so far.

I was tasked with creating an application that enables employees to generate random passwords based on criteria that they’ve selected. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. It has a clean and polished, responsive user interface that adapts to multiple screen sizes.


## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## Link to deployed application

* https://faisal244.github.io/A-Really-Random-JavaScript-Password-Generator/


Below is an overview of the approach i took when working on the JavaScript logic for this project in order to meet the University of Birmingham acceptance criteria:
## JavaScript 

* Declared all of the possible charactersets that can be used for the password as global variables.

* Created 5 functions that each prompt the user for a different part of the password criteria.

* Created a getPasswordCriteria validation function to check that the users selected password length is entered and valid, coverts the user input into an integer, and displays various descriptive messages in the password box if there are any issues with validating the users input. 

* If the password length meets the requirements of being more than 8 characters and less than 128, The users other inputs are pulled into the function.

* These are all then stored in a JavaScript object, and validated to ensure the user has selected at least one character type, and returned if all validation checks are passed.

* I then created a randomisation algorithm - An array function that randomly generates each character of the password based on the options selected in the password Criteria object, that can be called on in the next step.

* Created a generatePassword function which pulls in the JavaScript object that was defined and validated earlier in getPasswordCriteria (), declared 2 empty arrays to store the randomly generated characters, and then used an if statement to fill each array based on the users criteria inputs.

* I then used a couple of for loops - both of which generate a random character, and keep repeating until the random string matches the length of the users password length selection. The second for loop attempts to randomise the generated password even further by using userPassword[i] = randomValues[i]; .

* Once this is done, each generated character is joined together into one string. This function is triggered by an event listener when a user clicks on the genreate password button, which triggers the generatePassword function explained above. 

* The randomly generated secure password is then presented to the user, by being written to the input of the password textbox on the front end, ready for use.

## Challenges I faced 

* There were a few instances while working on this project where i realised the approach i had taken was not the best way of doing things, and was making the final solution a lot more complicated than it needed to be.

* I initially tried to create a series of checkboxes and form fields on the front end where the user could type in their desired password length and click on checkboxes for the types of characters they wanted in the final password. Turns out this approach, while providing a good UX, would not have met the acceptance criteria/brief for this project, so i had to refine my approach.

* I was initially trying to prompt the user for their criteria and then validate it all in one function, which got really convuluted and messy, causing constant errors. I solved this by splitting each prompt into its own function, then having another function to handle the validation. The password length input gets validated first, and if that passes all the criteria, only then does the function move on to the password character selections, and as long as one is selected, once all validation criteria is met, a JavaScript object is screated which i can then pull into other functions.

* I also had difficulty with password generation, which i eventually discovered was due to trying to have the ransomisation function, a big if statement and a couple of for loops all in one function. I was on the right track but was trying to get my function to do it all. My eureka moment came once i split these operations out into separate functions, then everything started coming together quite quickly!
## My Development Environment

* MacOS Monterey 
* VScode
* Terminal
* Google Chrome Developer Tools
* Git
* Github


## Languages used

* Javascript
* HTML
* CSS