'use strict';

const task1 = document.getElementById('task1');

const res = task1.innerHTML.replace(/(функци)([ия])?/g, (match, val1, val2) => {
  // console.log(match, val1, val2);
  // console.log(`<strong>${val1 + val2}</strong>`);
  return `<strong>${val1 + val2}</strong>`;
});

task1.innerHTML = res;
