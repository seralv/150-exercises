document.getElementById( 'multiply' ).onclick = () => {
    const num1 = document.getElementById( 'num1' ).value;
    const num2 = document.getElementById( 'num2' ).value;
    const h1 = document.getElementById( 'result' );
    h1.innerText = ('Multiply result is ', (num1 * num2));
};

document.getElementById( 'divide' ).onclick = () => {
    const num1 = document.getElementById( 'num1' ).value;
    const num2 = document.getElementById( 'num2' ).value;
    const h1 = document.getElementById( 'result' );
    h1.innerText = ('Divide result is ', (num1 / num2));
};