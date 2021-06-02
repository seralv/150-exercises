calcular = () => {
    let number1 = parseInt(document.getElementById( 'number1' ).value);
    let number2 = parseInt(document.getElementById( 'number2' ).value);
    const h1 = document.getElementById( 'msg' );
    
    if ( number1 == number2 ) {
        h1.innerText = `Numbers are the same, the triple result is ${ (number1 + number2) * 3 }`;
        console.log(`Numbers are the same, the triple result is ${ (number1 + number2) * 3 }`);
    } else {
        h1.innerText = `The sum of numbers is ${ number1 + number2 }`;
        console.log(`The sum of numbers is ${ number1 + number2 }`);
    }
}
