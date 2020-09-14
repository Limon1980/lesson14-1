'use strict';

const foo1 = (value) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(value);
    value++;
    resolve(value);
  }, 3000);
});



foo1(1).then(foo1).then(foo1).then(foo1).then(foo1).then(foo1);