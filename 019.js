operate = () => {
    let number = document.getElementById( 'number1' ).value;
    const h1 = document.getElementById( 'msg' );
    
    if ( number > 0 && number <= 20 ) {
        h1.innerText = `The number ${ number } is between 0 and 20.`;
        console.log(`The number ${ number } is between 0 and 20.`);
    }
    if ( number > 20 && number <= 100 ) {
        h1.innerText = `The number ${ number } is between 20 and 100.`;
        console.log(`The number ${ number } is between 20 and 100.`);
    }
    if ( number > 100 && number <= 400 ) {
        h1.innerText = `The number ${ number } is between 100 and 400.`;
        console.log(`The number ${ number } is between 100 and 400.`);
    }

}
