operate = () => {
    
    let note = document.getElementById( 'number1' ).value;
    const h1 = document.getElementById( 'msg' );
    
    if ( note >= 90 && note <= 100 ) {
        h1.innerText = 'You are in the final exam';
        console.log('You are in the final exam');
    } else {
        h1.innerText = 'You are not in the final exam, proof again';
        console.log('You are not in the final exam, proof again');
    }

}
