let errorMessage;

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
            errorMessage = isNumeric(input)? "Задане значення не число" : ""
            return isNumeric(input);
        case "isnumericOrByZero":
            errorMessage = !isNumeric(input) ? "Задане значення не число" : ""
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

const isNumeric = function isNumeric(input){
   return !isNaN(parseFloat(input)) && isFinite(input);
}

  // Function to perform mathematical operations based on the operator
function doMath(x, znak, y) {
    switch (znak) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      case '/':
        if(y === 0){
            return NaN;
        }
        return x / y;
      case '%':
        return x % y;
      case '^':
        return x ** y;
      default:
        return NaN;
    }
}