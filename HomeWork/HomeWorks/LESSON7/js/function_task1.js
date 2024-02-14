// Function to generate a random array containing various data types
function generateRandomDataTypesArray() {

    const randomDataTypesArray = [];
  
    for (let i = 0; i < 40; i++) {

      const randomType = Math.floor(Math.random() * 14); 
  
      switch (randomType) {
        case 0:
          randomDataTypesArray.push("Hello, World!"); // String
          break;
        case 1:
          randomDataTypesArray.push(Math.random()); // Number
          break;
        case 2:
          randomDataTypesArray.push(Math.floor(Math.random() * 100)); // Number
          break;
        case 3:
          randomDataTypesArray.push(i % 2 === 0); // Boolean
          break;
        case 4:
          randomDataTypesArray.push(undefined); // Undefined
          break;
        case 5:
          randomDataTypesArray.push(null); // Null
          break;
        case 6:
          randomDataTypesArray.push(Symbol("description")); // Symbol
          break;
        case 7:
          randomDataTypesArray.push(NaN); // NaN
          break;
        case 8:
          randomDataTypesArray.push({ key: "value" }); // Object
          break;
        case 9:
          randomDataTypesArray.push([1, 2, 3]); // Array
          break;
        case 10:
          randomDataTypesArray.push(function () {}); // Function
          break;
        case 11:
          randomDataTypesArray.push(new Date()); // Date
          break;
        case 12:
          randomDataTypesArray.push(/pattern/); // RegExp
          break;
        case 13:
          randomDataTypesArray.push(-Math.floor(Math.random() * 100)); // Number
          break;
        default:
          break;
      }
    }
  
    return randomDataTypesArray;
}


// Function to extract numbers from an array, returning null if the array contains no numbers
function extractNumbers(randomArray) {
    const numericArray = [];  
  
    // Check if the array contains any numbers
    if (randomArray.some((element) => typeof element === 'number')) {
        for (let i = 0; i < randomArray.length; i++) {
            if (typeof randomArray[i] === 'number') {
                if(!isNaN(randomArray[i])){
                    numericArray.push(randomArray[i]);
                }
            }
        }

        // Return the array containing only numeric elements
        return numericArray.length === 0 ? null : numericArray;  
    } else {
        return null; // Return null if the array contains no numbers
    }
}


// Function to calculate the numeric average of an array, returning null if non-numeric elements are present
function calculateNumericAverage(numericArray) {
    if (numericArray.every((element) => typeof element === 'number')) {
      // Use reduce to sum all numeric values and return the average
      return numericArray.reduce((acc, val) => acc + val, 0) / numericArray.length;
    } else {
      // Return null if non-numeric elements are present
      return null; 
    }
}
