operate = () => {

    let n1 = document.getElementById( 'number1' ).value;
    let n2 = document.getElementById( 'number2' ).value;
    const h1 = document.getElementById( 'msg' );
    
    if ( Math.abs( 100 - n1 ) > Math.abs( 100 - n2 )) {
        h1.innerText = `${ n2 } is nearest than ${ n1 } from 100`;
        console.log(`${ n2 } is nearest than ${ n1 } from 100`);
    } else {
        h1.innerText = `${ n1 } is nearest than ${ n2 } from 100`;
        console.log(`${ n1 } is nearest than ${ n2 } from 100`);
    }

}
