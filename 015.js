calcular = () => {
    let num = parseInt(document.getElementById( 'number' ).value);
    let h1 = document.getElementById( 'msg' );
    
    if ( num <= 13 ) {
        h1.innerText = `The difference is ${ 13 - num }`;
        console.log(h1);
    } else {
        h1.innerText =  `The number is greater than 13, the difference double is ${ (num - 13) * 2}`;
    }
}
