operate = () => {

    let n1 = parseInt( document.getElementById( 'number1' ).value );
    let n2 = parseInt( document.getElementById( 'number2' ).value );
    let n3 = parseInt( document.getElementById( 'number3' ).value );
    const h1 = document.getElementById( 'msg' );
    
    if ( n1 >= 20 && ( n1 < n2 || n1 < n3 ) ||  n2 >= 20 && ( n2 < n1 || n1 < n3 ) || n3 >= 20 && ( n3 < n1 || n1 < n2 ) ) {
        h1.innerText = 'Yeah, you did it!!!';
        console.log( 'Yeah, you did it!!!' );
    } else {
        h1.innerText = 'Proof again';
        console.log( 'Proof again' );
    }
}


