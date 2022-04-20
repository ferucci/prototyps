'use strict';

let inputs = document.querySelectorAll('input');

let inputText = document.getElementById('inputText');
let inputHeight = document.getElementById('inputHeight');
let inputWidth = document.getElementById('inputWidth');
let inputBg = document.getElementById('inputBg');
let inputFont = document.getElementById('inputFont');

const btn = document.querySelector('button');
let arr = [];

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.creatElOnthePage = function () {
  let newEl = document.createElement('div');
  let newEl2 = document.createElement('p');
  newEl.textContent = 'Привет, я новый div на стр.';
  newEl2.textContent = 'Привет, я новая пэшка на стр.';
  if (el1.selector[0] == '.') {
    document.body.append(newEl);
    newEl.classList = this.selector.slice(1);
    newEl.style.height = this.height;
    newEl.style.width = this.width;
    newEl.style.background = this.bg;
    newEl.style.fontSize = this.fontSize;
  } else if (el1.selector[0] == '#') {
    document.body.append(newEl2);
    newEl2.id = this.selector.slice(1);
    newEl2.style.height = this.height;
    newEl2.style.width = this.width;
    newEl2.style.background = this.bg;
    newEl2.style.fontSize = this.fontSize;

  }
};

let el1 = new DomElement(inputText.value, inputHeight.value, inputWidth.value, inputBg.value, inputFont.value);

const myFunc = () => {

  inputs = document.querySelectorAll('input');

  inputs.forEach((item, index) => {
    arr.push({
      id: index,
      value: item.value
    });

  });
  el1 = new DomElement(inputText.value, inputHeight.value, inputWidth.value, inputBg.value, inputFont.value);
  el1.creatElOnthePage();
};


btn.addEventListener('click', myFunc);

// el1.creatElOnthePage();
