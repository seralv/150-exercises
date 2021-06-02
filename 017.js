calcular = () => {
    const number = document.getElementById( 'number1' ).value;
    const h1 = document.getElementById( 'msg' );
    let dif1 = 19 - number;
    let dif2 = number - 19;
    
    if ( number >= 19 ) {
        h1.innerText = `The triple difference is ${ dif2 * 3 }`;
        console.log(`The triple difference is ${ dif2 * 3 }`);
    } else {
        h1.innerText = `The difference is ${ dif1 }`;
        console.log(`The difference is ${ dif1 }`);
    }
}