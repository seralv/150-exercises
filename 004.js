
console.log(`//////////////// EXERCISE 4 ////////////////`);

const num1 = 18;
const num2 = 30;
const num3 = 24;
    
const perimeter = ( num1 + num2 + num3 ) / 2;
console.log(`perimeter`, perimeter);
const area = Math.sqrt( perimeter * ( perimeter - num1 ) * ( perimeter - num2 ) * ( perimeter - num3 ) );
console.log(`area`, area);