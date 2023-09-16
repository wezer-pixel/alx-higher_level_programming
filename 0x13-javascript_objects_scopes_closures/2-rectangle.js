#!usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        return {}; // Return an empty object for invalid input
      }
      this.width = w;
      this.height = h;
    }
  }
  