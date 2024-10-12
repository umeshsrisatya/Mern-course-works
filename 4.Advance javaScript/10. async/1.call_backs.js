var multiply = (x, y) => x * y;
var square = (x) => multiply(x, x);
var isRightTriangle = (x, y, z) => square(x) + square(y) === square(z);
