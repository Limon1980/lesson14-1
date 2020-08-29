'use strict';

const a = document.querySelector('#a');
const b = document.querySelector('#b');
const sum = document.querySelector('#sum');
const mult = document.querySelector('#mult');
const res = document.querySelector('#res');

const calculator = {
  sum: function () {
    this.show(+a.value + +b.value);
  },
  mult: function () {
    this.show(+a.value * +b.value);
  },
  show: function (result) {
    res.value = result;
  },
};

sum.addEventListener('click', calculator.sum.bind(calculator));
mult.addEventListener('click', calculator.mult.bind(calculator));
