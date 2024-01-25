 function getUserName(messageForUser)
{
    let userName = prompt(messageForUser, 'YOUR NAME');
    
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
};

function checkAnswerUser(userName)
{
    return userName != null && userName != "" && userName != "YOUR NAME";
};

function sendMessageForUser(messageUser)
{
    alert(messageUser);
};
