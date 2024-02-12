function writeNumber() {
    let resultMessange = "";
    let start = 10;
    let end = 20;
    while(start <= end){
        resultMessange += start++;
        if (start <= end) {
            resultMessange += ', ';
        }
    }
    document.getElementById('resultTask1').innerText = resultMessange;
}

function writeSquareNumber() {
    let resultMessange = "";
    let start = 10;
    let end = 20;
    for (let i = start; i <= end; i++) {
        resultMessange += (i * i);

        if (i < end) {
            resultMessange += ', ';
        }
    }
    document.getElementById('resultTask2').innerText = resultMessange;
}

function multiplication7() {
    let resultMessange = ""
    resultMessange += "<h2>Таблиця множення на 7:</h2>";
    resultMessange += "<table border='1'>";
        
    resultMessange += "<tr>";
    resultMessange += "<th>Число</th>";
    resultMessange += "<th>Результат</th>";
    resultMessange += "</tr>";

        for (let i = 1; i <= 10; i++) {
            resultMessange += "<tr>";
            resultMessange += "<td>" + i + "</td>";
            resultMessange += "<td>" + (i * 7) + "</td>";
            resultMessange += "</tr>";
        }

    resultMessange += "</table>";

    document.getElementById('resultTask3').innerHTML = resultMessange;
}

function sumNumber() {
    let n = 15;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    document.getElementById('resultTask4').innerHTML = `Сума чисел від 1 до 15: ${sum}`;
}


function multiplicationNumber() {
    let start = 15;
    let end = 35;

    let multipli = 1;
    for (let i = start; i <= end; i++) {
        multipli *= i;
    }
    document.getElementById('resultTask5').innerHTML = `Добуток чисел від ${start} до ${end}: ${multipli.toLocaleString()}`;
}

function averageOfNumbers() {
    let start = 1;
    let end = 500;

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    let average = sum / (end - start + 1);

    document.getElementById('resultTask6').innerHTML = `Середнє арифметичне чисел від ${start} до ${end}: ${average}`;
}

function sumOfEvenNumbers() {
    let start = 30;
    let end = 80;

    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    // Виводимо результат
    document.getElementById('resultTask7').innerHTML = `Сума парних чисел від ${start} до ${end}: ${sum}`;
}

function multiplesOfThree() {
    let start = 100;
    let end = 200;
    let resultMessage = "";

    // Виводимо числа кратні 3
    resultMessage += "Числа від 100 до 200, кратні 3: <br>";
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0) {
            resultMessage += `${i}, `;
        }
    }

    // Обрізаємо останній символ (кому та пробіл)
    resultMessage = resultMessage.slice(0, -2);

    // Виводимо результат
    document.getElementById('resultTask8').innerHTML = resultMessage;
}

function findDivisors() {
    let numberUser = 1;
    do{
        if(chectUserValue(numberUser)){
            alert('Ви ввели не натуральне число. Повторіть спробу!')
        }
        numberUser = parseInt(prompt(`Задай будь-яке натуральне число`));
    }while(chectUserValue(numberUser));

    let divisors = [];
    let countEvens = 0;
    let sumEvens = 0;

    for (let i = 1; i <= numberUser; i++) {
        if (numberUser % i === 0) {
            if (i % 2 === 0) {
                countEvens++;
                sumEvens += i;
                divisors.push(`<span style=\"color: green;\">${i}</span>`);          
            }
            else
            {
                divisors.push(`<span style=\"color: red;\">${i}</span>`);    
            }
        }
        
    }

    document.getElementById('resultTask9').innerHTML = `Дільники числа ${numberUser}: <br> ${divisors.join(', ')} <br>З них парних ${countEvens} шт. сума яких ${sumEvens}`;
}

function chectUserValue(numberUser){
     return isNaN(numberUser) || numberUser <= 0;
}

function printMultiplicationTable() {
    let resultMessage = "<h2>Таблиця множення від 1 до 10:</h2>";
    
    resultMessage += "<table border='1'>";
    
    for (let i = 1; i <= 10; i++) {
        resultMessage += "<tr>";
        
        for (let j = 1; j <= 10; j++) {
            resultMessage += `<td>${i} x ${j} = ${i * j}</td>`;
        }
        
        resultMessage += "</tr>";
    }

    resultMessage += "</table>";
    document.getElementById('resultTask10').innerHTML = resultMessage;
}


