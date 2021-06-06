operate = () => {
    
    let word = document.getElementById( 'number1' ).value;
    const h1 = document.getElementById( 'msg' );
    
    if ( word.length > 3 ) {
        h1.innerText = word.substring(0, 3).toLowerCase() + word.substring(3, word.length).toUpperCase();
        console.log( word.substring(0, 3).toLowerCase() + word.substring(3, word.length).toUpperCase() );
    } else {
        h1.innerText = word.toUpperCase();
        console.log( word.toUpperCase() );
    }

}
