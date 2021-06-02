operate = () => {

    let word = document.getElementById( 'number1' ).value;
    const h1 = document.getElementById( 'msg' );
    
    h1.innerText = `The new word is ${ word.charAt( 0 ) + word + word.charAt( 0 ) }`;
    console.log( `The new word is ${ word.charAt( 0 ) + word + word.charAt( 0 ) }` );

}
