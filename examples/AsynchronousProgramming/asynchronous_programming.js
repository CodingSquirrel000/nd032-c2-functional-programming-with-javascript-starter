// Welcome to a basic asynchronous program!
// This is a quick peek ahead into some of the syntax we'll be going over in the next lesson


// Notice how the console log for "Hello" comes AFTER "World",  yet when the program runs, 
// the words appear in the correct order!
const printHelloWorld = () => {
    console.log("I'm ");//there will be no change if we move this line after the next line
    setTimeout(console.log, 2000, "async");
    
  setTimeout(print("...ronous!"), 4000, "...ronous!");
  
  
}
function printChar(string) {
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == '.') {
            setTimeout(console.log, 1000, string.charAt(i));
        } else {
            console.log(string.charAt(i));
        }
    }
}

printHelloWorld();

// CHALLENGE - Move the setTimeout after the console log, does that change the outcome? 

// CHALLENGE - Edit the time elapsed between "Hello" and "World" appearing on the screen

// CHALLENGE - Edit the message being sent to have three parts:
// Part 1: "I'm " - shows up immediately
// Part 2: "async" - shows up 2 seconds after "I'm"
// Part 3: "...ronous!" - shows up 4 seconds after "async"

// Extra Challenge - if you want to go even further with it, time each of the dots in the ellipses of part 3
// Write a function to make each dot appear one second after the other.