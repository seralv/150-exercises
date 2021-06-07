let number = 1111;
let counter = 0;
let lastDigit = number % 10;
number = Math.floor(  number / 10 );

while ( number > 0 ) {

    if ( lastDigit != number % 10 ){
        counter ++;
    }

    lastDigit = number % 10;
    number = Math.floor(  number / 10 )
    
}

if ( counter > 0 ) {
    console.log(`Not all numbers are the same`);
} else {
    console.log(`All numbers are the same`);
}