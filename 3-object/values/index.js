export default function countTypesNumber(source) {
  return Object.values(source)
    .map(Number)
    .reduce((total, n) => total + n, 0);
}
