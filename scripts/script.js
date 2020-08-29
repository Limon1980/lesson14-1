'use strict';

const myLesson = [
  { lesson: 1, type: 'basic', points: 2 },
  { lesson: 2, type: 'additional', points: 4 },
  { lesson: 3, type: 'basic', points: 6 },
  { lesson: 4, type: 'additional', points: 3 },
  { lesson: 5, type: 'basic', points: 4 },
  { lesson: 6, type: 'basic', points: 2 },
  { lesson: 7, type: 'additional', points: 2 },
  { lesson: 8, type: 'basic', points: 6 },
  { lesson: 9, type: 'basic', points: 4 },
  { lesson: 10, type: 'basic', points: 6 },
  { lesson: 11, type: 'additional', points: 5 },
  { lesson: 12, type: 'basic', points: 2 },
  { lesson: 13, type: 'additional', points: 2 },
  { lesson: 14, type: 'basic', points: 4 },
  { lesson: 15, type: 'additional', points: 1 },
  { lesson: 16, type: 'additional', points: 7 },
];

// console.log(myLesson);

const foo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let { type, points } = arr[i];

    if (type === 'additional') {
      myLesson.splice(i, 1); // почему не удаляет последний элемент
      i--;
    } else {
      const obj = { points: points / 2 };
      Object.assign(arr[i], obj);
    }
  }
  return arr;
};

console.log(foo(myLesson));
