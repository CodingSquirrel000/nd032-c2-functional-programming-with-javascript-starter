let fullName = 'Captain Kitty'
let hour = new Date().getHours()

let greeting = ''

if (hour <= 6) {
    greeting = 'Good Morning, '
} else if (hour >= 17) {
    greeting = 'Good Evening, '
} else {
    greeting = 'Hello, '
}

greeting += fullName + '.' //variables keep updating

console.log(greeting)  