let menu = document.querySelector('.menu'),
  menuItems = document.querySelectorAll('.menu-item'),
  fifthItem = document.createElement('li'),
  text = document.getElementById('title'),
  newText = document.createElement('span'),
  adv = document.querySelector('.adv'),
  placeForAnswer = document.getElementById('prompt');

fifthItem.innerHTML = 'Пятый пункт';
fifthItem.classList.add('menu-item');

menu.appendChild(fifthItem);
menu.insertBefore(menuItems[1], menuItems[3]);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';


text.textContent = 'Мы продаем только подлинную технику Apple'

adv.remove()

let answer = prompt('Какое у Вас отношение к технике Apple?', 'Apple - лучшая техника')

placeForAnswer.textContent = answer;