//Retrieve the user's name
function getUserName(messageForUser)
{
    let userName = prompt(messageForUser, 'YOUR NAME');
    try {
        if(checkAnswerUser(userName)){
            return userName;
        }
        else
        {
            if(userName === "YOUR NAME"){
                getUserName('Напевно моя підказка спантеличила🤔 тебе. \nЗамість "YOUR NAME" впиши🖊️ своє і`мя.');
            }
            else if(userName === ""){
                getUserName('Упс😬!!! Якто сталося, ти забув🤷‍♂️ написати📝 своє імя.');
            }
            else
            {
                return null;
            }
        }
    } catch (error) {
        console.error(error);
    }
    
};

//Validate the input
function checkAnswerUser(userName)
{
    return userName != null && userName != "" && userName != "YOUR NAME";
};

//Send a message
function sendMessageForUser(messageUser)
{
    alert(messageUser);
};

function getUserValue(messageForUser)
{
    var userValue = prompt(messageForUser);
    if(checkAnswerUser(userValue)){
        return userValue;
    }
    else
    {
        getUserValue('Яка прикристь, ти відправив порожній рядок.');
    }
    
}

function randomConcatenation(userArray) {
    const shuffledArray = userArray.sort(() => Math.random() - 0.5);

    const result = shuffledArray.join(' - ');
    return result;
}