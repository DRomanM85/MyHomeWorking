

let userName = getUserName('Привіт👋, давай знайомитися🤝!');
if(userName === null || typeof userName === 'undefined'){
    sendMessageForUser('Дуже прикро😞, що ти передумав🤷‍♂️!');
}
else
{
    sendMessageForUser(`Круто🎉, радий😊 знайомству ${userName}!!! \nДавай зіграємо🎮, \nЯ зараз спитаю 3️⃣ значення, \nа потім рандомно🎲 їх тобі покажу👀.`);

}

