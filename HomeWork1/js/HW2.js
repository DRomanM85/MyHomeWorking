let userValue = [];

for (let index = 0; index < 3; index++) {

    let valueUser = getUserValue("Введи значення "+(index+1)+" з 3.");
    if(userName === null || typeof userName === 'undefined'){
        sendMessageForUser('Дуже прикро😞, що ти передумав🤷‍♂️!');
        break;
    }
    userValue[index] = valueUser;
}

sendMessageForUser(randomConcatenation(userValue));