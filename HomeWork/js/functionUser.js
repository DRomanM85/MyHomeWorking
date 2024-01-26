//#region TASK_1 
{
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
                else{
                    return null;
                }
            }
            return userValue;
        }
        catch (error) {
            console.error(error);
        }
    };
}
//#endregion



//#region TASK_2
{
    //Get three values from the user
    function getUserValue(messageForUser){
        let userValue = null;
        userValue = prompt(messageForUser);
        try{
            if(checkAnswerUser(userValue)){
            return userValue;
            }
            else{
                if(userValue === ""){
                    userValue = getUserValue('Яка прикристь😞, \nти відправив📬 порожній рядок🚫.');
                }
                else
                {
                    return null;
                }
            }
            return userValue;
        } 
        catch (error) {
            console.error(error);
        }
    }


    //Get a number from the user
    function getUserNumber(messageForUser){
        let userValue = null;
        userValue = prompt(messageForUser);
        if(isFiveDigitNumber(userValue)){
            return userValue;
        }
        else{
            userValue = getUserNumber('Яка прикристь😕, \nти відправив не🚫 число🔢 або не 5️⃣-ти значне.');
        }
        return userValue;
    }


    //Split the number into digits
    function parseFiveNumber(number){
        let numderArray = String(number).split('').reverse();
        return numderArray.join(' ');
    }


    //Validate the input numder
    function isFiveDigitNumber(usernumber){
        if (!isNaN(usernumber)) {
            return /^\d{5}$/.test(usernumber);
        }
        return false;
    };


    //Concatenate the array randomly
    function randomConcatenation(userArray) {
        const shuffledArray = userArray.sort(() => Math.random() - 0.5);
    
        const result = shuffledArray.join(' - ');
        return result;
    }
}
//#endregion



//#region TASK_3
{
    //Retrieve the user's operation
    function getUserOperation(messageForUser){
        let userValue = null;
        userValue = prompt(messageForUser);
        try {
            if(checkAnswerOperation(userValue)){
                return userValue;
            }
            else{
                if(userValue !== null && typeof userValue !== 'undefined'){
                    userValue = getUserOperation('Я не гуру🧘‍♂️ математики, \nале ти точно написав не🙅‍♂️ математичну операцію. \nСпробуй знову');
                }
                else{
                    return null;
                }
            }
            return userValue;
        } catch (error) {
            console.error(error);
        }
    };
    

    //Retrieve the user's number
    function getUserNumber(messageForUser){
        let userValue = null;
        userValue = prompt(messageForUser);
        try {
            if(isNumber(userValue)){
                return parseFloat(userValue);
            }
            else{
                if(userValue !== null && typeof userValue !== 'undefined'){
                    userValue = getUserNumber('Щось це не дуже🙅 схоже на число🔢. \nСпробуй знову');
                }
                else{
                    return null;
                }
            }
            return userValue;
        } catch (error) {
            console.error(error);
        }
    };


    //Performs a mathematical operation on two numbers.
    function performOperation(numberOne, numberSecond, operation) {
        switch (operation) {
            case '+':
                return numberOne + numberSecond;
            case '-':
                return numberOne - numberSecond;
            case '*':
                return numberOne * numberSecond;
            case '/':
                return numberSecond !== 0 ? numberOne / numberSecond : 'На нуль не ділиться';
            default:
                return 'Невідома операція';
        }
    }
}
//#endregion



//#region TASK_4
{
    //Retrieve the user's Hour
    function getUserHour(messageForUser) {
        let userValue = null;
        userValue = prompt(messageForUser);
        try {
            if(userValue !== null && typeof userValue !== 'undefined'){
                if (isNumber(userValue) || parseFloat(userValue) > 0) {
                    return parseFloat(userValue);
                }
                else{
                    userValue = getUserHour('Яка халепа🤔! \nЦе, що завгоднo🤯, але точно не кількість годин. \nСпробуйте знову🔄😊');
                }
            }
            else{
                return null;
            }
            return userValue === null ? null : parseFloat(userValue);
        } catch (error) {
            console.error(error);
        }
    }
}
//#endregion



//#region OtherMethods
{
    //Validate the input operation
    function checkAnswerOperation(userOperation){
        let listTrueOperation = ["+","-","*","/"]
        return listTrueOperation.includes(userOperation);
    };


    //Send a message
    function sendMessageForUser(messageUser){
        alert(messageUser);
    }


    //Validate the input
    function checkAnswerUser(userName){
        return userName !== null && userName !== "" && userName !== "YOUR NAME";
    };


    function isNumber(number) {
        const cleanedInput = number.replace(/\s/g, '');
        return !isNaN(parseFloat(cleanedInput)) && isFinite(cleanedInput);
    }


    function numberToTriads(number){
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
}
//#endregion