
let r = 3;
console.log(`Area of a Circle with radius of ${r} : `);
console.log(Math.round(getAreaOfCircle(r) * 100 ) / 100);

r = 4;
console.log(`Circumference of a Circle with radius of ${r} : `);
console.log(Math.round(getCircumferenceOfCircle(r) * 100 ) / 100);

let s = 3;
console.log(`Area of a Square with side of ${s} : `);
console.log(Math.round(getAreaOfSquare(s) * 100 ) / 100);

let base = 3;
let height = 4;
console.log(`Area of a triangle with ${base} and ${height} : `);
console.log(Math.round(getAreaOfTriangle(base, height) * 100 ) / 100);


function getAreaOfCircle(radius) {
    return Math.PI * (radius ** 2);
}

function getCircumferenceOfCircle(radius) {
    return 2 * Math.PI * radius;
}

function getAreaOfSquare(side) {
    return (side ** 2);
}

function getAreaOfTriangle(base,height) {
    return 0.5 * base * height;
}
