// let number = 1900;
for (let number = 2000; number < 2021; number++) {
    
    if ( number % 4 === 0 ) {
        if ( number % 100 === 0 ) {
            if ( number % 400 === 0 ) {
                console.log(`El año ${ number } es bisiesto`);
            } else {
                console.log(`EL AÑO ${ number } NO ES BISIESTO`);
            }
        } else {
            console.log(`El año ${ number } es bisiesto`);    
        }
    } else {
        console.log(`EL AÑO ${ number } NO ES BISIESTO`);
    }
    
}