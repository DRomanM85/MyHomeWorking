// Function to perform mathematical operations based on the operator
function doMath(x, znak, y) {
    switch (znak) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      case '/':
        if(y === 0){
            return NaN;
        }
        return x / y;
      case '%':
        return x % y;
      case '^':
        return x ** y;
      default:
        return NaN;
    }
}