operate = () => {

    let n1 = document.getElementById( 'number1' ).value;
    let n2 = document.getElementById( 'number2' ).value;
    let n3 = document.getElementById( 'number3' ).value;
    const h1 = document.getElementById( 'msg' );
    
    if ( (n1 > 49 && n1 < 100) || (n2 > 49 && n2 < 100) || (n3 > 49 && n3 < 100) ) {
        h1.innerText = `Some number is in the range`;
        console.log( `Some number is in the range` );
    } else {
        h1.innerText = `Any number is in the range`;
        console.log( `Any number is in the range` );
    }

}
