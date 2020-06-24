// --------- ES9 (June 2018) ---------
// Rest operator
const myObject = { name: 'Gabriel', age: 22, country: 'Colombia', };
const { name, ...rest } = myObject;
console.log(rest);

// Promise finally
const simplePromise = () => new Promise((resolve, reject) => setTimeout(() => { resolve('Hello world'); }, 300));
simplePromise().then(data => console.log(data)).catch(err => console.log(err)).finally(() => console.log('Promise is over'));

// Regex improvements
const regexDate = /([0-9]{2})-([0-9]{2})-([0-9]{4})/;
const match = regexDate.exec('15-10-1997');
const day = match[1];
const month = match[2];
const year = match[3];
console.log(day, month, year);