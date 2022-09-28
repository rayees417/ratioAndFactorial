const factNum = require("../factorial");
const rationNums = require("../ratio");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialOfNumber(num3);

  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
