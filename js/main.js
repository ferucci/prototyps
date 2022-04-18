'use strict';

const inputs = document.querySelectorAll('input');

let inputText = document.getElementById('inputText');
let inputHeight = document.getElementById('inputHeight');
let inputWidth = document.getElementById('inputWidth');
let inputBg = document.getElementById('inputBg');
let inputFont = document.getElementById('inputFont');



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

const el1 = new DomElement('.block', '250px', '250px', '#eee', '24px');
// const el1 = new DomElement(inputText, 'inputHeight', 'inputWidth', 'inputBg', 'inputFont');

// let obj = [];

// inputs.forEach((item, index) => {
//   item.addEventListener('blur', (e) => {
//     const log = e.target.value;
//     obj.push({
//       id: index,
//       name: log
//     });
//     inputText = obj[0];
//     inputHeight = obj[1];
//     inputWidth = obj[2];
//     inputBg = obj[3];
//     inputFont = obj[4];
//     console.log(obj);
//     console.log(inputText);
//     console.log(inputText.name);
//   });
//   return

// });


el1.creatElOnthePage();
