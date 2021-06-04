operate = () => {

    let number1 = document.getElementById( 'number1' ).value;
    let number2 = document.getElementById( 'number2').value;
    const h1 = document.getElementById( 'msg' );
    
    if ( number1 > 49 && number1 < 100 && number2 > 49 && number2 < 100 ) {
        h1.innerText = `Both numbers are in range from 50 to 99`;
        console.log( `Both numbers are in range from 50 to 99` );
    } else {
        h1.innerText = `Some number isn't in range from 50 to 99`;
        console.log( `Some number isn't in range from 50 to 99` );
    }

}
