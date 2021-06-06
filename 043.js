operate = () => {

    let n1 = parseInt( document.getElementById( 'number1' ).value );
    let n2 = parseInt( document.getElementById( 'number2' ).value );
    let n3 = parseInt( document.getElementById( 'number3' ).value );
    const h1 = document.getElementById( 'msg' );
    
    n1 = n1 % 10;
    n2 = n2 % 10;
    n3 = n3 % 10;
    
    if ( n1 == n2 && n2 == n3 ) {
        h1.innerText = 'The three last digits are the same';
        console.log( 'The three last digits are the same' );
    } else {
        h1.innerText = 'Some last digit isn´t the same';
        console.log( 'Some last digit isn´t the same' );
    }

}
