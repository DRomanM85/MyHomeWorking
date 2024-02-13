//#region TASK №1
let randomArray = generateRandomDataTypesArray();
displayArray(randomArray, "Початковий масив:");
let numericArray = extractNumbers(randomArray);
if(numericArray !== null){
    displayArray(numericArray, "Масив чисел:");
    let numericAverage = calculateNumericAverage(numericArray);
    displayText(`${numericAverage.toFixed(2)}`, `<h2>Середнє арефметичне:</h2>`)
}
else{
    displayText('Масив не містить чисел', `<h2>Середнє арефметичне:</h2>`)
}
//#endregion

//#region TASK №2
let numberOne = parseFloat(getUserInput("Задайте перше число", "isnumeric"));
let operation;
let numberSecond;
if(!isNaN(numberOne)){
    operation = getUserInput("Задайте операцію із списку: \n'+' - додати, \n'-' - відняти, \n'*' - помножити, \n'/' - поділити, \n'%' - знайти остачу, \n'^' - піднести до степеня", "isoperation");
    if(operation){
        numberSecond = parseFloat(getUserInput(`Задайте ${operation === '^' ? "значення степеня" : "друге число"}`, operation === '/' ? "isnumericOrByZero" : "isnumeric"));
    }
}

let isUserInput = !isNaN(numberOne) && !isNaN(numberSecond) && operation !== null;

if(isUserInput){
    let result = doMath(numberOne, operation, numberSecond)
    displayText(`${numberOne} ${operation} ${numberSecond} = ${result}`, `<h2>Результат обчислення:</h2>`)
}
else{
    displayText(`Обчислення скасовано користувачем`, `<h2>Результат обчислення:</h2>`)
}
//#endregion

