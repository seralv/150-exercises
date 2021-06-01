const number = prompt('Insert a number');

const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log( randomNumber );

if ( number == randomNumber ) {
    console.log( 'Good work' );
} else {
    console.log( 'Not matched' );
}
