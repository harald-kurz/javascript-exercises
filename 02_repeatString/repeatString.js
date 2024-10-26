const repeatString = function (text, num) {
  if (num >= 0) {
    let response = new Array();

    for (let i = 0; i < num; i++) {
      response.push(text);
    }

    return response.join('');
  }
  else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = repeatString;
