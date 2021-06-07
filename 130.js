let number = 14;
let prime = 0;
let i = number + 1;

while ( prime == 0 ) {

    let counter = 0;

    for (let j = 1; j <= i; j++) {
        
        if ( i % j == 0 ) {
            counter ++;
        }
        
    }

    if ( counter == 2 ) {
        prime = i;
    }

    i++;
    
}

console.log(`The prime number nearest and grether than ${ number } is ${ prime }`, );