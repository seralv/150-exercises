operate = () => {
    let num1 = parseInt(document.getElementById( 'number1' ).value);
    let num2 = parseInt(document.getElementById( 'number2' ).value);
    const h1 = document.getElementById( 'msg' );
    
    if ( (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0) ) {
        h1.innerText = `Right some number is positive and another one is negative`;
        console.log(`Right some number is positive and another one is negative`);
    } else {
        h1.innerText = `The numbers not working in positive and negative`;
        console.log(`The numbers not working in positive and negative`);
    }
}
