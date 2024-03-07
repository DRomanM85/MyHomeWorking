function concatenation(){
    return uppercaseLetters + lowercaseLetters + digits + specialCharacters;
}

function setOneSymbol(arraySymbol){
    return arraySymbol.charAt(Math.floor(Math.random() * arraySymbol.length));
}

function setOtherSymbol(stringSymbol){
    let allCharacters = concatenation();
    for (let i = stringSymbol.length; i < lenghtString; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        stringSymbol += allCharacters.charAt(randomIndex);
    }
    return stringSymbol;
}

function mixSymbol(stringSymbol){
    return stringSymbol.split('').sort(() => Math.random() - 0.5).join('');
}

function generateKey(){

    lenghtString = getUserInput(`Задайте довжину рядка більшу за 4. \nЗа замовчуванням буде згенерено рядок з 4 символів`, null, false);

    let stringSymbol = "";
    stringSymbol += setOneSymbol(uppercaseLetters);
    stringSymbol += setOneSymbol(lowercaseLetters);
    stringSymbol += setOneSymbol(digits);
    stringSymbol += setOneSymbol(specialCharacters);
    stringSymbol = setOtherSymbol(stringSymbol);
    stringSymbol = mixSymbol(stringSymbol); 
    return stringSymbol;
}