const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {

    if (person.numFingers >= 6) {
        return "My father was slaughtered by a six-fingered man. He was a great swordmaker, my father. When the six-fingered man appeared and requested a special sword, my father took the job. He slaved a year before it was done."
    } else {  
    return 'Nice to meet you.';
    }
    }
    }
    inigo.greeting(westley)
    inigo.greeting(rugen)