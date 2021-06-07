let p1 = 0;
let p2 = 0;
let x = 2;
let y = 8;
let radio = 6;

let d = Math.sqrt( (( x - p1 ) * ( x - p1 )) + (( y - p2 ) * ( y - p2 )) );

if ( d < radio ) {
    console.log(`The point is inside the circle`);
} else {
    console.log(`The point is outside the circle`);
}