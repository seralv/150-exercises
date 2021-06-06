operate = () => {

    let n1 = document.getElementById( 'number1' ).value;
    let n2 = document.getElementById( 'number2' ).value;
    const h1 = document.getElementById( 'msg' );
    
    if ( (n1 >= 40 && n1 <= 60) && (n2 >= 40 && n2 <= 60) ) {
        if ( n1 > n2 ) {
            h1.innerText = `The major is ${ n1 }`;
            console.log(`The major is ${ n1 }`);
        } else {
            h1.innerText = `The major is ${ n2 }`;
            console.log(`The major is ${ n2 }`);
        }
    } else {
        h1.innerText = `Some number isn´t in the range`;
        console.log(`Some number isn´t in the range`);
    }

}
