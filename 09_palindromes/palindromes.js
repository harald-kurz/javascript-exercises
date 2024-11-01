const palindromes = function (text) {
  let textWithoutWhitespace = text.replace(/\s/g, '');
  
  var punctuation = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
  var textWithoutPunctiation = textWithoutWhitespace.replace(punctuation, '');

  let compareArr = new Array();

  for (let index = 0; index < textWithoutPunctiation.length; index++) {
    compareArr.unshift(textWithoutPunctiation[index]);
  }

  const compareText = compareArr.join('');

  return textWithoutPunctiation.toLowerCase() === compareText.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
