operate = () => {
    
    let word = document.getElementById( 'number1' ).value;
    const h1 = document.getElementById( 'msg' );
    
    h1.innerText = word.substring(1, word.length - 1);
    console.log( word.substring(1, word.length - 1) );

}
