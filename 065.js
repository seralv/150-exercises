operate = () => {
    
    let word = document.getElementById( 'number1' ).value;
    const h1 = document.getElementById( 'msg' );
    
    if ( word.length >= 6 ) {
        if ( word.substring( word.length - 6 ) == 'Script' ) {
            h1.innerText = 'The word end with Script';
            console.log( 'The word end with Script' );
        } else {
            h1.innerText = 'The word doesn´t end with Script';
            console.log( 'The word doesn´t end with Script' );
        }
    } else {
        h1.innerText = 'The word is less than 6';
        console.log( 'The word is less than 6' );
    }

}
