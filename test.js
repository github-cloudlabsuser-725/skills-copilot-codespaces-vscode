const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (firstNum) => {
  rl.question('Enter the second number: ', (secondNum) => {
    rl.question('Enter the operation (add, sub, mul, div): ', (operation) => {
      let result;
      firstNum = Number(firstNum);
      secondNum = Number(secondNum);

      switch(operation) {
        case 'add':
          result = firstNum + secondNum;
          break;
        case 'sub':
          result = firstNum - secondNum;
          break;
        case 'mul':
          result = firstNum * secondNum;
          break;
        case 'div':
          if (secondNum !== 0) {
            result = firstNum / secondNum;
          } else {
            console.log('Error: Division by zero is not allowed.');
            rl.close();
            return;
          }
          break;
        default:
          console.log('Error: Invalid operation. Please enter add, sub, mul, or div.');
          rl.close();
          return;
      }

      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});