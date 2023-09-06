let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

const moreSports = [...teamSports];

moreSports.push('Football', 'Baseball')
moreSports.unshift('Rugby')

dog2 = dog1;
cat2 = {...cat1};

dog2 = ('Jake');

cat2.name = "Jared";

console.log(teamSports, dog1, cat1);

console.log(moreSports, dog2, cat2);