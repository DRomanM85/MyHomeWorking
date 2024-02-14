let isUserInput;

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

isUserInput = !isNaN(numberOne) && !isNaN(numberSecond) && operation !== null;

if(isUserInput){
    let result = doMath(numberOne, operation, numberSecond)
    displayText(`${numberOne} ${operation} ${numberSecond} = ${result}`, `<h2>Результат обчислення:</h2>`)
}
else{
    displayText(`Обчислення скасовано користувачем`, `<h2>Результат обчислення:</h2>`)
}
//#endregion

//#region TASK №3
let lengthMainArray = parseFloat(getUserInput("ДАВАЙ ЗАПОВНИМО ДВОМІРНИЙ МАСИВ:\n Задайте довжину основного масиву", "isnumericPositive"));
let lengthChildArrays = [];
if(!isNaN(lengthMainArray)){
    for(let i = 0; i < lengthMainArray; i++){
        var lenght = parseFloat(getUserInput(`Задайте довжину ${i+1}-го підмасиву`, "isnumericPositive"));
        if(!isNaN(lenght)){
            lengthChildArrays.splice(i, 0, lenght);
        }
        else{
            lengthChildArrays = [];
        }
    }
}

isUserInput = !isNaN(lengthMainArray) && lengthChildArrays.length > 0;

if(isUserInput){
    let userArray = setElementArray(lengthMainArray, lengthChildArrays);
    if(userArray.length > 0){
        displayArray(userArray, "ВАШ МАСИВ:");
    }
    else{
        displayText(`Створення масиву скасовано користувачам`, `<h2>ВАШ МАСИВ:</h2>`)
    }
}
else{
    displayText(`Створення масиву скасовано користувачам`, `<h2>ВАШ МАСИВ:</h2>`)
}
//#endregion

//#region TASK №4
let startLine = getUserInput("Задайте рядок символів чи напишіть речення:", null, false);
if(startLine){
    symbolsInput = getUserInput(`Вкажіть, які символи прибрати (символи задайте через кому) \nваш рядок '${startLine}':`, null, false);
    if(symbolsInput){
       displayText(startLine, "Робота з рядком");
       const symbolsToRemove = symbolsInput.split(',').map(symbol => symbol.trim());
       displayArray(symbolsToRemove)
       let newLine = deleteSymbolIsLine(startLine, symbolsToRemove)
       displayText(newLine);
    }
    else{
        displayText("Скасовано користувачем", "Робота з рядком");
    }
}
else{
    displayText("Скасовано користувачем", "Робота з рядкомк");
}
//#endregion