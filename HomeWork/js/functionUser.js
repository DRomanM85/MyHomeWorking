//Retrieve the user's name
function getUserName(messageForUser)
{
    let userValue = null;
    userValue = prompt(messageForUser, 'YOUR NAME');
    
    try {
        if(checkAnswerUser(userValue)){
            return userValue;
        }
        else
        {
            if(userValue === "YOUR NAME"){
                userValue = getUserName('Напевно моя підказка спантеличила🤔 тебе. \nЗамість "YOUR NAME" впиши🖊️ своє і`мя.');
            }
            else if(userValue === ""){
                userValue = getUserName('Упс😬!!! Якто сталося, ти забув🤷‍♂️ написати📝 своє імя.');
            }
            else
            {
                return null;
            }
        }
        return userValue;
    } catch (error) {
        console.error(error);
    }
    
};

//Get three values from the user
function getUserValue(messageForUser)
{
    let userValue = null;
    userValue = prompt(messageForUser);
    try
    {
        if(checkAnswerUser(userValue)){
            return userValue;
        }
        else
        {
            if(userValue === ""){
                userValue = getUserValue('Яка прикристь😞, \nти відправив📬 порожній рядок🚫.');
            }
            else
            {
                return null;
            }
            
        }
        return userValue;
    } catch (error) {
        console.error(error);
    }
}

//Get a number from the user
function getUserNumber(messageForUser)
{
    let userValue = null;
    userValue = prompt(messageForUser);
    if(isFiveDigitNumber(userValue)){
        return userValue;
    }
    else
    {
        userValue = getUserNumber('Яка прикристь😕, \nти відправив не🚫 число🔢 або не 5️⃣-ти значне.');
    }
    return userValue;
}

//Split the number into digits
function parseFiveNumber(number)
{
    let numderArray = String(number).split('').reverse();
    
    return numderArray.join(' ');
}

//Validate the input
function checkAnswerUser(userName)
{
    return userName != null && userName != "" && userName != "YOUR NAME";
};

//Validate the input numder
function isFiveDigitNumber(usernumber)
{
    if (!isNaN(usernumber)) {
        return /^\d{5}$/.test(usernumber);
    }
    return false;
};

//Send a message
function sendMessageForUser(messageUser)
{
    alert(messageUser);
};


function randomConcatenation(userArray) {
    const shuffledArray = userArray.sort(() => Math.random() - 0.5);

    const result = shuffledArray.join(' - ');
    return result;
}