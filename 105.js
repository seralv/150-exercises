let number = 156;
let counter = 0;
let sum = number;

while ( sum > 10 ) {
    sum = 0;
    counter ++;
    while ( number > 0 ) {
        sum += number % 10;
        number = Math.floor( number / 10 );
    }
    number = sum;
    console.log(`The number was added ${ counter } times`);
    console.log(`sum`, sum);
}
