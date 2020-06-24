// -------- ES8 (June 2017) --------
// Trailing comma
const myObject = { name: 'Gabriel', age: 22, country: 'Colombia', };

// Object entries
const entries = Object.entries(myObject);
console.log(entries);

// Object values
const values = Object.values(myObject);
console.log(values);

// Padding
const myString = 'hello';
console.log(myString.padStart(7, 'hi '));
console.log(myString.padEnd(8, ' bye'));

// Async - Await
const simplePromise = () => new Promise((resolve, reject) => setTimeout(() => { resolve('Hello world'); }, 300));
const myFunction = async () => {
    try {
        const hello = await simplePromise();
        console.log(hello);
    } catch (error) {
        throw new Error(error);
    }
};
myFunction();