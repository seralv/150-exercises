document.getElementById( 'celsius' ).onclick = () => {
    let num1 = parseFloat(document.getElementById( 'num1' ).value);
    console.log(`num1`, num1);
    let num2 = parseFloat(document.getElementById( 'num2' ).value);
    let result = 0;
    
    if ( num1 == 0 && num2 == 0 ) {
        alert( 'Please, insert one number' );
    }
    
    result = num1 * (9 / 5) + 32;
    console.log(`result`, result);
    document.getElementById( 'num2' ).value = result.toFixed(2);

};

document.getElementById( 'faren' ).onclick = () => {
    let num1 = parseFloat(document.getElementById( 'num1' ).value);
    console.log(`num1`, num1);
    let num2 = parseFloat(document.getElementById( 'num2' ).value);
    let result = 0;
    
    if ( num1 == 0 && num2 == 0 ) {
        alert( 'Please, insert one number' );
    }
    
    result = (num2 - 32) * (5 / 9)
    console.log(`result`, result);
    document.getElementById( 'num1' ).value = result.toFixed(2);

};