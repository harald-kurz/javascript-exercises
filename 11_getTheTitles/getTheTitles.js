const getTheTitles = function(arr) {
  let result = new Array();
  
  for (const element of arr) {
    result.push(element.title);
  }

  return result;
};

// Do not edit below this line
module.exports = getTheTitles;
