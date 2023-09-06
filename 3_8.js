const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }

const wellington = {
    name: 'Wellington',
    population: 300_000,
    state: 'North Island',
    founded: '13 March 1830',
    timezone: 'NZT'
}

function objectChecker (obj) {

    for (let key in obj) {
        console.log('key: ' + key);
        console.log('value: ' + obj[key]);
    }

}

objectChecker(sydney);

objectChecker(wellington);

