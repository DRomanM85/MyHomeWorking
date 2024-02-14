//Function to set values for a two-dimensional array based on user input.
function setElementArray(lenghtMainArray, lenghtChildArray){
    let arrayValue = []
    if(lenghtMainArray > 0){
        for (let i = 0; i < lenghtMainArray; i++) {
            arrayValue[i] = [];
            for (let j = 0; j < lenghtChildArray[i]; j++) {
                var userValueElement = getUserInput(`Задайте значення елементу ${i+1}-го масиву ${j+1}-го підмасиву`, null, false);
                if(userValueElement || userValueElement === ""){
                    arrayValue[i][j] = userValueElement;
                }
                else{
                    arrayValue = [];
                }
            }
          }
    }
    return arrayValue;
}