const sumAll = function(num1, num2) {

  if ( (Number.isInteger(num1) && Number.isInteger(num2)) && num1 >= 0 && num2 >= 0 )
  {
    if (num1 > num2){
      const placeholder = num2;
      num2 = num1;
      num1 = placeholder;
    }

    let result = 0;

    for (let index = num1; index <= num2; index++) {
      result += index;
    }

    return result;
  }
  else{
  return 'ERROR';
  }
};

// Do not edit below this line
module.exports = sumAll;
