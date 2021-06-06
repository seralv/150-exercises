operate = () => {
    
    let word = document.getElementById( 'number1' ).value;
    let char = document.getElementById( 'number2' ).value;
    const h1 = document.getElementById( 'msg' );
    let val = false;
    
    for (let i = 4; i <= 6; i++) {
        if ( word.charAt(i) == char ) {
            val = true;
        }  
    }
    
    if ( val == true ) {
        h1.innerText = `The char "${ char }" is within 4 and 6 position from ${ word }`;
        console.log( `The char "${ char }" is within 4 and 6 position from ${ word }` );
    } else {
        h1.innerText = `The char "${ char }" isn´t in range of word ${ word }`;
        console.log( `The char "${ char }" isn´t in range of word ${ word }` );
    }

}
