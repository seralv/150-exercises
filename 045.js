operate = () => {
    
    let n1 = parseInt( document.getElementById( 'number1' ).value );
    let n2 = parseInt( document.getElementById( 'number2' ).value );
    const h1 = document.getElementById( 'msg' );
    let sum = n1 + n2;
    let dif = Math.abs( n1 - n2 );
    
    if ( n1 == 15 ) {
        h1.innerText = 'The first number is 15';
        console.log( 'The first number is 15' );
    }
    
    if ( n2 == 15 ) {
        h1.innerText = 'The second number is 15';
        console.log( 'The second number is 15' );
    }
    
    if ( sum == 15 ) {
        h1.innerText = 'The sum is 15';
        console.log( 'The sum is 15' );
    }
    
    if ( dif == 15 ) {
        h1.innerText = 'The difference is 15';
        console.log( 'The difference is 15' );
    }
    
    if ( n1 != 15 && n2 != 15 && sum != 15 && dif != 15 ) {
        h1.innerText = 'Any number is 15';
        console.log( 'Any number is 15' );
    }

}
