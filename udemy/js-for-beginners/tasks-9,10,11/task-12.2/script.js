'use strict';

class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  createDiv() {
    let newDiv = document.createElement('div');
    let newSomeText = document.createTextNode('Hello, world! this some text=)');
    newDiv.appendChild(newSomeText);
    document.body.appendChild(newDiv);
    let styleDiv = `
    height: ${this.height}px; 
    width: ${this.width}px; 
    background-color: ${this.bg}; 
    font-size: ${this.fontSize}px; 
    text-align: ${this.textAlign}`;
    newDiv.style.cssText = styleDiv;
  }
}

const someNewDiv = new Options(700, 550, 'plum', 14, 'center');

someNewDiv.createDiv();
