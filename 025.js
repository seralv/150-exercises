operate = () => {

    let number = document.getElementById( 'number1' ).value;
    const h1 = document.getElementById( 'msg' );
    const h2 = document.getElementById( 'msg2' );
    h1.innerText = '';
    h2.innerText = '';
        
    if ( number % 3 == 0 ) {
        h1.innerText = `${ number } is multiple of 3`;
        console.log( `${ number } is multiple of 3` );
    }
    
    if ( number % 7 == 0 ) {
        h2.innerText = `${ number } is multiple of 7`;
        console.log( `${ number } is multiple of 7` );
    } 
    if ( number % 3 != 0 && number % 7 != 0 ) {
        h1.innerText = `${ number } is multiple of 3 or 7`;
        console.log( `${ number } isn't multiple of 3 or 7` );
    }

}
