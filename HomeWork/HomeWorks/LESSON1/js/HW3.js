let userOperation = getUserOperation('А тепер трішки математики: \nВибери дію ➕ | ➖ | ✖️ |➗');
if(userOperation === null || typeof userOperation === 'undefined'){
    sendMessageForUser('Дуже прикро😞, що ти передумав🤷‍♂️!');
}
else
{
    let userNumberOne = getUserNumber('Ще трішки⏳ і магія. \nДавай, не соромся🙈, пиши перше число...');
    if(userNumberOne === null || typeof userNumberOne === 'undefined'){
        sendMessageForUser('Дуже прикро😞, що ти передумав🤷‍♂️!');
    }
    else{
        let userNumberSecond = getUserNumber('Майже готово👍. \nТепер пиши друге число...');
        if(userNumberSecond === null || typeof userNumberSecond === 'undefined'){
            sendMessageForUser('Дуже прикро😞, що ти передумав🤷‍♂️!');
        }
        else{
            sendMessageForUser(`Вуаля🎩✨ ${userNumberOne} ${userOperation} ${userNumberSecond} = ${performOperation(userNumberOne,userNumberSecond,userOperation)} не віриш🤷‍♂️? \nПеревіряй на калькуляторі🧮.`);
        }
    }
}