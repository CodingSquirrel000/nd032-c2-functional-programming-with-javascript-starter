// Use Object.keys with the map method to print "This character has a(n) [property-name]" for each property

const character = {
    id: '12mn18udcbv9823',
    name: 'Chewbacca',
    race: 'Wookie',
    planet: 'Kashyyyk',
    job: 'First Mate'
};
// const arr = Object.keys(character);

// const newArray = arr.map(a => 'This character has a(n) ' + a);
// newArray.forEach(function (a) {
//     console.log(a  + '.\n');
// });
// console.log(newArray);

//Teacher's solution ???
const keys = Object.keys(character);
keys.map(key => {
    console.log(`This character has a(n) ${key}.`)
    return `This character has a(n) ${key}`
})



// Expected Output: 
// This character has a(n) id.
// This character has a(n) name.
// This character has a(n) race.
// This character has a(n) planet.
// This character has a(n) job.
// [ 'This character has a(n) id',  'This character has a(n) name',  'This character has a(n) race', 'This character has a(n) planet', 'This character has a(n) job' ]