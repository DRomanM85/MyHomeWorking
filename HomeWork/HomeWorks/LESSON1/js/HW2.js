let userValue = [];
let result = true;
for (let index = 0; index < 3; index++) {

    let valueUser = getUserValue("Введи значення "+(index+1)+" з 3.");
    if(valueUser === null || typeof valueUser === 'undefined'){
        sendMessageForUser('Дуже прикро😞, що ти передумав🤷‍♂️!');
        result = false;
        break;
    }
    userValue[index] = valueUser;
}
if(result)
{
    sendMessageForUser(randomConcatenation(userValue));
    let valueUser = getUserNumber("Круто, вийшло😎👍. \nА тепер напиши✍️ мені 5️⃣-ти значне число🔢.");
    if(valueUser === null || typeof valueUser === 'undefined'){

        sendMessageForUser('Дуже прикро😞, що ти передумав🤷‍♂️!');
    }
    else{
         sendMessageForUser("А ось✨🎩 воно по цифрам: \n" + parseFiveNumber(valueUser));
    }
}

