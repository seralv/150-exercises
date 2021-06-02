calcular = () => {
    let number1 = parseInt(document.getElementById( 'number1' ).value);
    let number2 = parseInt(document.getElementById( 'number2' ).value);
    let sum = number1 + number2;
    console.log(`sum`, sum);
    const h1 = document.getElementById( 'msg' );
    
    if ( number1 == 50 || number2 == 50 || sum == 50 ) {
        h1.innerText = `Some number or the sum is 50`;
        console.log(`Some number or the sum is 50`);
    } else {
        h1.innerText = `Any number is 50, the sum eather`;
        console.log(`Any number is 50, the sum either`);
    }
}
