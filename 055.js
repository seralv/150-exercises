operate = () => {

    let word = document.getElementById( 'number1' ).value;
    const h1 = document.getElementById( 'msg' );
    let countp = 0;
    let countt = 0;
    
    for (const wor of word) {
        if ( wor == 'p' ) {
            countp ++;
        }
    
        if ( wor == 't' ) {
            countt ++;
        }
    }
    
    if ( countp == countt ) {
        h1.innerText = 'The p´s and t´s are the same number';
        console.log( 'The p´s and t´s are the same number' );
    } else {
        h1.innerText = 'The p´s and t´s are different';
        console.log( 'The p´s and t´s are different' );
    }

}
