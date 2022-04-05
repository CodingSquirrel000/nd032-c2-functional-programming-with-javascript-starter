var nearEarthObjects = require('./nasa_near_earth_object_API.json');
// console.log(nearEarthObjects);

// The object in the nasa_near_earth_object_API.json is a copy of real API response from the NASA Near-Earth Object API. 
// Find the following from the API:

// Total Count ---------------------------------------------
// 1. How many near-earth objects did NASA register for the date of the search? Return the asteroid count.
const count = nearEarthObjects.element_count;
// console.log(`The total count is: ${count}.`);

// Averages ------------------------------------------------
// 2. What was the average absolute magnitude of all the near earth objects in this data set? Return the average absolute_magnitude_h.
const asteroids = Object.values(nearEarthObjects.near_earth_objects).flat();
const ave = asteroids.reduce((acc, curr, i, arr) => {
    if (i + 1 == arr.length) {
        // console.log(`The array length is: ${arr.length}`);
        return acc / arr.length;
    }
    return acc += curr['absolute_magnitude_h'];
}, 0);
// console.log(`The average absolute magnitude is: ${ave}.`)
// Hint - you can achieve this multiple ways, but the reduce method can be a little-known but cool way to find averages. To do it though, you'll need to use the initial_value argument
// For some extra challenge try using reduce with the initial setting argument. To learn more about it, take a look at this page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


// Hazardous -----------------------------------------------
// 3. A list of all objects (their id, name, max size in miles, and closest approach in miles) that are labeled potentially hazardous
// const hazardousObj = Object.values(nearEarthObjects.near_earth_objects).flat()
//     .filter(o => o['is_potentially_hazardous_asteroid'] === true);
// console.log(`Hazardous objects are: ${hazardousObj}`);
// const list = hazardousObj.map(o => {
//     return {
//         id: o['id'],
//         name: o.name,
//         maxSize: o.estimated_diameter.miles.estimated_diameter_max,
//         closetApproach: o.close_approach_data[0].miss_distance.miles
//     }
// });
// console.log(`The list of all hazardous objects is: ${list}`);

const hazardous = Object.values(nearEarthObjects['near_earth_objects']).flat().filter(asteroid => asteroid['is_potentially_hazardous_asteroid'] === true)
// console.log(`Hazardous objects are: ${hazardous}`)
const hazardousFmt = hazardous.map(asteroid => {
 const closeApproach = asteroid['close_approach_data']
 return {
    id: asteroid['id'],
    name: asteroid['name'],
    maxSize: asteroid['estimated_diameter']['miles']['estimated_diameter_max'],
    closestApproach: closeApproach[0]['miss_distance']['miles']
 }
})

// console.log(hazardousFmt)
// Too Close for Comfort -----------------------------------
// 4. A list of all objects (their id, name, max size in miles, and closest approach in miles) that have a miss_distance of less than 900,000 miles
// const allObjs = Object.values(nearEarthObjects['near_earth_objects']).flat();
// console.log(`All objects are: ${allObjs}`);

// const unComfortObjs = allObjs.filter(asteroid => asteroid => {
//  const closeApproach = asteroid['close_approach_data']
//  return closeApproach[0].miss_distance.miles < 900000
// })
// const tooCloseResults = unComfortObjs.map(asteroid => {
//  const closeApproach = asteroid['close_approach_data']
// return {
//     id: asteroid['id'],
//     name: asteroid['name'],
//     maxSize: asteroid['estimated_diameter']['miles']['estimated_diameter_max'],
//     closestApproach: closeApproach[0]['miss_distance']['miles']
//  }
// })

const unComfortObjs = Object.values(nearEarthObjects.near_earth_objects).flat().filter(asteroid => {
    return asteroid.close_approach_data[0].miss_distance.miles < 900000;
})

const tooCloseList = unComfortObjs.map(asteroid => {
    return {
        id: asteroid.id,
        name: asteroid.name,
        maxSize: asteroid.estimated_diameter.miles.estimated_diameter_max,
        closestApproach: asteroid.close_approach_data[0].miss_distance.miles
    }
})

// console.log(tooCloseList);
// Alert ---------------------------------------------------
// 5. Of all the near-earth objects for this date, find the time that the asteroid with the nearest miss will be closest to earth. 
const closest = nearEarthObjects.near_earth_objects['2019-12-02'].reduce((closest, curr) => {
    const closestDist = parseFloat(closest.close_approach_data[0].miss_distance.miles);
    const currDist = parseFloat(curr.close_approach_data[0].miss_distance.miles);

    if (closestDist < currDist) {
        return closest;
    } else {
        return curr;
    }
})

console.log(closest.close_approach_data[0].miss_distance.miles);