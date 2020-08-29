'use strict';

const country = document.querySelector('#country');
const city = document.querySelector('#city');
const result = document.querySelector('.result');

console.log(country);

city.style.display = 'none';

const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
};

country.addEventListener('change', () => {

  let arr = cityArr[country.value];
  city.innerHTML = '';
  arr.forEach((element) => {
    city.insertAdjacentHTML('afterbegin', `<option value="${element}">${element}</option>`);
  });
  city.style.display = 'inline-block';

});

city.addEventListener('change', () => {
  result.textContent = country.options[country.options.selectedIndex].text + ' ' + city.value;
});