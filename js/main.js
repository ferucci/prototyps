'use strict';

const div4ik = document.querySelector('.main__div4ik');
const btn = document.querySelector('button');

let inputs = document.querySelectorAll('input');
let arr = [];

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createElement = function () {
  let newEl = document.createElement('div');
  let newEl2 = document.createElement('p');

  newEl.textContent = 'Привет, я новый div на стр.';
  newEl2.textContent = 'Привет, я новая пэшка на стр.';

  if (el1.selector[0] == '.') {
    div4ik.append(newEl);
    newEl.classList = this.selector.slice(1);
    newEl.style.cssText = `height: ${this.height + 'px'};
                           width: ${this.width + 'px'};
                           font-size: ${this.fontSize + 'px'};
                           background: ${this.bg};
                           `;

  } else if (el1.selector[0] == '#') {
    div4ik.append(newEl2);
    newEl2.id = this.selector.slice(1);
    newEl2.style.cssText = `height: ${this.height + 'px'};
                            width: ${this.width + 'px'};
                            background: ${this.bg};
                            font-size: ${this.fontSize + 'px'};`;
  }
};

let el1 = new DomElement();

const gettingInputsValues = () => {

  inputs = document.querySelectorAll('input');
  div4ik.innerHTML = '';

  inputs.forEach((item, index) => {

    arr.push({
      id: index,
      value: item.value
    });

  });

  el1 = new DomElement(arr[0].value, arr[1].value, arr[2].value, arr[3].value, arr[4].value);

  el1.createElement();

  inputs.forEach((item) => {
    item.value = '';
  });
  arr = [];
};


btn.addEventListener('click', gettingInputsValues);


