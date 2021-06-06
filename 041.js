operate = () => {

    let n1 = parseInt( document.getElementById( 'number1' ).value );
    let n2 = parseInt( document.getElementById( 'number2' ).value );
    let n3 = parseInt( document.getElementById( 'number3' ).value );
    const h1 = document.getElementById( 'msg' );
    let counter = 1;
    
    if ( n1 == n2 ) {
        counter ++;
        if ( n1 == n3 ) {
            counter ++;
        }
    } else {
        if ( n2 == n3 ) {
            counter ++;
        } else {
            if ( n1 == n3 ) {
                counter ++;
            }
        }
    }
    
    switch (counter) {
        case 3:
            h1.innerText = 'The three numbers are equals';
            console.log('The three numbers are equals');
            break;
        case 2:
            h1.innerText = 'Two numbers are equals';
            console.log('Two numbers are equals');
            break;
        default:
            h1.innerText = 'Any number is equal';
            console.log('Any number is equal');
            break;
    }

}