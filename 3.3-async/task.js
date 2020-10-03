//Task 1

'use strict';

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Невозможно идентифицировать будтльник. Параметр id не передан!');
        }
        if (this.alarmCollection.find(element => element.id == id)) {
            console.error('Будильник с таким id уже существует!');
            return;
        }
        this.alarmCollection.push({ time, callback, id })
    }

    removeClock(id) {
        const removeId = this.alarmCollection.filter(element => element.id == id);
        if (this.alarmCollection !== removeId) {
            this.alarmCollection.splice(removeId, 1);
            return true;
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() {
        const currentTime = new Date();
        return currentTime.getHours() + ":" + currentTime.getMinutes();
    }

    checkCLock(alarm) {
        if (alarm.time == this.getCurrentFormattedTime()) {
            return alarm.callback();
        }
    }

    start() {
        if (this.timerId == null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(element => this.checkCLock(element))
            }, 1000)
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(alarm => console.log(`Будильник №${alarm.id}, заведен на ${alarm.time}`))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

// testCase

const phoneAlarm = new AlarmClock();
phoneAlarm.addClock("18:45", () => console.log("Пора гулять с собакой!"), 1);

phoneAlarm.addClock("18:46", () => {
    console.log("Очень срочно гулять с собакой!!!");
    phoneAlarm.removeClock(2)
}, 2);
phoneAlarm.addClock("18:47", () => {
    console.log("Сам виноват!");
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
}, 3);

phoneAlarm.printAlarms();
phoneAlarm.start();