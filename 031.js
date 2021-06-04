operate = () => {
    
    let n1 = parseInt(document.getElementById( 'number1' ).value);
    let n2 = parseInt(document.getElementById( 'number2' ).value);
    let n3 = parseInt(document.getElementById( 'number3' ).value);
    const h1 = document.getElementById( 'msg' );
    
    let major = 0;
    
    if ( n1 > major ) {
        major = n1;
    }
    
    if ( n2 > major ) {
        major = n2;
    }
    
    if ( n3 > major ) {
        major = n3;
    }
    
    h1.innerText = `The major is ${ major }`;

}
