const DaysInHour = 24;
const MinutesInHour = 60;
const SecondsInHours = 3600;
let finalResult = [];
finalResult[1] = getUserHour('І на фінал🏁🚩 напиши напиши кількість години🕰️,\nа я порахую скільки це \nднів📆, хвилин⏰ і секунд⏱️.').toLocaleString('en-US', { useGrouping: false });
if(finalResult[1] === null || typeof finalResult[1] === 'undefined'){
    sendMessageForUser('Дуже прикро😞, що ти передумав🤷‍♂️!');
}
else
{
    finalResult[0] = Math.floor(finalResult[1]/DaysInHour);
    finalResult[2] = finalResult[1]*MinutesInHour;
    finalResult[3] = finalResult[1]*SecondsInHours;

    sendMessageForUser(`У ${numberToTriads(finalResult[1])} годинах.  \n📆Днів: ${numberToTriads(finalResult[0])} \n⏰Хвилин: ${numberToTriads(finalResult[2])} \n⏱️Секунд: ${numberToTriads(finalResult[3])}. \nДякую🙏 за задачі Бувай👋.`);
}