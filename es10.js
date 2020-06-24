// ---------- ES10 (June 2019) ----------
// Flat
const myArray = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(myArray.flat(2));

// Flat map
const flatArray = [1, 2, 3, 4, 5];
console.log(flatArray.flatMap(value => [value, value * 2]));

// Trim implementations
const myWordWithSpaces = '      Hello world      ';
console.log(myWordWithSpaces.trimStart());
console.log(myWordWithSpaces.trimEnd());

// From entries
const entries = [['name', 'Gabriel Pinto'], ['age', 22]];
console.log(Object.fromEntries(entries));