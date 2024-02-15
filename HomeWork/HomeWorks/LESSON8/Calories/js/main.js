const calorieCounter = createCalorieCounter();

let currentFoodOrExercise = getElementByName(foodArray, "Банан");
displayText(`${currentFoodOrExercise.name} = ${currentFoodOrExercise.calories} ккал. \nВ СУМІ: ${calorieCounter(currentFoodOrExercise)}`, "ПРИЙОМ ЇЖІ");

currentFoodOrExercise = getElementByName(foodArray, "Яблуко");
displayText(`${currentFoodOrExercise.name} = ${currentFoodOrExercise.calories} ккал. \nВ СУМІ: ${calorieCounter(currentFoodOrExercise)}`, "ПРИЙОМ ЇЖІ");

currentFoodOrExercise = getElementByName(exerciseArray, "Велопрогулка");
displayText(`${currentFoodOrExercise.name} = ${currentFoodOrExercise.calories} ккал. \nВ СУМІ: ${calorieCounter(currentFoodOrExercise)}`, "ФІЗИЧНА АКТИВНІСТЬ");

currentFoodOrExercise = getElementByName(foodArray, "Курячі крильця");
displayText(`${currentFoodOrExercise.name} = ${currentFoodOrExercise.calories} ккал. \nВ СУМІ: ${calorieCounter(currentFoodOrExercise)}`,"ПРИЙОМ ЇЖІ");
