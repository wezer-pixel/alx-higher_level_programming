#!usr/bin/node

exports.converter = function(base) {
    return function convert(number) {
      return number === 0 ? '' : convert(Math.floor(number / base)) + (number % base < 10 ? number % base : String.fromCharCode((number % base) + 87));
    };
  };
  