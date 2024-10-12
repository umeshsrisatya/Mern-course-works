const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num * num * num;
    },
    areaOfCircle(radius) {
        return this.PI * this.square(radius);
    },
    divide(x, y) {
        return x / y;
    },
}
