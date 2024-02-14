// Function to display an array in the document
function displayArray(arr, heading = "") {
    document.write(`<h2>${heading}</h2>`);
    document.write("<pre>" + JSON.stringify(arr, null, 2) + "</pre><br>");
}


// Function to display an string in the document
function displayText(textValue, heading = "") {
    document.write(`<h2>${heading}</h2>`);
    document.write("<pre>" + textValue + "</pre><br>");
}


// Additional message for the user, if needed
let errorMessage = "";
// Function to prompt the user for input and return the entered value
function getUserInput(promptMessage, typeValidate = nulll, isValidate = true) {
    let userAnswe;
    do{
        userAnswe = prompt(errorMessage +"\n"+promptMessage);
    }while(!validateUserInput(userAnswe, typeValidate) && isValidate);

    return userAnswe;
}


// Function to validate user input: check if it is a number or a character in the validCharacters array
function validateUserInput(input, typeValidate) {
    if(input === null){
        return true;
    }

    switch(typeValidate){
        case "isnumeric":
            return isNumeric(input);
        case "isnumericPositive":
            return isNumeric(input, true);
        case "isnumericOrByZero":
            if(isNumeric(input) && input === '0'){
                errorMessage = "На нуль ділити не можна";
                return false;
            }
            return isNumeric(input);
        case "isoperation":
            const validCharacters = ['+','-','*','/','%','^']; 
            const isCharacter = typeof input === 'string' && input.length === 1 && validCharacters.includes(input);
            errorMessage = !isCharacter ? "Операція не корректна" : ""
            return isCharacter;
        default:
            return true;
    }
}


// Function to check if a value is numeric, optionally specifying if it should be positive
const isNumeric = function isNumeric(input, isPositive = false){
    let result;
    if(isPositive){
        result = !isNaN(parseFloat(input)) && isFinite(input) && parseFloat(input) > 0;
        errorMessage = !result ? "Задане значення не число або менше нуля" : ""
    }
    else{
         result = !isNaN(parseFloat(input)) && isFinite(input);
         errorMessage = !result ? "Задане значення не число" : "";
    }
    return result;
 }