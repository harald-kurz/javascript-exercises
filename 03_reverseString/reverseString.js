const reverseString = function (text) {

  let arr = new Array();

  for (let i = 0; i < text.length; i++) {

    arr.unshift(text[i]);

  }

  return arr.join('');
};

// Do not edit below this line
module.exports = reverseString;
