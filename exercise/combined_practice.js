const characters = [
  {
    name: 'Marvin the Paranoid Android',
    role: 'First Mate',
    universe: 'Hitchhikers Guide to the Galaxy',
    weapon: 'severe depression',
    power_level: 1000
  },
  {
    name: 'Jabba the Hut',
    role: 'villain',
    universe: 'Star Wars',
    weapon: 'henchmen',
    power_level: 200
  },
  {
    name: 'Zoë Alleyne Washburne',
    role: 'First Mate',
    universe: 'Firefly',
    weapon: 'Winchester Model 1892 rifle',
    power_level: 160
  },
  {
    name: 'Peter Venkman',
    role: 'Ghostbuster',
    universe: 'Ghostbusters',
    weapon: 'proton pack',
    power_level: 120
  },
  {
    name: 'Kathryn Janeway',
    role: 'Captain',
    universe: 'Star Trek',
    weapon: 'Wit',
    power_level: 140
  },
  {
    name: 'Dr. Daniel Jackson',
    role: 'Archeologist',
    universe: 'Stargate',
    weapon: 'Zat gun',
    power_level: 120
  },
  {
    name: 'Q',
    role: 'God/Eternal',
    universe: 'Star Trek',
    weapon: 'Whatever he wants',
    power_level: 1000
  },
  {
    name: 'Boba Fett',
    role: 'Bounty Hunter',
    universe: 'Star Wars',
    weapon: 'EE-3 carbine rifle',
    power_level: 400
  },
  {
    name: 'Yoda',
    role: 'Jedi Master',
    universe: 'Star Wars',
    weapon: 'The Force',
    power_level: 900
  },
  {
    name: 'Mal Reynolds',
    role: 'Captain',
    universe: 'Firefly',
    weapon: 'pistol',
    power_level: 160
  },
  {
    name: 'Spock',
    role: 'First Mate',
    universe: 'Star Trek',
    weapon: 'Logic',
    power_level: 170
  },
  {
    name: 'R2-D2',
    role: 'Ship`s Robot',
    universe: 'Star Wars',
    weapon: 'Data Probe',
    power_level: 250
  },
  {
    name: 'Lore',
    role: 'Villain',
    universe: 'Star Trek',
    weapon: 'Intellect',
    power_level: 800
  },
]

// ----------------------------------------------------------

// COMBINED PRACTICE 1

// ----------------------------------------------------------

// Create an array containing only the names of Captains from all universes.

// Your Code here
// const captains = characters.filter(p => p.role === 'Captain');
// const names = captains.map(p => p.name);
// console.log(names);
// Teacher's solution
// const captainNames = characters.filter(c => c.role == 'Captain').map(c => c.name);
// console.log(captainNames);
// expected output: ['Mal Reynolds', 'Kathryn Janeway']

// ----------------------------------------------------------

// COMBINED PRACTICE 2

// ----------------------------------------------------------

// Group all characters by universe in a multidimensional array

// Your Code here
// Teacher's solution
/**
 * acc: new array for each universe
 * curr: current object
 * i: the index of acc
 * arr: the original array
 */
// const groupedCharacters = characters
//     .reduce((acc, curr, i, arr) => {
//         //if the universe of the current object doesn't exist, initialize a new array to store the 
//         // current object; or else, keep it in the already existing array

//         //acc[curr.universe] is adding a property to acc with the name of the property is curr.universe
//         acc[curr.universe] = acc[curr.universe] === undefined ? [] : acc[curr.universe]
//         //push means adding a new item the an array
//         acc[curr.universe].push(curr)

//         //if iterate to the end of the original array, then return the values of the new array
//         if (i + 1 == arr.length) {
//             return Object.values(acc) //Object.values() return an array of a given object's own enumerable property values 
//         }

//         return acc
//     }, {})
 
// console.log(groupedCharacters);

// expected output:

// [ 
//  [ 
//    { name: 'Marvin the Paranoid Android',
//       role: 'First Mate',
//       universe: 'Hitchhikers Guide to the Galaxy',
//       weapon: 'severe depression',
//       power_level: 1000 
//     } 
//   ],
//   [ { name: 'Jabba the Hut',
//       role: 'villain',
//       universe: 'Star Wars',
//       weapon: 'henchmen',
//       power_level: 200 },
//     { name: 'Boba Fett',
//       role: 'Bounty Hunter',
//       universe: 'Star Wars',
//       weapon: 'EE-3 carbine rifle',
//       power_level: 400 },
//     { name: 'Yoda',
//       role: 'Jedi Master',
//       universe: 'Star Wars',
//       weapon: 'The Force',
//       power_level: 900 },
//     { name: 'R2-D2',
//       role: 'Ship`s Robot',
//       universe: 'Star Wars',
//       weapon: 'Data Probe',
//       power_level: 250 } ],
//   [ { name: 'Zoë Alleyne Washburne',
//       role: 'First Mate',
//       universe: 'Firefly',
//       weapon: 'Winchester Model 1892 rifle',
//       power_level: 160 },
//     { name: 'Mal Reynolds',
//       role: 'Captain',
//       universe: 'Firefly',
//       weapon: 'pistol',
//       power_level: 160 } ],
//   [ { name: 'Peter Venkman',
//       role: 'Ghostbuster',
//       universe: 'Ghostbusters',
//       weapon: 'proton pack',
//       power_level: 120 } ],
//   [ { name: 'Kathryn Janeway',
//       role: 'Captain',
//       universe: 'Star Trek',
//       weapon: 'Wit',
//       power_level: 140 },
//     { name: 'Q',
//       role: 'God/Eternal',
//       universe: 'Star Trek',
//       weapon: 'Whatever he wants',
//       power_level: 1000 },
//     { name: 'Spock',
//       role: 'First Mate',
//       universe: 'Star Trek',
//       weapon: 'Logic',
//       power_level: 170 },
//     { name: 'Lore',
//       role: 'Villain',
//       universe: 'Star Trek',
//       weapon: 'Intellect',
//       power_level: 800 } ],
//   [ { name: 'Dr. Daniel Jackson',
//       role: 'Archeologist',
//       universe: 'Stargate',
//       weapon: 'Zat gun',
//       power_level: 120 } ] ]

// ----------------------------------------------------------

// COMBINED PRACTICE 3

// ----------------------------------------------------------

// Create an array containing characters' names who are the only character listed in their universe.

// Your Code here
// const groupedCharacters = characters
//     .reduce((acc, curr, i, arr) => {
//         //if the universe of the current object doesn't exist, initialize a new array to store the 
//         // current object; or else, keep it in the already existing array

//         // //acc[curr.universe] is adding a property to acc with the name of the property is curr.universe
//         acc[curr.universe] = acc[curr.universe] === undefined ? [] : acc[curr.universe]
        
//         //push means adding a new item the an array
//         acc[curr.universe].push(curr)

//         //if iterate to the end of the original array, then return the values of the new array
//         if (i + 1 == arr.length) {
//             return Object.values(acc) //Object.values() return an array of a given object's own enumerable property values 
//         }

//         return acc
//     }, {})
 
// // console.log(groupedCharacters);
// console.log(groupedCharacters.filter(item => item.length == 1).map(p => p[0].name));

// expected output: [ Marvin the Paranoid Android, Peter Venkman, Dr. Daniel Jackson ]

// ----------------------------------------------------------

// COMBINED PRACTICE 4

// ----------------------------------------------------------

// What is the average power level across all characters?

// Your code here
var initialValue = 0;
const average = characters.map(obj => obj.power_level).reduce(
    (prev, curr, i) => (prev += curr) / i,
);

console.log(average)

// expected output: 68.71319452795147