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

const body4 = (body.innerHTML = res3);

const res4 = body4.replace(
  /http:\/\/(\w+\.\w+\.?\w+)([\/][\w]+[\/]([\w-]+))?\/?/g,
  (match, val1, val2) => {
    // console.log(match);
    // console.log(val1);
    return `<a href="${match}">${val1}</a>`;
  }
);

const body5 = (body.innerHTML = res4);

const res5 = body5.match(/#(\d?[ABCDEF]?){1,6}/gi);

console.log(res5);
// const res5 = body4.match(
//   /http:\/\/\w+\.(\w+)\.?\w+([\/][\w]+[\/]([\w-]+))?\/?/g
// );
// console.log(res5);
