const fibonacci = function(num) {
  let vorige;
  let aktuelle;

  num = parseInt(num);

  if (num < 0) {
    aktuelle = 'OOPS';
  } else {
    
    for (let index = 0; index < num; index++) {
      if (index === 0) {
        vorige = 0;
        aktuelle = 1;
      } else {
        const tmp = aktuelle;
        aktuelle += vorige;
        vorige = tmp;
      }
    }
}

  return num === 0 ? 0 : aktuelle;
};

// Do not edit below this line
module.exports = fibonacci;
