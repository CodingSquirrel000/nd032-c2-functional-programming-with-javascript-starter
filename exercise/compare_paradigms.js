// compare_paradigms.js

// Directions: Rewrite the imperative code below as Object-Oriented 

// let engineStatus = 'active'
// let warp = 2
// let type = 'Dilithium Crystal'
// let status_report = 'Captain, '

// if(engineStatus === 'active' && warp <= 4) {
//     status_report += 'the engines are active and we could be going faster.'
// } else if (engineStatus === 'active' && warp > 4) {
//     status_report += 'the engines are active and we are going ' + warp + '.'
// } else if (engineStatus === 'down') {
//     status_report += 'the engines are down.'
// } else {
//     status_report += 'the comms are down and we can`t reach engineering.'
// }

// console.log(status_report)

class Status {
    constructor(engineStatus, warp, type, status_report) {
        this.engineStatus = engineStatus;
        this.warp = warp;
        this.type = type;
        this.status_report = status_report;
    }

    getReport() {

        if(this.engineStatus === 'active' && this.warp <= 4) {
            this.status_report += 'the engines are active and we could be going faster.'
        } else if (this.engineStatus === 'active' && this.warp > 4) {
            this.status_report += 'the engines are active and we are going ' + this.warp + '.'
        } else if (this.engineStatus === 'down') {
            this.status_report += 'the engines are down.'
        } else {
            this.status_report += 'the comms are down and we can`t reach engineering.'
        }

        console.log(this.status_report);
    }
}

const statusObj = new Status('down', 2, 'Dilithium Crystal', 'Captain, ');
statusObj.getReport();