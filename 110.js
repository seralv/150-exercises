let vec = [1, 2, 3, 4, 5, 6, 7, 8];
let num = 6;
let counterPairs = 0;
let i = 0;

while ( vec[i] != num ) {
    
    if ( vec[i] % 2 == 0 ) {
        counterPairs ++;
    }
    i++;
}

console.log( `There are ${ counterPairs } pairs until ${ num }` );