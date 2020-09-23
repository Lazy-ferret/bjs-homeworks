'use strict';

//Задание №1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        if (newState <= 0) {
            this._state = 0;
        } else if (newState >= 100) {
            this._state = 100;
        } else
            this._state = newState;
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(...rest) {
        super(...rest);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, ...rest) {
        super(...rest);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(...rest) {
        super(...rest);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(...rest) {
        super(...rest);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(...rest) {
        super(...rest);
        this.type = "detective";
    }
}


//Задание №2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        } else
            return null;
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] == value) {
                return book;
            } 
        } return null;
    }

    giveBookByName(bookName) {
        for (let book of this.books) {
            if (book.name == bookName) {
                return this.books.splice(this.books.indexOf(book), 1)[0];
            }
        } return null;
    }
}


//Задание №3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = {};
    }
    getName() {
        return this.name;
    }


    addGrade(grade, subject) {
        if (this.grades[subject] == undefined) {
            this.grades[subject] = [];
            this.grades[subject].push(grade);
        } else
            if (grade >= 1 && grade <= 5) {
                this.grades[subject].push(grade);
            } else
                console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
        return this.grades[subject].length;
    }

    getAverageBySubject(subject) {
        let subjectGrades = this.grades[subject];
        if (subjectGrades.length === 0) {
            return 0;
        } else {
            let sum = 0;
            for (let i = 0; i < subjectGrades.length; i++) {
                sum += subjectGrades[i];
            }
            return sum / subjectGrades.length;
        }
    }
    getTotalAverage() {
        let sum = 0;
        for (let subject in this.grades) {
            sum += this.getAverageBySubject(subject);
        }
        return sum / Object.values(this.grades).length;
    }
}

