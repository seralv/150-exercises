operate = () => {

    let word = document.getElementById( 'number1' ).value;
    const h1 = document.getElementById( 'msg' );
    
    if ( word.substring( 4, 10 ) == 'Script' ) {
        h1.innerText = word.substring( 0, 4 ) + word.substring( 10, word.length );
        console.log( word.substring( 0, 4 ) + word.substring( 10, word.length ) );
    } else {
        h1.innerText = word;
        console.log( word );
    }

}
