'use strict';

function getResult(x, y) {
  let result = 0;
  let exp = String(x ** y);
  console.log(exp);

  for (let i = 0; i < exp.length; i++) {
    result += Number(exp[i]);
  }

  return result;
}

console.log(getResult(4, 8));