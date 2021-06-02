operate = () => {
    let word = document.getElementById( 'number1' ).value;
    const h1 = document.getElementById( 'msg' );
    
    if ( word == null || word == '' || word.substring(0, 2) != 'Py' ) {
        h1.innerText = 'Py' + word;
        console.log( 'Py' + word );
    } else {
        h1.innerText = word;
        console.log( word );
    }
}
