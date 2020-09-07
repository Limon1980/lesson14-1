'use strict';

const task1 = document.getElementById('task1');

const res1 = task1.innerHTML.replace(
  /(функци)([ия])?/g,
  (match, val1, val2) => {
    // console.log(match, val1, val2);
    // console.log(`<strong>${val1 + val2}</strong>`);
    return `<strong>${val1 + val2}</strong>`;
  }
);

task1.innerHTML = res1;

const task2 = document.getElementById('task2');

let res2 = (task2.innerHTML = task2.innerHTML.replace(/<b>|<\/b>/g, '')); // удалим все теги <b></b>;

res2 = res2.replace(/(\d{2}):(\d{2})/g, (match) => {
  return `<b>${match}</b>`;
});
task2.innerHTML = res2;

const body = document.querySelector('body');

const res3 = body.innerHTML.replace(/"[^\w]+"|«[^\w]+»/g, (match) => {
  return `<mark>${match}</mark>`;
});

body.innerHTML = res3;
console.log(res3);
