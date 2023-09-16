#!usr/bin/node

exports.esrever = function(list) {
    const length = list.length;
    const lastIndex = length - 1;
    
    for (let i = 0; i < length / 2; i++) {
      // Swap elements
      const temp = list[i];
      list[i] = list[lastIndex - i];
      list[lastIndex - i] = temp;
    }
  
    return list;
  };
  