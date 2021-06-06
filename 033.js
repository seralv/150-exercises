operate = () => {

    let n1 = document.getElementById( 'number1' ).value;
    let n2 = document.getElementById( 'number2' ).value;
    const h1 = document.getElementById( 'msg' );
    
    if ( ((n1 >= 40 && n1 <= 60) || (n1 >=70 && n1 <= 100)) && ((n2 >= 40 && n2 <= 60) || (n2 >=70 && n2 <= 100)) ) {
        h1.innerText = 'The numbers are in the range';
        console.log('The numbers are in the range');
    } else {
        h1.innerText = 'Some number isn´t in the range';
        console.log('Some number isn´t in the range');
    }

}
