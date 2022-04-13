// const logB = () => {
//     console.log("B");
// }



// const logC = () => {
//     console.log("C");
//     console.log("D");
// }

// console.log("A");
// setTimeout(logB, 2000);
// setTimeout(logC, 3000);


//challenge2
const quote = "The art of programming is the skill of controlling complexity.";
const reference = "-- Marijn Haverbeke, Eloquent JavaScript";

const print = () => {
    let index = 0;
    
    return (quote) => {
        console.log(quote[index]);
        if (index == quote.length - 1) {
            clearInterval(quoteInterval);
            console.log(reference);
        }
        index++;
    }
}

const quoteInterval = setInterval(print(), 1000, quote.split(' '));