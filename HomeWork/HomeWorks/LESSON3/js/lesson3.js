function printNumbersWithStep() {
    let resultMessage = "Числа від 20 до 30 з кроком 0.5: <br>";
    
    let color = 'green';

    for (let i = 20; i <= 30; i += 0.5) {
        resultMessage += `<span style=\"color: ${color};\">${i} </span>`;
        color = color === 'green' ? 'red' : 'green'
    }

    // Виводимо результат на сторінку
    document.getElementById('resultTask1').innerHTML = resultMessage;
}

function calculateExchangeRate() {
    let exchangeRate = 27;
    let resultMessage = `Вартість долара в гривнях курс ${exchangeRate}:<br>`;
    
    for (let dollars = 10; dollars <= 100; dollars += 10) {
        let inHryvnia = dollars * exchangeRate;
        resultMessage += `$${dollars} = ${inHryvnia} грн<br>`;
    }

    // Виводимо результат на сторінку
    document.getElementById('resultTask2').innerHTML = resultMessage;
}

function printSquaresUpToN() {

    let numberUser = parseInt(document.getElementById('numberUser').value);
    let resultMessage = `Цілі числа від 1 до 100, квадрат яких не перевищує ${numberUser}:<br>`;
    
    let i = 1;
    while (i <= 100 && i * i <= numberUser) {
        resultMessage += `${i} (${i * i}), `;
        i++;
    }

    resultMessage = resultMessage.slice(0, -2);

    document.getElementById('resultTask3').innerHTML = resultMessage;
}

function isPrimeNumber() {
    let numberUser = parseInt(document.getElementById('numberPrime').value);
    let resultMessage = ``;
    if (numberUser <= 1) {
        resultMessage = `Числа менше або рівні 1 не є простими`;
    }

    for (let i = 2; i <= Math.sqrt(numberUser); i++) {
        if (numberUser % i === 0) {
            resultMessage = `Знайдено дільник, число не є простим`; 
            break;
        }
    }

    document.getElementById('resultTask4').innerText = resultMessage === `` ? `Число ${numberUser} просте` : resultMessage;
}

function isPowerOfThree() {
    let numberUser = parseInt(document.getElementById('numberPowerThree').value);
    let resultMessage = `Не можна отримати число ${numberUser} шляхом піднесення трійки до певного степеня`;
    let power = 0;
    if (numberUser <= 0) {
        resultMessage = `Від'ємні числа та 0 не є ступенями числа 3`;
    }
    else
    {
        while (Math.pow(3, power) <= numberUser) {
            if (Math.pow(3, power) === numberUser) {
                resultMessage = `Можна отримати ${numberUser} взвівши 3 до степеня ${power}`
                break;
            }
            power++;
        }
    }
    
    document.getElementById('resultTask5').innerText = resultMessage;
}

