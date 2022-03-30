function sayHello() {
    const hour = new Date().getHours();

    if (hour > 13) {
        return "good afternoon";
    } else {
        return "good morning";
    }
}
console.log(sayHello());