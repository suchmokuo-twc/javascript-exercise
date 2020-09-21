function chooseMultiplesOfThree(collection) {
  return collection.filter(n => n % 3 === 0);
}

function isRepeated(collection, n) {
  let count = 0;

  collection.forEach(item => {
    if (item === n) {
      count += 1;
    }
  });

  return count > 1;
}

function chooseNoRepeatNumber(collection) {
  return collection.filter(n => !isRepeated(collection, n));
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
