operate = () => {

    let n1 = parseInt( document.getElementById( 'number1' ).value );
    let n2 = parseInt( document.getElementById( 'number2' ).value );
    let n3 = parseInt( document.getElementById( 'number3' ).value );
    const h1 = document.getElementById( 'msg' );
    
    if ( n1 < n2 && n2 < n3 ) {
        h1.innerText = 'The numbers are in strict mode';
        console.log('The numbers are in strict mode');
    } else {
        h1.innerText = 'The numbers are in soft mode';
        console.log('The numbers are in soft mode');
    }

}
