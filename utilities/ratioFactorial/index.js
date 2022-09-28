const factNum = require("./factorial");
const rationNums = require("./ratio");

const ratioAndFactorial = function (num1, num2, num3) {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factNum = factorialOfNumber(num3);
  const output = {
    ratio: ratio,
    factorial: factNum,
  };
  console.log(output);
};
