function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = () => this.age > 17;
    }

let firstPerson = new Person('Jesper', 28);
let secondPerson = new Person('Jared', 89);
let thirdPerson = new Person('Johnny', 15);

console.log(firstPerson, secondPerson, thirdPerson); // Not sure if you wanted us to display just the properties here?

/* If so: 

for (let key in firstPerson) {
    console.log(key);
}

for (let key in secondPerson) {
    console.log(key);
}

for (let key in thirdPerson) {
    console.log(key);
}

*/

console.log(firstPerson.canDrive());
console.log(secondPerson.canDrive());
console.log(thirdPerson.canDrive());

