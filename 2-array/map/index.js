// const characters = ' abcdefghijklmnopqrstuvwxyz';

// function numberToCharacter(num) {
//   return characters[num];
// }

function numberToCharacter(num) {
  // char code of 'a' is 97.
  return String.fromCharCode(96 + num);
}

export default function numberMapToWord(collection) {
  return collection.map(numberToCharacter);
}
