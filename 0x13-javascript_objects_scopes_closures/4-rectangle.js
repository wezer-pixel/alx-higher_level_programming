#!usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0) {
        // Create an empty object if w or h is not a positive integer
        return {};
      }
  
      this.width = w;
      this.height = h;
    }
  
    print() {
      if (this.width === undefined || this.height === undefined) {
        console.log('Empty object');
        return;
      }
  
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    }
  
    rotate() {
      if (this.width === undefined || this.height === undefined) {
        console.log('Empty object');
        return;
      }
  
      // Exchange width and height
      const temp = this.width;
      this.width = this.height;
      this.height = temp;
    }
  
    double() {
      if (this.width === undefined || this.height === undefined) {
        console.log('Empty object');
        return;
      }
  
      // Double the width and height
      this.width *= 2;
      this.height *= 2;
    }
  }
  
  module.exports = Rectangle;
  
  