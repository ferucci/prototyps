'use strict';

const inputs = document.querySelectorAll('input');

let inputText = document.getElementById('inputText');
let inputHeight = document.getElementById('inputHeight');
let inputWidth = document.getElementById('inputWidth');
let inputBg = document.getElementById('inputBg');
let inputFont = document.getElementById('inputFont');

const btn = document.querySelector('button');



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

// let el1 = new DomElement('.block', '250px', '250px', '#eee', '24px');
const el1 = new DomElement(inputText, inputHeight, inputWidth, inputBg, inputFont);

let arr = [];

for (let input of inputs) {
  arr.push(input);
}

const myFunc = (e) => {
  inputText = document.getElementById('inputText').value;
  inputHeight = document.getElementById('inputHeight').value;
  inputWidth = document.getElementById('inputWidth').value;
  inputBg = document.getElementById('inputBg').value;
  inputFont = document.getElementById('inputFont').value;

  el1[inputText.value] = arr[0].value;
  el1[inputHeight.value] = arr[1].value;
  el1[inputWidth.value] = arr[2].value;
  el1[inputBg.value] = arr[3].value;
  el1[inputFont.value] = arr[4].value;
  console.log(el1);
}
// const [inputText, inputHeight, inputWidth, inputBg, inputFont] = arr;


btn.addEventListener('click', myFunc);





el1.creatElOnthePage();
