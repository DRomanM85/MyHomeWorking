
const messageError = "Будь ласка, введіть коректні числа";

        function compareNumbers() {
            let numberOne = parseFloat(document.getElementById('number1').value);
            let numberSecond = parseFloat(document.getElementById('number2').value);

            if (!isNaN(numberOne) && !isNaN(numberSecond)) {
                if (numberOne > numberSecond) {
                    document.getElementById('resultTask1').innerText = numberOne + " є більшим за " + numberSecond;
                } else if (numberOne < numberSecond) {
                    document.getElementById('resultTask1').innerText = numberOne + " є меншим за " + numberSecond;
                } else {
                    document.getElementById('resultTask1').innerText = "Числа рівні";
                }
            } else {
                document.getElementById('resultTask1').innerText = messageError;
            }
        }

        function compareDistance() {
            let distanceInFeet = parseFloat(document.getElementById('distanceInFeet').value);
            let distanceInKilometers = parseFloat(document.getElementById('distanceInKilometers').value);
            const koefFeetInMeters = 0.305;

            if (!isNaN(distanceInKilometers) && !isNaN(distanceInFeet)) {

                console.log(distanceInFeet)
                let distanceInFeetInKilometers = (distanceInFeet * koefFeetInMeters)/1000;
                console.log(distanceInFeetInKilometers)
                if (distanceInKilometers < distanceInFeetInKilometers) {
                    document.getElementById('resultTask2').innerText = "Відстань в кілометрах менше.";
                } else if (distanceInKilometers > distanceInFeetInKilometers) {
                    document.getElementById('resultTask2').innerText = "Відстань в футах менше.";
                } else {
                    document.getElementById('resultTask2').innerText = "Відстані однакові";
                }
            } else {
                document.getElementById('resultTask2').innerText = messageError;
            }
        }

        function convertDistance() {
            let distanceInFeet = parseFloat(document.getElementById('distanceInFeet').value);
            let distanceInKilometers = parseFloat(document.getElementById('distanceInKilometers').value);
            const koefFeetInKilometers = 0.0003048;
            let distanceConvertInKilometers = 0;
            let distanceConvertInFeet = 0;

            if (!isNaN(distanceInFeet)) {
                distanceConvertInKilometers = (distanceInFeet * koefFeetInKilometers).toFixed(4);
            } else {
                distanceInFeet = 0;
            }
            if (!isNaN(distanceInKilometers)) {
                distanceConvertInFeet = (distanceInKilometers / koefFeetInKilometers).toFixed(4);
            } else {
                distanceInKilometers = 0;
            }

            distanceConvertInFeet !== 0 && distanceConvertInKilometers === 0 ?
                document.getElementById('resultTask2').innerText = `Відстань в футах: ${distanceInKilometers} км. ≈ ${distanceConvertInFeet} фут.` : 
                    distanceConvertInFeet === 0 && distanceConvertInKilometers !== 0 ?
                        document.getElementById('resultTask2').innerText = `Відстань в кілометрах: ${distanceInFeet} фут. ≈ ${distanceConvertInKilometers} км.` : 
                            document.getElementById('resultTask2').innerText = `Відстань в футах: ${distanceInKilometers} км. ≈ ${distanceConvertInFeet} фут. \nВідстань в кілометрах: ${distanceInFeet} фут. ≈ ${distanceConvertInKilometers} км.`;
            
        }

        function clickButtonCheckIsDivisor(){
            let numberA = parseFloat(document.getElementById('numberOne').value);
            let numberB = parseFloat(document.getElementById('numberSecond').value);
            let resultMessange = ""
            if (!isNaN(numberA) && !isNaN(numberB)) {

                if (isDivisor(numberA, numberB)) {
                    resultMessange += `Число ${numberA} є дільником числа ${numberB} \n`;
                } else{
                    resultMessange += `Число ${numberA} не є дільником числа ${numberB} \n`
                };
                if(isDivisor(numberB, numberA)){
                    resultMessange += `Число ${numberB} є дільником числа ${numberA} \n`;
                }
                else{
                    resultMessange += `Число ${numberB} не є дільником числа ${numberA}`;
                }
            } else {
                resultMessange = messageError;
            }
            document.getElementById('resultTask3').innerText = resultMessange;
        }

        function clickButtonRemainder(){
            let numberUser = parseInt(document.getElementById('numberUser').value);
            resultMessange = "";
            if (!isNaN(numberUser)) {
                let lastDigit = numberUser % 10;
                resultMessange = `Число ${numberUser} закінчується цифрою ${lastDigit} та є ${numberUser % 2 === 0 ? "парним" : "не парним"}`;
            } else {
                resultMessange = messageError;
            }
            document.getElementById('resultTask4').innerText = resultMessange;
        }

        function clickButtonTwoDigit(){
            let twoDigitNumber = parseInt(document.getElementById('twoDigitNumber').value);
            resultMessange = "";
            if (!isNaN(twoDigitNumber)) {
                if(twoDigitNumber >= 10 && twoDigitNumber <= 99){
                    let firstDigit = Math.floor(twoDigitNumber / 10);
                    let secondDigit = twoDigitNumber % 10;
                    resultMessange = (firstDigit > secondDigit) ? `Перша цифра ${firstDigit} більша за другу ${secondDigit}` :
                        (secondDigit > firstDigit) ? `Перша цифра ${firstDigit} менша за другу ${secondDigit}` : "Цифри рівні";
                }
                else{
                    resultMessange = "Введено не двозначне число."
                }
            } else {
                resultMessange = messageError;
            }
            document.getElementById('resultTask5').innerText = resultMessange;
        }

        function clickButtonThreeDigitNumber(){
            let threeDigitNumber = parseInt(document.getElementById('threeDigitNumber').value);
            resultMessange = "";
            if (!isNaN(threeDigitNumber)) {
                if(threeDigitNumber >= 100 && threeDigitNumber <= 999){
                    let firstDigit = Math.floor(threeDigitNumber / 100);
                    let secondDigit = Math.floor((threeDigitNumber % 100) / 10);
                    let thirdDigit = threeDigitNumber % 10;

                    let sumOfDigits = firstDigit + secondDigit + thirdDigit;
                    let productOfDigits = firstDigit * secondDigit * thirdDigit;

                    resultMessange += `Сума цифр трьохзначного числа ${threeDigitNumber} є ${((sumOfDigits % 2 === 0) ? "парною." : "непарною.")} \n`;
                    resultMessange += `Сума цифр трьохзначного числа ${threeDigitNumber} ${(sumOfDigits % 5 === 0) ? " кратна 5." : " не кратна 5."} \n`;
                    resultMessange += `Добуток цифр трьохзначного числа ${threeDigitNumber} ${(productOfDigits > 100) ? " більше 100." : " не більше 100."} \n`;

                }
                else{
                    resultMessange = "Введено не трьохзначне число."
                }
            } else {
                resultMessange = messageError;
            }
            document.getElementById('resultTask6').innerText = resultMessange;
        }

        function clickButtonThreeDigitNumber2(){
            let threeDigitNumber = parseInt(document.getElementById('threeDigitNumber2').value);
            resultMessange = "";
            if (!isNaN(threeDigitNumber)) {
                if(threeDigitNumber >= 100 && threeDigitNumber <= 999){
                    let firstDigit = Math.floor(threeDigitNumber / 100);
                    let secondDigit = Math.floor((threeDigitNumber % 100) / 10);
                    let thirdDigit = threeDigitNumber % 10;

                    let areAllDigitsEqual = firstDigit === secondDigit && secondDigit === thirdDigit;
                    let isAnyDigitEqual = firstDigit === secondDigit || secondDigit === thirdDigit || firstDigit === thirdDigit;

                    resultMessange += `Всі цифри трьохзначного числа ${threeDigitNumber} однакові: ${areAllDigitsEqual ? "<span style=\"color: green;\">ТАК</span>" : "<span style=\"color: red;\">HІ</span>"} <br>`;
                    resultMessange += `Серед цифр трьохзначного числа ${threeDigitNumber} є однакові: ${isAnyDigitEqual ? "<span style='color: green;'>ТАК</span>" : "<span style='color: red;'>HІ</span>"}`;

                }
                else{
                    resultMessange = "Введено не трьохзначне число."
                }
            } else {
                resultMessange = messageError;
            }
            document.getElementById('resultTask7').innerHTML = resultMessange;
        }

        function isMirrorNumber(){
            let sixDigitNumber = parseInt(document.getElementById('sixDigitNumber').value);
            resultMessange = "";
            if (!isNaN(sixDigitNumber)) {
                if(sixDigitNumber >= 100000 && sixDigitNumber <= 999999){
                    let numberString = sixDigitNumber.toString();

                    let firstPart = numberString.slice(0, 3);
                    let secondPart = numberString.slice(3).split('').reverse().join('');
            
                    resultMessange = `Числа ${sixDigitNumber} ${firstPart === secondPart ? "є паліндром" : "не є паліндром"}`;

                }
                else{
                    resultMessange = "Введено не шестизначне число."
                }
            } else {
                resultMessange = messageError;
            }
            document.getElementById('resultTask8').innerHTML = resultMessange;
        }

        function isDivisor(numberA, numberB){
            if (numberB % numberA === 0) {
                return true;
            } else {
                return false;
            }
        }
