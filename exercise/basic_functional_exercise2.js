function countDown(num) {
    let countDownArray = [];
    for (let i = num; i >= 0; i--) {
        countDownArray.push(i);
    }
    return countDownArray;
}

console.log(countDown(5));