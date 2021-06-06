operate = () => {

    let n1 = parseInt(document.getElementById( 'number1' ).value);
    let n2 = parseInt(document.getElementById( 'number2' ).value);
    const h1 = document.getElementById( 'msg' );
    let sum = n1 + n2;
    console.log('sum :>> ', sum);
    
    if ( sum >= 50 && sum <= 80 ) {
        h1.innerText = '65';
        console.log('65');
    } else {
        h1.innerText = '80';
        console.log('80');    
    }

}
