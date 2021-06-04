operate = () => {
    
    let word = document.getElementById( 'number1' ).value;
    const h1 = document.getElementById( 'msg' );
    
    if ( word.substring( 0, 4 ) == 'Java') {
        h1.innerText = `La palabra ${ word } comienza con Java`;
        console.log( `La palabra ${ word } comienza con Java` );
    } else {
        h1.innerText = `La palabra ${ word } NO comienza con Java`;
        console.log( `La palabra ${ word } NO comienza con Java` );
    }

}
