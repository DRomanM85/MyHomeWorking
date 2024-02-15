// Function for calorie calculation using closure
function createCalorieCounter() {
    let totalCalories = 0;

    return function (foodOrExercise) {
        totalCalories += foodOrExercise.calories;
        return totalCalories;
    };
}

// Function to get array element by name
function getElementByName(array, name) {
    const foundElement = array.find(item => item.name === name);
    return foundElement || null;
}

// Function to display an string in the document
function displayText(textValue, heading = "") {
    document.write(`<h2>${heading}</h2>`);
    document.write("<pre>" + textValue + "</pre><br>");
}