'use strict';

//Task 1

function parseCount(value) {
    const parsed = Number.parseInt(value);
    if (isNaN(parsed)) {
        throw new Error('Невалидное значение');
    }
    return parsed;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (e) {
        return e;
    }
}

//Task 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((a + c) < b) || ((b + c < a))) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() * 0.5;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        const triangle = new Triangle(a, b, c);
        return triangle;
    }
    catch (e) {
        const wrongTriangle = {
            getPerimeter: () => { return 'Ошибка! Треугольник не существует'; },
            getArea: () => { return 'Ошибка! Треугольник не существует'; }
        }
        return wrongTriangle;
    }

}
