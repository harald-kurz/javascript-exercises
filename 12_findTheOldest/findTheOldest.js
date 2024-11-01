const findTheOldest = function(arr) {
  let oldestPerson;
  let oldestAge = 0;

  for (const element of arr) {
    let age = ((element.yearOfDeath === undefined ? new Date().getFullYear() : element.yearOfDeath) - element.yearOfBirth);

    if (age > oldestAge) {
      oldestPerson = element;
      oldestAge = age;
    }
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
