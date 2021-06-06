operate = () => {

    let n1 = document.getElementById( 'number1' ).value;
    let n2 = document.getElementById( 'number2' ).value;
    let n3 = document.getElementById( 'number3' ).value;
    const h1 = document.getElementById( 'msg' );
    n1 = n1 % 10
    n2 = n2 % 10;
    n3 = n3 % 10;
    
    if ( n1 == n2 && n1 == n3 && n2 == n3 ) {
        h1.innerText = `The last digits of the three numbers are the same`;
        console.log(`The last digits of the three numbers are the same`);
    } else {
        h1.innerText = 'Some of three last digits isn´t the same';
        console.log('Some of three last digits isn´t the same');
    }

}
