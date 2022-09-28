const factNum = require("../factorial");
const ratioNums = require("../ratio");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioNums(num1, num2);
  const factorial = factNum(num3);

  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
