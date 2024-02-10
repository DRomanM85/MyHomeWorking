let myArray = [];

function createArray() {

    myArray = [];
    let arrayLength = parseInt(prompt("Введіть довжину масиву:"));
    while(isNaN(arrayLength) || arrayLength <= 0){
        if (isNaN(arrayLength) || arrayLength <= 0) {
            alert("Будь ласка, введіть коректну додатню довжину масиву.");
            return;
        }    
        arrayLength = parseInt(prompt("Введіть довжину масиву:"));
    }
    
    for (let i = 0; i < arrayLength; i++) {
        let element = parseFloat(prompt(`Введіть елемент масиву (елемент ${i + 1}):`));
        while(isNaN(element)){
            alert("Будь ласка, введіть коректне число для елементу масиву.");
            element = parseFloat(prompt(`Введіть елемент масиву (елемент ${i + 1}):`));
        }
        
        myArray.push(element);
    }
    displayPrint();
}

function displayPrint() {

    document.getElementById('resultTask1').innerHTML = `Масив: [${myArray.join(', ')}]`;
}

function sortArray(up) {

    myArray.sort(function(a, b) {
        return up
            ?  a - b
            : b - a; 
        
    });
    displayPrint();
}

function deleteArray() {
    if (myArray.length < 5) {
        alert("Недостатньо елементів для видалення");
        return;
    }

    myArray.splice(1, 4);

    displayPrint();
}

