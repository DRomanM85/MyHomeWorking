

let userName = getUserName('Привіт👋, давай знайомитися🤝!');
if(userName === null || typeof userName === 'undefined'){
    sendMessageForUser('Дуже прикро😞, що ти передумав🤷‍♂️!');
}
else
{
    sendMessageForUser(`Круто🎉, радий😊 знайомству ${userName}!!! \nДавай зіграємо, Я зараз спитаю три значення, а потім рандомно їх тобі покажу.`);

}

