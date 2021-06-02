document.getElementById( 'temperature' ).onclick = () => {
    const num1 = document.getElementById( 'num1' ).value;
    const num2 = document.getElementById( 'num2' ).value;
    const h1 = document.getElementById( 'result' );
    
    if ( num1 == 0 && num2 == 0 ) {
        alert( 'Please, insert one number' );
    } 
    
    if ( num1 != 0 ) {
        h1.innerText = ( 'The temperature of ', num2, ' farenheit is ', ( ((num2-32) / 9) * 5 ), ' celsius' );
    } else {
        h1.innerText = ( 'The temperature of ', num1, ' celsius is ', ( ((num1 / 5) * 9) +32 ), ' farenheit' );
    }
    
};