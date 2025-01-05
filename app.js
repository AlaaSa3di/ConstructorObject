//////Q1//////////////
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.carDetails = function () {
        return `Brand: ${this.brand} Model:${this.model}, Year: ${this.year}.`;
    }
}
let car1 = new Car("Toyota", "Corolla", 2020);
let car2 = new Car("Tesla", "Model 3", 2022);
let car3 = new Car("Ford", "Mustang", 2019);

console.log(car1.carDetails());
console.log(car2.carDetails());
console.log(car3.carDetails());



/// Q2 ///////
const persons = [
    { firstName: 'hohn', lastName: 'ahmed' },
    { firstName: 'Alex', lastName: 'ahmed' },
    { firstName: 'Alice', lastName: 'ahmed' },
    { firstName: 'Thor', lastName: 'ahmed' },
    { firstName: 'Soso', lastName: 'ahmed' }];

function firstName(arr) {
    let result1 = []
    for (let i = 0; i < arr.length; i++) {
        result1.push(arr[i].firstName)
    }
    return result1
}

console.log(firstName(persons))

///Q3///////
const person = {
    firstName: 'Moh',
    age: 24,
};

function objToArr(per) {
    const key = Object.keys(per);
    const value = Object.values(per);

    let result2 = [];
    for (let i = 0; i < key.length; i++) {
        result2.push(key[i], value[i]);
    }

    return result2;
};


const result = objToArr(person);
console.log(result); 







// Q 3



