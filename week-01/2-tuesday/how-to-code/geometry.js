// Javascript Geometry library
// Useful functions for calculating Area, Perimeter of 2D shapes
// and Volume, Surface area of 3D shapes.

// 2-dimensional shapes - Area and Perimeter
//--------------------------------------------------------
function areaSquare(side) {
// Returns the 2D Area of a Square
    return side ** 2;
}   

function perimSquare(side) {
// Returns the perimiter of a Square
    return 4 * side;
}

function areaRect(length, height) {
// Returns the 2D Area of a Rectangle
    return length * height;
}

function perimRect(length, height) {
// Returns the perimiter of a Parallelogram
    return 2 * length + 2 * height;
}

function areaParallelogram(length, height) {
// Returns the 2D Area of a Parallelogram
    return length * height;
}

function perimParallelogram(length, height) {
// Returns the perimiter of a Parallelogram
return 2 * length + 2 * height;
}

function areaTrapezoid(height, b1, b2) {
// Returns the 2D Area of a Trapezoid
// b1 and b2 are the lengths of the parallel lines
return  height * (b1 + b2) / 2;
}

function perimTrapezoid(s1, s2, b1, b2) {
// Returns the perimiter of a Trapezoid
// s1 and s2 are the lengths of the sides (non-parallel lines)
// b1 and b2 are the lengths of the parallel lines
    return s1 + s2 + b1 + b2;
}

function areaTriangle(height, base) {
// Returns the 2D Area of a Triangle
    return base * height / 2
}

function perimTriangle(side1, side2, base) {
// Returns the perimiter of a Parallelogram
    return side1 + side2 + base;
}

function areaCircle(radius) {
// Returns the 2D Area of a Circle
    return Math.PI * radius ** 2;
}

function perimCircle(radius) {
// Returns the perimiter of a Circle
    return Math.PI * 2 * radius;
}

// 3-dimensional shapes - Volume and surface area
//--------------------------------------------------------
function volRectangularSolid(length, width, height) {
// Returns the Volume of a 3D Rectangular object
    return length * width * height;
}
function saRectangularSolid(length, width, height) {
// Returns the Surface Area of a Rectangular object
    return (2 * length * height) + 
        (2 * width * height) * (2 * width * length);
}
function volCube(side) {
// Returns the Volume of a Cube
    return side ** 3;
}
function saCube(side) {
// Returns the Surface Area of a Cube
    return 6 * (side ** 2);
}
function volCylinder(radius, height) {
// Returns the Volume of a Right Circular Cylinder
    return Math.PI * radius ** 2 * height;
}
function saCylinder(radius, height) {
// Returns the Surface Area of a Right Circular Cylinder
    return ((Math.PI * 2) * (radius * height)) + ((Math.PI * 2) * (radius ** 2)); 
}
function volSphere(radius) {
// Returns the Volume of a Sphere
    return ((Math.PI / 3) * 4) * radius ** 3;
}
function saSphere(radius) {
// Returns the Surface Area of a Sphere
    return (Math.PI * 4) * radius ** 2;
}
function volCone(radius, height) {
// Returns the Volume of a Right Circular Cone
    return (Math.PI / 3) * (radius ** 2) * height;
}
function saCone(radius, height) {
// Returns the Surface Area of a Right Circular Cone
    return (Math.PI * radius) * (Math.sqrt(radius ** 2 + height ** 2));
}
function volPyramid(length, width, height) {
// Returns the volume of a Square or Rectangular Pyramid
    return (length * width * height) / 3;
}
function volFrustum(height, radius1, radius2) {
// Returns the volume of a Frustum of a Right Circular Cone
// Basically a cone with the pointy end cut off at a right angle
    var volume = (Math.PI * ((radius1 ** 2) + 
        (radius1 * radius2) + (radius2 ** 2))) / 3;
    return volume;
}
function saFrustum(side, radius1, radius2) {
// Returns the Surface Area of a Frustum of a Right Circular Cone
// Basically a cone with the pointy end cut off at a right angle
    return Math.PI * side * (radius1 + radius2);
}

console.log("Geometry Library loaded...")





