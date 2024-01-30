
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

        function isDivisor(numberA, numberB){
            if (numberB % numberA === 0) {
                return true;
            } else {
                return false;
            }
        }
