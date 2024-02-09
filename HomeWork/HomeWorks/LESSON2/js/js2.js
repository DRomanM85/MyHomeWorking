function getUserInfo() {
    let birthYear = prompt("Введіть свій рік народження:");
    let city = prompt("Введіть місто, де ви живете:");
    let favoriteSport = prompt("Введіть свій улюблений вид спорту:");

    if (birthYear === null || city === null || favoriteSport === null) {
        alert("Шкода, що ви не захотіли ввести свою інформацію.");
        return;
    }

    let currentYear = new Date().getFullYear();
    let age = currentYear - parseInt(birthYear);

    let message = `Ваш вік: ${age} років<br>`;

    if (city.toLowerCase() === "київ" || city.toLowerCase() === "вашингтон" || city.toLowerCase() === "лондон") {
        let country;
        switch (city.toLowerCase()) {
            case "київ":
                country = "Україна";
                break;
            case "вашингтон":
                country = "Сполучені Штати Америки";
                break;
            case "лондон":
                country = "Велика Британія";
                break;
            default:
                country = "не визначена країна";
        }
        message += `Ти живеш у столиці ${country}<br>`;
    } else {
        message += `Ти живеш у місті ${city}<br>`;
    }

    let sportsAndChampions = {
        "футбол": "Ліонель Мессі",
        "теніс": "Серена Вільямс",
        "баскетбол": "Леброн Джеймс"
    };

    if (favoriteSport.toLowerCase() in sportsAndChampions) {
        message += `Круто! Хочеш стати як ${sportsAndChampions[favoriteSport.toLowerCase()]}?`;
    } else {
        message += `Ти вибрав улюблений вид спорту: ${favoriteSport}`;
    }

    document.getElementById('answers').innerHTML = message;
}