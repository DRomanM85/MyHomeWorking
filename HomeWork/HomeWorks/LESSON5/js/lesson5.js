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

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] < 0) {
            negativeCount++;
        }
    }
    displayPrint(`Кількість негативних елементів: ${negativeCount}`);

}

function countOddPositiveElements() {
    let oddPositiveCount = 0;

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] > 0 && myArray[i] % 2 !== 0) {
            oddPositiveCount++;
        }
    }
    displayPrint(`Кількість непарних позитивних елементів: ${oddPositiveCount}`);
}

function countEvenPositiveElements() {
    let evenPositiveCount = 0;

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] > 0 && myArray[i] % 2 === 0) {
            evenPositiveCount++;
        }
    }

    displayPrint(`Кількість парних позитивних елементів: ${evenPositiveCount}`);
}

function displayPrint(message) {

    document.getElementById('resultFunc').innerHTML = message;
}