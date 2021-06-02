operate = () => {
    
    let word = document.getElementById( 'number1' ).value;
    let except = word.substring(word.length-3, word.length);
    const h1 = document.getElementById( 'msg' );
    
    if ( word.length > 3 ) {
        h1.innerText = `${ except + word + except }`;
        console.log( `${ except + word + except }` );
    } else {
        h1.innerText = `Insert a word with more of three letters`;
        console.log( `Insert a word with more of three letters` );
    }

}
