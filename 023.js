operate = () => {
    
    let word = document.getElementById( 'number1' ).value;
    let partWord = word.substring( 1, word.length - 1 );
    const h1 = document.getElementById( 'msg' );
    
    if ( word.length > 1 ) {
        h1.innerText = `New word is ${ word.charAt( word.length - 1 ) + partWord + word.charAt( 0 ) }`;
        console.log(`New word is ${ word.charAt( word.length - 1 ) + partWord + word.charAt( 0 ) }`);
    } else {
        h1.innerText = `The word is very short`;
        console.log(`The word is very short`);
    }

}
