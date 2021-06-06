operate = () => {

    let n1 = parseInt(document.getElementById( 'number1' ).value);
    let n2 = parseInt(document.getElementById( 'number2' ).value);
    const h1 = document.getElementById( 'msg' );
    let sum = n1 + n2;
    console.log('sum :>> ', sum);
    let dif = Math.abs( n1 - n2 );
    console.log('dif :>> ', dif);
    
    if ( n1 == 8 ) {
        h1.innerHTML = `The first number is equal to 8`;
        console.log(`The first number is equal to 8`);
    }
    
    if ( n2 == 8 ) {
        h1.innerText = `The second number is equal to 8`;
        console.log(`The second number is equal to 8`);
    }
    
    if ( sum == 8 ) {
        h1.innerText = `The sum is equal to 8`;
        console.log(`The sum is equal to 8`);
    }
    
    if ( dif == 8 ) {
        h1.innerText = `The difference is equal to 8`;
        console.log(`The difference is equal to 8`);
    } 
    
    if ( n1 != 8 && n2 != 8 && sum != 8 && dif != 8 ) {
        h1.innerText = 'Any number is equal to 8';
        console.log('Any number is equal to 8');
    }
    
}