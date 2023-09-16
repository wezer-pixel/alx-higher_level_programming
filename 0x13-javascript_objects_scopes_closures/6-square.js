#!usr/bin/node

const SquareBase = require('./5-square');

class Square extends SquareBase {
  constructor(size) {
    // Call the parent class constructor (SquareBase)
    super(size);
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X';
    }

    if (this.width !== undefined && this.height !== undefined) {
      for (let i = 0; i < this.height; i++) {
        console.log(c.repeat(this.width));
      }
    }
  }
}

module.exports = Square;
