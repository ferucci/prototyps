'use strict';

window.onload = function () {

  const div4ik = document.querySelector('.main__div4ik');
  const btn = document.querySelector('button');
  const body = document.querySelector('body')
  let newEll

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


  DomElement.prototype.createEl = function () {
    newEll = document.createElement('span')
    body.prepend(newEll)
    newEll.classList = this.selector.slice(1);
    newEll.style.cssText = `display: block; position: absolute; top: 10%;
                          height: ${this.height + 'px'};
                          width: ${this.width + 'px'};
                          background: ${this.bg};`
  }

  let el2 = new DomElement('.manage', '100', '100', "black");


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

  const elManagement = (e, key) => {
    console.log(key)

    let elem = document.querySelector('.manage');

    elem.tabIndex = 0;

    if (e.code != "ArrowRight" && e.code != "ArrowLeft" &&
      e.code != "ArrowUp" && e.code != "ArrowDown") return;

    let coordinates = elem.getBoundingClientRect();
    let x = coordinates.x + pageXOffset;
    let y = coordinates.y + pageYOffset;

    if (e.code == "ArrowRight") x += 10;
    if (e.code == "ArrowLeft") x -= 10;
    if (e.code == "ArrowUp") y -= 10;
    if (e.code == "ArrowDown") y += 10;

    elem.style.left = x + 'px';
    elem.style.top = y + 'px';


  }

  el2.createEl()
  document.addEventListener('keydown', elManagement)
  btn.addEventListener('click', gettingInputsValues);
}



