// ------ ES6 (June 2015) ------
// Arrow functions
// Default parameters can be passed to functions
const newFunction = (currentName = 'Gabriel Pinto') => console.log('My name is', currentName);
newFunction();
newFunction('Gabo');

// Template strings and multiline
const firstName = 'Gabriel';
const lastName = 'Pinto';
console.log(`My name is ${firstName} ${lastName}.
I love JS.`);

// Improved object creation
const newPerson = { firstName, lastName };

// Object destructuring
const person = { name: 'Gabriel', age: 22, country: 'Colombia' };
const { name, age, country } = person;

// Spread operator
const oldMilan = ['Maldini', 'Nesta', 'Gattuso', 'Pirlo'];
const newMilan = ['Rebic', 'Romagnoli', 'Donnarumma', 'Bennacer'];
const milanStars = ['Zlatan', ...oldMilan, ...newMilan];

// Promises
const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = Math.random();
            if (result <= 0.7) {
                reject('Is not a valid grade');
            } else {
                resolve('Is a valid grade');
            }
        }, 200);
    });
};

myPromise().then(data => { console.log(data); }).catch(err => { console.log('Error:', err) });

// Classes
class calculator {
    constructor() {
        this.firstValue = 0;
        this.secondValue = 0;
    }
    sum(first, second) {
        this.firstValue = first;
        this.secondValue = second;
        return this.firstValue + this.secondValue;
    }
}