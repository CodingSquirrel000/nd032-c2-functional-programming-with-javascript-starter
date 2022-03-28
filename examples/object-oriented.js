class Person {
    constructor(name, title){
        this.name = name;
        this.title = title
    }

    determineSalutation(date){
        const hour = (date && date.getHours()) || new Date().getHours()

        if (hour <= 6) {
            return "Good Morning"
        } else if (hour >= 17) {
            return "Good Evening"
        } else {
            return "Hello"
        }
    }

    greet() {
        return `${this.determineSalutation()},\u00A0${this.title}\u00A0${this.name}`
        // using JavaScript template literal: `${}`
        // \u00A0 is a symbol to add a space in the template literal
    }
}

const kirk = new Person("Kirk", "Captain")
console.log(kirk.greet())