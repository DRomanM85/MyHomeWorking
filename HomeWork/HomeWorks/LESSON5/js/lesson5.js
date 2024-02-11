let myArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

function printArray() {
    document.getElementById('Array').innerHTML = `Масив: [${myArray.join(', ')}]`;
}

function findSumAndCountOfPositiveElements() {
    let sum = 0;
    let count = 0;
    let tempArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] > 0) {
            sum += myArray[i];
            count++;
            tempArray.push(myArray[i]);
        }
    }

    displayPrint(`Позитивні елементи: ${tempArray.join(', ')} <br> Кількість: ${count} <br>Сума: ${sum}`);
}

function findMinElementAndIndex() {
    if (myArray.length === 0) {
        displayPrint(`МАСИВ ПОРОЖНІЙ`);
        return;
    }

    let minElement = myArray[0];
    let minIndex = 0;

    for (let i = 1; i < myArray.length; i++) {
        if (myArray[i] < minElement) {
            minElement = myArray[i];
            minIndex = i;
        }
    }
    displayPrint(`Мінімальний елемент: ${minElement}  index[${minIndex}]`);
}

function findMaxElementAndIndex() {
    if (myArray.length === 0) {
        displayPrint(`МАСИВ ПОРОЖНІЙ`);
        return;
    }

    let maxElement = myArray[0];
    let maxIndex = 0;

    for (let i = 1; i < myArray.length; i++) {
        if (myArray[i] > maxElement) {
            maxElement = myArray[i];
            maxIndex = i;
        }
    }
    displayPrint(`Максимальний елемент: ${maxElement}  index[${maxIndex}]`);
}

function countNegativeElements() {
    let negativeCount = 0;
    let tempArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] < 0) {
            negativeCount++;
            tempArray.push(myArray[i]);
        }
    }
    displayPrint(`Кількість негативних елементів: ${negativeCount} <br> ${tempArray.join(', ')}`);

}

function countOddPositiveElements() {
    let oddPositiveCount = 0;
    let sumOddPositive = 0;
    let tempArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] > 0 && myArray[i] % 2 !== 0) {
            oddPositiveCount++;
            sumOddPositive += myArray[i];
            tempArray.push(myArray[i]);
        }
    }
    displayPrint(`Кількість непарних позитивних елементів: ${oddPositiveCount}<br> ${tempArray.join(', ')}  <br> Сума яких ${sumOddPositive}`);
}

function countEvenPositiveElements() {
    let evenPositiveCount = 0;
    let sumEvenPositive = 0;
    let tempArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] > 0 && myArray[i] % 2 === 0) {
            evenPositiveCount++;
            tempArray.push(myArray[i]);
            sumEvenPositive += myArray[i];
        }
    }

    displayPrint(`Кількість парних позитивних елементів: ${evenPositiveCount}<br> ${tempArray.join(', ')} <br> Сума яких ${sumEvenPositive}`);
}

function productOfPositiveElements() {
    let productPositive = 1;
    let productPositiveCount = 0;
    let tempArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] > 0) {
            productPositive *= myArray[i];
            tempArray.push(myArray[i]);
            productPositiveCount++;
        }
    }
    displayPrint(`Кількість позитивних елементів: ${productPositiveCount}<br> ${tempArray.join(', ')} <br> Добуток яких ${productPositive}`);
}

function findMaxElementAndZeroOthers() {
    let maxElement = Math.max(...myArray);

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== maxElement) {
            myArray[i] = 0;
        }
    }

    displayPrint(`Найбільший елемент: ${maxElement}`);
    printArray();
}

function displayPrint(message) {

    document.getElementById('resultFunc').innerHTML = message;
}