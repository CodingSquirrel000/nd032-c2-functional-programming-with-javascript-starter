// function runTimer (startingTime) {
//   let time = parseInt(startingTime);
//   while (time < 100) {
//     console.log("testing", time);
//     time++;
//   }
// };

// runTimer(0)
// console.log("timer complete");

let recentAccountBalances = [];

const appendBalance = () => {
  recentAccountBalances.push(Math.random() * (200 - 100) + 100)
  console.log(recentAccountBalances)
}

const pollAccount = () => {
  setInterval(appendBalance, 4000)
}

console.log("test")

pollAccount()